const router = require('express').Router();

const {creatCategory, find} = require('../controllers/category.controllers');


router.post("/category", creatCategory)
router.get("/category",find)


module.exports = router