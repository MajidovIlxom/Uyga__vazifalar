const router = require('express').Router();

const {productCreate, productGetAll, deletpro} = require('../controllers/product.controllers');

router.post("/product", productCreate)
router.get("/product", productGetAll)
router.delete("/product", deletpro)


module.exports = router
