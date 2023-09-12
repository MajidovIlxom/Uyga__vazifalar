const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/group.controller');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

router.post("/group",isAuth,isAdmin,create)
router.get("/group",find)
router.get("/group/:id",findOne)
router.put("/group/:id",isAuth,isAdmin,update)
module.exports = router