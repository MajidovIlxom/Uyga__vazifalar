const {Router} = require("express")
const {creatServic,getAllser, getById, remove, putServic} = require("../controllers/services.controlls")
const fileUpload = require("../middleware/file.uplot")
const isAuth = require("../middleware/isAuth")

const routes = Router()

routes.post("/services", isAuth,  fileUpload, creatServic)
routes.get("/services", getAllser)
routes.get("/services/:id", getById)
routes.put("/services/:id",isAuth,fileUpload,putServic)
routes.delete("/services/:id", isAuth, remove)

module.exports = routes