const registerRouter = require("./register.routes")
const resumeRouter = require("./resume.routes")
const joiRouter = require("./job.routes")


module.exports = [registerRouter, joiRouter, resumeRouter]