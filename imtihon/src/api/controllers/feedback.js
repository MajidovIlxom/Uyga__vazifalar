const Io = require('../../utils/io')
const FeedBack = new Io("./database/feedback.json");

const feedmodel = require("../../models/feedback.model")

const creatFeedback = async(req, res) => {
    try {
        const {name,description} = req.body
        const photo = req.imageName;
        const feed = await FeedBack.read()
        
        const id = (feed[feed.length - 1]?.id || 0) + 1;
        const newfeed = new feedmodel(id, photo, name, description)
        

        const data = feed.length ? [...feed,newfeed] : [newfeed]

        await FeedBack.write(data)
        res.status(200).json({message: "Success"})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "server error"})
    }
}

const getAllFeed = async(req, res) => {
    const getfeed = await FeedBack.read()
    
    const feed = getfeed.filter(feed => feed.status == true)
    res.json({message: feed})
}

const getById = async(req, res) => {
    const {id} = req.params;
    const feed = await FeedBack.read();

    const data = feed.find((p) => p.id == id);
    if (!data.status == true) return res.json({message: "Bu foydalanuvchi yo'q"})
}

const putFeed = async(req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;
    const feed = await FeedBack.read()

    const data = feed.find((p) => p.id == id);

    if (!data) return  res.status(404).json({message: "Not Found"});

    data.name = name; 
    data.description = description;

    await FeedBack.write(feed);
    res.status(200).json({message: "OK"});
}

const removeFeed = async(req, res) => {
  const {id} = req.params;
  const feed = await FeedBack.read();

  const filter = feed.find((p) => p.id == id);
  filter.status = false
  await FeedBack.write(feed);

  res.json({message: "Deleted"});
}

module.exports = {creatFeedback, getAllFeed, getById , putFeed, removeFeed}