const {Router} = require("express");
const isAdmin = require("../middlewares/is-admin.middleware");
const { postorder, getorder, getOrderProfit } = require("../controllers/order.controller");
const isAuth = require("../middlewares/is-auth.middleware");

const router = Router();


router.post("/order",isAuth,isAdmin,postorder)
router.get("/order",isAuth,isAdmin,getorder)
router.get("/order/hammasi",isAuth,isAdmin,getOrderProfit)


module.exports = router;
