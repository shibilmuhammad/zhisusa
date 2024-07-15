const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/Admin/categoryController');



//categories
router.post('/deletecategory',categoryController.deleteCategory)
router.get('/getallcategories',categoryController.getCategories)
router.post('/addcategory',categoryController.addCategory)

module.exports = router