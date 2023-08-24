const router = require('express').Router();

const {categoreCreate, categoreGetAll} = require('../controllers/categore.controlles');


router.post("/categore", categoreCreate)
router.get("/categore", categoreGetAll)


module.exports = router