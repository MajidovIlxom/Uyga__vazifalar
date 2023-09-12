const router = require('express').Router();

const login = require('../controllers/Admin.controller');

router.post("/login", login)

module.exports = router