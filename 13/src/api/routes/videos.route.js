const {Router} = require("express");
const router = Router();
const Io = require("../../utils/io")
const Videos = new Io("./database/video.json")

router.get("/videos/:id", async(req, res) => {
  const {id} = req.params
  const video = await Videos.read()
  const videos = video.filter((video) => video.id == id);
  
  res.render("videos",{
    videos
  });
  
});

module.exports = router;
  