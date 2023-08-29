const router = require('express').Router();

const { find, create } = require('../controllers/rasxod.controllers');

router.post("/rasxod", create)
router.post("/rasxod",find)


module.exports = router