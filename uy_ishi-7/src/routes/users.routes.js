const {register, moneyTransfer } = require("../controllers/usercontr")

const router = require("express").Router()

router.post("/register",register)
router.patch("/transfer",moneyTransfer)


module.exports = router