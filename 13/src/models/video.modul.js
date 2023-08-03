class Video {
    constructor(id, owner, videoName, description){
        this.id = id;
        this.id = owner;
        this.videoName = videoName
        this.description = description;
        this.created_at =  new Date()
    }
}

module.exports = Video;