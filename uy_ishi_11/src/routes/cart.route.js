const {Router} = require("express");
const { createCart, getCart, deleteCart } = require("../controllers/cart.controller");
const isAuth = require("../middlewares/is-auth.middleware");

const router = Router();

router.post("/cart",isAuth,createCart)
router.get("/cart",isAuth,getCart)
router.delete("/cart/:id",isAuth,deleteCart)
module.exports = router;
