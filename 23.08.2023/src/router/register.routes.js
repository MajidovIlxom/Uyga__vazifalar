const router = require('express').Router();

const { register, loginUser, getAllUsers } = require('../controllers/register.controller');


router.post('/register' ,register)
router.post('/login' ,loginUser)
router.get('/register' ,getAllUsers)




module.exports = router