const authRoute = require("./auth.route");
const usersRoute = require("./users.route");
const videosRoute = require("./videos.route");
const addvideoRoute = require("./add.video.routes");

module.exports = [authRoute, usersRoute, videosRoute, addvideoRoute];
