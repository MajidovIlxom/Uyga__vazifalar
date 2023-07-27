const isfrom = require("../../middlewares/isfrom")
const {register, moneyTransfer } = require("../controllers/usercontr")
const router = require("express").Router()

router.post("/register",register)
router.patch("/transfer",isfrom,moneyTransfer)


module.exports = router