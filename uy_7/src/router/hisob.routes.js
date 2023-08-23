const router = require('express').Router();

const hisoblash = require('../controllers/hizmat.control');
const isAuth = require('../middleware/isAuth');

router.get('/hisob/:id',isAuth, hisoblash)

module.exports = router

