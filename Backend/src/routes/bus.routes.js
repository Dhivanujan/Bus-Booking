const express = require('express');
const router = express.Router();
const busController = require('../controllers/bus.controller');

// Search buses by origin, destination, date
router.get('/search', busController.searchBuses);

// Get single bus details
router.get('/:id', busController.getBusById);

// Get all buses
router.get('/', busController.getAllBuses);

// Create a bus (admin)
router.post('/', busController.createBus);

module.exports = router;
