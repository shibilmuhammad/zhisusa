const express = require('express');
const router = express.Router();
const adminAuthMiddleWare = require('../middleware/authMiddleware')
const categoryController = require('../controllers/Admin/categoryController');
const loginController = require('../controllers/Admin/loginController')
const livetypesController = require('../controllers/Admin/livetypesController')

//categories
router.post('/deleteCategory',adminAuthMiddleWare.verifyToken,categoryController.deleteCategory)
router.post('/updateCategory',adminAuthMiddleWare.verifyToken,categoryController.upadateCategory)
router.get('/getAllCategories',adminAuthMiddleWare.verifyToken,categoryController.getCategories)
router.post('/addCategory',adminAuthMiddleWare.verifyToken,categoryController.addCategory)


//adminLogin
router.post('/login',loginController.postLogin)
router.post('/logout',loginController.logout)
router.get('/validatetoken',loginController.validateToken)
module.exports = router

//live types

router.get('/getlivetypes',livetypesController.getroomsData);
router.post('/addrooms',livetypesController.addrooms)