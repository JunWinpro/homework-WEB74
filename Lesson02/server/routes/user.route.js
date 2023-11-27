const express = require('express')
const router = express.Router();
const {getAllUsers, getUsersBy, createAnUser, createUsers,updateUserById,deleteUserById} = require('../controllers/user.controller')


router.get('/all', getAllUsers)

router.post('/search', getUsersBy)

router.post('/createOne', createAnUser)

router.post('/createMany', createUsers)


router.put('/update/:userId', updateUserById)


router.delete('/delete/:userId', deleteUserById)

module.exports = router;