const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/examCreat.controller');
const fileUpload = require('../middleware/fileuplode.middleware');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

router.post("/examcreat",isAuth,isAdmin,fileUpload,create)
router.get("/examcreat",isAuth,isAdmin, find)
router.get("/examcreat/:id",isAuth,isAdmin, findOne)
router.put("/examcreat/:id",isAuth,isAdmin, update)
module.exports = router

