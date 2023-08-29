const AuthRouter = require('./register.routes')
const DaxodRouter = require('./daxod.routes')
const CategoryRouter = require('./category.routes')
const RasxodRouter = require("./rasxod.routes")
const hisobRouter = require("./hisob.routes")


module.exports = [AuthRouter,DaxodRouter, CategoryRouter,RasxodRouter, hisobRouter]