const mongoose = require('mongoose');

const seatAvailabilitySchema = new mongoose.Schema({
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  bookedSeats: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

// Unique constraint: one record per bus per date
seatAvailabilitySchema.index({ busId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('SeatAvailability', seatAvailabilitySchema);
