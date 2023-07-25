const Io = require("../utils/Io");
const path = require("path");

const {get} = require("../utils/get");
const Channel = require("../models/Channel");
const Post = require("../models/Post");

// const Users = new Io(process.cwd() + "/database/users.json");
const Channels = new Io(process.cwd() + "/database/channels.json");
const Postis = new Io(process.cwd() + "/database/posts.json");


const createPost = async (req, res) => {
  const {title, description, channel} = req.body;
  const photos = req.files?.photo;

  const postis = await get(Postis);

  let imageName;
  const views = 0
  if (photos){
    const mimetype = path.extname(photos.name);
    imageName = photos.md5 + "_" + Date.now() + mimetype;
    photos.mv(`${process.cwd()}/uploads/${imageName}`);
  }
  const id = (postis[postis.length - 1]?.id || 0) + 1;

  const newPosts = new Post(
    id,
    imageName,
    title,
    description,
    views,
    channel
  );

  const result = postis.length ? [...postis, newPosts] : [newPosts];

  await Postis.write(result);

  res.status(201).json({message: "CREATED"});
};

const getAllPosts = async (req, res) => {
  const channels = await get(Channels);
  const potos = await get(Postis);

  const find = potos.map((potos) => {
    potos.channel = channels.find((ch) => ch.id == potos.channel);
    return potos;
  });
  res.json({potos: find});
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  const posts = await get(Postis);
  const channels = await get(Channels);
  const findPost = posts.find((post) => post.id == id);
  
  if (!findPost) {
    return res.status(404).json({ message: `${id} - NOT FOUND THIS ID` });
  }
  
  findPost.views += 1;
  await Postis.write(posts);
  
  const findChannel = channels.find((ch) => ch.id == findPost.channel);
  findPost.channel = findChannel;
  
  res.json({ post: findPost });
};



module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
};
