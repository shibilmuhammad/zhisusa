const express = require('express');
const router = express.Router();
const adminAuthMiddleWare = require('../middleware/authMiddleware')
const categoryController = require('../controllers/Admin/categoryController');
const activityController = require('../controllers/Admin/activityController');
const loginController = require('../controllers/Admin/loginController')

const livetypesController = require('../controllers/Admin/livetypesController')
const upload = require('../utils/upload')


//categories
router.post('/deleteCategory',adminAuthMiddleWare.verifyToken,categoryController.deleteCategory)
router.post('/updateCategory',adminAuthMiddleWare.verifyToken,categoryController.upadateCategory)
router.get('/getAllCategories',adminAuthMiddleWare.verifyToken,categoryController.getCategories)
router.post('/addCategory',adminAuthMiddleWare.verifyToken,categoryController.addCategory)

//activities
router.post('/deleteActivity',adminAuthMiddleWare.verifyToken,activityController.deleteActivity)
router.post('/updateActivity',adminAuthMiddleWare.verifyToken,upload.array('files',10),activityController.upadateActivity)
router.get('/getAllActivities',adminAuthMiddleWare.verifyToken,activityController.getActivities)
router.post('/addActivity',adminAuthMiddleWare.verifyToken,upload.array('images',10),activityController.addActivity)

//adminLogin
router.post('/login',loginController.postLogin)
router.post('/logout',loginController.logout)
router.get('/validatetoken',loginController.validateToken)


//live types

router.get('/getlivetypes',livetypesController.getroomsData);
router.post('/addrooms',upload.array('images',10),livetypesController.addrooms)
module.exports = router