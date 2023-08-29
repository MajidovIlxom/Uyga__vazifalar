const router = require('express').Router();

const hisobkitob = require('../controllers/hisob.controlees');

router.put("/hisob/:id",hisobkitob)

module.exports = router