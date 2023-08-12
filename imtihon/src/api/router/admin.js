const { getAllAdmin, Checkcontact } = require("../controllers/admin.controllers");
const isAuth = require("../middleware/isAuth");

const router = require("express").Router();


router.get('/admin',isAuth, getAllAdmin)
router.put('/admin/:id',isAuth, Checkcontact)

module.exports = router