const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');

// Process payment for a booking
router.post('/', paymentController.processPayment);

// Get payment by booking ID
router.get('/:bookingId', paymentController.getPaymentByBookingId);

module.exports = router;
