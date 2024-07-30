const express = require('express');
const router = express.Router();

const zhisusaEventsController = require('../controllers/User/zhisusaEventsController');

//zhisusa events
router.get('/getAllZhisusaEvents',zhisusaEventsController.getZhisusaEvents)
router.post('/bookZhisusaEvent',zhisusaEventsController.bookEvent)
router.post('/createOrder',zhisusaEventsController.createOrder)
router.post('/payment/verify',zhisusaEventsController.verifyPayment)


module.exports = router