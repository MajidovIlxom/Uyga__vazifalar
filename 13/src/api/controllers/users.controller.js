const Io = require("../../utils/io")
const vedio = new Io("./database/vedio.json");


const userVideo = async(req, res) => {
    const {id} = req.params;
    const video = await vedio.read()
    const videos = video.filter((video) => video.id == id);
  
    res.render("videos", {
      videos,
    });
  }

module.exports = userVideo;