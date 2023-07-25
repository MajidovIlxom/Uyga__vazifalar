const Io = require("../utils/Io");
const path = require("path");

const {get} = require("../utils/get");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const COMMENT = new Io(process.cwd() + "/database/comments.json");
const Posts = new Io(process.cwd() + "/database/posts.json");

const createComment = async (req, res) => {
  const {text, author, post} = req.body;
  const posts = await get(Posts);
  const com = await get(COMMENT)
  const id = (com[com.length - 1]?.id || 0) + 1;
  const findPost = posts.find((p) => p.id == post);
  if (!findPost){
    res.status(404).send({message: "Invalid post"})
    return;
  }
  
  const newPosts = new Comment(
    id,
    text,
    author,
    post,
  );

  const result = com.length ? [...com, newPosts] : [newPosts];

  await COMMENT.write(result);

  res.status(201).json({message: "CREATED"});
};

const getAllComments = async (req, res) => {
  const com = await get(COMMENT);
  const posts = await get(Posts);

  const find = com.map((postlar) => {
    postlar.posts = posts.find((ch) => ch.id == postlar.post);

    return postlar;
  });

  res.json({COMMENT: find});
};
const getOneComment = async (req, res) => {
  const { id } = req.params;
  const com = await get(COMMENT);
  const post = await get(Posts);
  const findcom = com.find((post) => post.id == id);
  
  if (!findcom) {
    return res.status(404).json({ message: `${id} - NOT FOUND THIS ID` });
  }
  
  const findPosts = post.find((ch) => ch.id == findcom.post);
  findcom.post = findPosts;
  
  res.json({ com: findcom });
};
const deleteOneComment = async (req, res) => {
  const {id} = req.params
  const com = await get(COMMENT);

  const findCom = com.find((c)=> c.id == id)

  if (!findCom){
      return res.status(404).json({message: 'ID topilmadi'})
  }

  const filterCom = com.filter((c)=> c.id != id)
  
  await COMMENT.write(filterCom)

  res.json({message: "Muvaffaqiyatli O'chirildi"})
};

module.exports = {
  createComment,
  getAllComments,
  getOneComment,
  deleteOneComment,
};
