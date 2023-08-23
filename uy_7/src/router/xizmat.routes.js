const { xizmatCreate, xizmatGet } = require('../controllers/xizmat.controller');
const isAuth = require('../middleware/isAuth');

const router = require('express').Router();


router.post("/xizmat",isAuth,xizmatCreate )
router.get("/xizmat",isAuth,xizmatGet )

module.exports = router