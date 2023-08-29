const router = require('express').Router();

const { register, logen } = require('../controllers/auth.controllers');


router.post("/register", register)
router.post("/logen", logen)

module.exports= router