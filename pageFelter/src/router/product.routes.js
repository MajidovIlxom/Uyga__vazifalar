const { create, update, find, findOne } = require('../controllers/product.controllers');

const router = require('express').Router();


router.post("/product", create)
router.get("/product/:id", findOne)
router.get("/product", find)
router.put("/product/:id", update)

module.exports = router