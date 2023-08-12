const {Router} = require("express")
const adminLogin = require("../controllers/login.admin")

const routes = Router()

routes.post("/auth/login" ,adminLogin )

module.exports = routes