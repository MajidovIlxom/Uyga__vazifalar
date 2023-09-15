const router = require('express').Router();

const { create, find, update, findOne } = require('../controllers/evaluation.controller');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

router.post("/baxo", create)
router.get("/baxo",isAuth,isAdmin, find)
router.get("/baxo/:id",isAuth, isAdmin, findOne) 
router.put("/baxo/:id",isAuth,isAdmin, update)
module.exports = router
