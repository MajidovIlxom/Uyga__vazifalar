const {Router} = require("express")
const fileUpload = require("../middleware/file.uplot")
const { creatFeedback, getAllFeed, getById, removeFeed, putFeed } = require("../controllers/feedback")
const isAuth = require("../middleware/isAuth")

const routes = Router()

routes.post("/feedback",fileUpload,creatFeedback)
routes.get("/feedback", getAllFeed)
routes.get("/feedback/:id", getById)
routes.put("/feedback/:id",isAuth,fileUpload, putFeed)
routes.delete("/feedback/:id",isAuth, removeFeed)

module.exports = routes