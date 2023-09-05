const { create, find } = require('../controllers/resume.controller');

const router = require('express').Router();


router.post('/resume',create)
router.get('/resume', find)


module.exports = router