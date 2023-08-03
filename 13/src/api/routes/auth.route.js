const {Router} = require("express");
const {login, register} = require("../controllers/auth.controller");
const fileUpload = require("../middlewares/file.uplout.middlewares");

const router = Router();

router.post("/auth/login", login);
router.post("/auth/register",fileUpload, register);

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
