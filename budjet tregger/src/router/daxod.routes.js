const router = require('express').Router();

const { create, find } = require('../controllers/daxod.controlles');

router.post("/daxod", create)
router.get("/daxod",find)


module.exports = router