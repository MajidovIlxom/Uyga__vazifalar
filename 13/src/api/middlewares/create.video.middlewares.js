const {v4: uuid} = require("uuid");
const path = require("path");

const cerateVideoUpload = (req, res, next) => {
  const file = req.files?.video;


  if (!file) return res.status(400).json({message: "Image is required"});

  const mimetype = path.extname(file.name);
  const videoName = uuid() + mimetype;

  file.mv(`${process.cwd()}/uploads/${videoName}`);

  req.videoName = videoName;  
  next();
};

module.exports = cerateVideoUpload;
