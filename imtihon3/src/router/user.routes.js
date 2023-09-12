const router = require('express').Router();

const { create, update, find, findOne } = require('../controllers/user.controller');


router.post("/user", create)
router.get("/user",find)
router.get("/user/:id",findOne)
router.put("/user/:id",update)
module.exports = router