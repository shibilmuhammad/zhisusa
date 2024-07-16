const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/Admin/categoryController');



//categories
router.post('/deleteCategory',categoryController.deleteCategory)
router.post('/updateCategory',categoryController.upadateCategory)
router.get('/getAllCategories',categoryController.getCategories)
router.post('/addCategory',categoryController.addCategory)

module.exports = router