const Payment = require('../models/Payment');
const Booking = require('../models/Booking');

// Process payment for a booking
const processPayment = async (req, res) => {
  try {
    const { bookingId, paymentMethod } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // Check if payment already exists
    let payment = await Payment.findOne({ bookingId });
    if (payment && payment.status === 'SUCCESS') {
      return res.status(400).json({ success: false, message: 'Payment already completed' });
    }

    if (payment) {
      payment.status = 'SUCCESS';
      payment.paymentMethod = paymentMethod || 'card';
      await payment.save();
    } else {
      payment = await Payment.create({
        bookingId,
        amount: booking.totalAmount,
        paymentMethod: paymentMethod || 'card',
        status: 'SUCCESS',
      });
    }

    // Update booking status
    booking.paymentStatus = 'CONFIRMED';
    await booking.save();

    res.json({
      success: true,
      data: payment,
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ success: false, message: 'Error processing payment' });
  }
};

// Get payment by booking ID
const getPaymentByBookingId = async (req, res) => {
  try {
    const payment = await Payment.findOne({ bookingId: req.params.bookingId });
    if (!payment) {
      return res.status(404).json({ success: false, message: 'Payment not found' });
    }
    res.json({ success: true, data: payment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching payment' });
  }
};

module.exports = { processPayment, getPaymentByBookingId };
