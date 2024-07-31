const express = require('express');
const router = express.Router();

const zhisusaEventsController = require('../controllers/User/zhisusaEventsController');

//zhisusa events
router.get('/getAllZhisusaEvents',zhisusaEventsController.getZhisusaEvents)
router.get('/getEventDetails',zhisusaEventsController.getZhisusaEventDetails)
router.post('/bookZhisusaEvent',zhisusaEventsController.bookEvent)
router.post('/createOrder',zhisusaEventsController.createOrder)
router.post('/payment/bookEvent',zhisusaEventsController.bookEvent)


module.exports = router