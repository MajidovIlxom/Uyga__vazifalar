const {Router} = require("express");
const { createfavourites, getfavourites, deletefavourites } = require("../controllers/favourites.controller");

const router = Router();

router.post("/favourites",createfavourites)
router.get("/favourites",getfavourites)
router.delete("/favourites/:id",deletefavourites)

module.exports = router;
