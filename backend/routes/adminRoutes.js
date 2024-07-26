const express = require('express');
const router = express.Router();
const adminAuthMiddleWare = require('../middleware/authMiddleware')
const categoryController = require('../controllers/Admin/categoryController');
const activityController = require('../controllers/Admin/activityController');
const eventController = require('../controllers/Admin/eventController');
const loginController = require('../controllers/Admin/loginController')

const livetypesController = require('../controllers/Admin/livetypesController');
const workTypesController = require('../controllers/Admin/workTypesController')
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

//events
router.post('/deleteEvent',adminAuthMiddleWare.verifyToken,eventController.deleteEvent)
router.post('/updateEvent',adminAuthMiddleWare.verifyToken,upload.array('files',10),eventController.upadateEvent)
router.get('/getAllEvents',adminAuthMiddleWare.verifyToken,eventController.getEvents)
router.post('/addEvent',adminAuthMiddleWare.verifyToken,upload.array('images',10),eventController.addEvent)

//adminLogin
router.post('/login',loginController.postLogin)
router.post('/logout',loginController.logout)
router.get('/validatetoken',loginController.validateToken)


//live types


router.get('/getlivetypes',adminAuthMiddleWare.verifyToken,livetypesController.getroomsData);
router.post('/addrooms',adminAuthMiddleWare.verifyToken,upload.array('images',10),livetypesController.addrooms)
router.post('/deleterooms',adminAuthMiddleWare.verifyToken,livetypesController.deleteRoom)
router.post('/editrooms',adminAuthMiddleWare.verifyToken,upload.array('images',10),livetypesController.editRooms)
//work Types
router.get('/getworktypes',adminAuthMiddleWare.verifyToken,workTypesController.getWorkTypes)
module.exports = router

