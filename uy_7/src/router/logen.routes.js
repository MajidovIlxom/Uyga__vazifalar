const router = require('express').Router()

const {loginUser, register, getAllUsers} = require('../controllers/logen.controllers')
const isAuth = require('../middleware/isAuth')

router.post('/logen', loginUser)
router.post('/register',register)
router.get('/register',getAllUsers)



module.exports = router