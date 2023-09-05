const router = require('express').Router();

const { create, find, findOneNO } = require('../controllers/job.controller');

router.post('/jobs',create)
router.get('/jobs', find)
router.get('/jobs/:id', findOneNO)


module.exports = router