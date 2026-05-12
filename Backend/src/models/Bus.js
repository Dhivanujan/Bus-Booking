const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busName: {
    type: String,
    required: true,
    trim: true,
  },
  plateNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  route: {
    origin: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
  },
  type: {
    type: String,
    enum: ['Luxury AC', 'Semi Luxury'],
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
    default: 48,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  ratings: {
    type: Number,
    default: 4.0,
    min: 0,
    max: 5,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

// Index for search queries
busSchema.index({ 'route.origin': 1, 'route.destination': 1 });

module.exports = mongoose.model('Bus', busSchema);
