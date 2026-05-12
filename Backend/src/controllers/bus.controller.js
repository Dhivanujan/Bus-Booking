const Bus = require('../models/Bus');

// Search buses by origin, destination
const searchBuses = async (req, res) => {
  try {
    const { origin, destination } = req.query;

    const query = {};
    if (origin) query['route.origin'] = new RegExp(origin, 'i');
    if (destination) query['route.destination'] = new RegExp(destination, 'i');

    const buses = await Bus.find(query).sort({ price: 1 });
    res.json({ success: true, data: buses });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ success: false, message: 'Error searching buses' });
  }
};

// Get single bus by ID
const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({ success: false, message: 'Bus not found' });
    }
    res.json({ success: true, data: bus });
  } catch (error) {
    console.error('Get bus error:', error);
    res.status(500).json({ success: false, message: 'Error fetching bus' });
  }
};

// Get all buses
const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find().sort({ createdAt: -1 });
    res.json({ success: true, data: buses });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching buses' });
  }
};

// Create a bus
const createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({ success: true, data: bus });
  } catch (error) {
    console.error('Create bus error:', error);
    res.status(500).json({ success: false, message: 'Error creating bus' });
  }
};

module.exports = { searchBuses, getBusById, getAllBuses, createBus };
