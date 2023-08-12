const {Router} = require("express")
const {createContac} = require("../controllers/contec.controllers")

const routes = Router()

routes.post("/contact" ,createContac)


module.exports = routes