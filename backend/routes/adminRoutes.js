const express = require('express');
const router = express.Router();
const adminAuthMiddleWare = require('../middleware/authMiddleware')
const categoryController = require('../controllers/Admin/categoryController');
const loginController = require('../controllers/Admin/loginController')


//categories
router.post('/deletecategory',categoryController.deleteCategory)
router.get('/getallcategories',adminAuthMiddleWare.verifyToken, categoryController.getCategories)
router.post('/addCategory',categoryController.addCategory)


//adminLogin
router.post('/login',loginController.postLogin)
module.exports = router