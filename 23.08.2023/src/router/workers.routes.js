const router = require('express').Router();

const { updateUser, rolesUpdate, getAllUsers, updateUserdelete } = require('../controllers/workers.controllers');
const isAuth = require('../middleware/isAuth');



router.put('/update/:id',isAuth , updateUser)
router.put('/updatee/:id', isAuth, rolesUpdate)
router.get('/update', getAllUsers)
router.put('/updatedelet/:id', isAuth, updateUserdelete)



module.exports = router