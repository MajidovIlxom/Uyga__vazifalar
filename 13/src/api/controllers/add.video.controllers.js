
const Io = require('../../utils/io')
const VideoBaza = new Io("./database/video.json");

const videomodel = require("../../models/video.modul")

const creatVideo = async(req, res) => {
    try {
        const {description} = req.body
        const id = req.user.id;
        const videoname = req.videoName;
        
        if (!id) res.redirect("/api/add")  

        if (!videoname) res.redirect("/api/add")
        
        const videos = await VideoBaza.read()
        
        const id1 = (videos[videos.length - 1]?.id || 0) + 1;
        console.log(id1);
        const newVideo = new videomodel(id1, id, videoname, description)
        

        const data = videos.length ? [...videos,newVideo] : [newVideo]

        await VideoBaza.write(data)

        res.redirect("/api")
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "server error"})
    }
}

module.exports = creatVideo