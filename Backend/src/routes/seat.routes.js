const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seat.controller');

// Get seat availability for a bus on a date
router.get('/:busId/:date', seatController.getSeatAvailability);

module.exports = router;
