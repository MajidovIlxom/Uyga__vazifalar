const {Router} = require("express");
const Io = require("../../utils/io")
const User = new Io("./database/users.json")


const router = Router();


router.get("/", async(req, res) => {
  const users = await User.read()
  res.render("index", {
    users,
  });
});

module.exports = router;
