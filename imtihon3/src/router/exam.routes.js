const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/exam.controller');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

router.post("/exam",isAuth,create)
router.get("/exam",find)
router.get("/exam/:id",findOne)
router.put("/exam/:id",isAuth,isAdmin, update)
module.exports = router