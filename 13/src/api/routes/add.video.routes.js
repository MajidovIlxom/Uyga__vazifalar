const {Router} = require("express");
const isAuth = require("../middlewares/is.auth.middleware");
const cerateVideoUpload = require("../middlewares/create.video.middlewares");
const creatVideo = require("../controllers/add.video.controllers");

const router = Router();


router.post("/create", isAuth, cerateVideoUpload, creatVideo)

router.get("/add", async(req, res) => {
  res.render("add-video",) 
});


module.exports = router;

