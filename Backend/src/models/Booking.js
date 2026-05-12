const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true,
  },
  travelDate: {
    type: String,
    required: true,
  },
  selectedSeats: {
    type: [String],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  passengerName: {
    type: String,
    required: true,
    trim: true,
  },
  passengerEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  passengerPhone: {
    type: String,
    required: true,
    trim: true,
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
    default: 'PENDING',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);
