const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

// Create a new booking
router.post('/', bookingController.createBooking);

// Get booking by ID
router.get('/:id', bookingController.getBookingById);

module.exports = router;
