const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/examCreat.controller');
const fileUpload = require('../middleware/fileuplode.middleware');

router.post("/examcreat",fileUpload,create)
router.get("/examcreat", find)
router.get("/examcreat/:id", findOne)
router.put("/examcreat/:id", update)
module.exports = router

