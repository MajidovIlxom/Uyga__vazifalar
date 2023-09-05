const router = require('express').Router();

const { create, find, findOne } = require('../controllers/category.controllers');

router.post("/category", create)
router.get("/category", find)
router.get("/category/:id", findOne)

module.exports = router