const Booking = require('../models/Booking');
const SeatAvailability = require('../models/SeatAvailability');
const Payment = require('../models/Payment');
const Bus = require('../models/Bus');
const mongoose = require('mongoose');

// Create a new booking
const createBooking = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { busId, travelDate, selectedSeats, passengerName, passengerEmail, passengerPhone, paymentMethod } = req.body;

    // Validate bus exists
    const bus = await Bus.findById(busId).session(session);
    if (!bus) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ success: false, message: 'Bus not found' });
    }

    // Check for already booked seats
    let seatDoc = await SeatAvailability.findOne({ busId, date: travelDate }).session(session);
    if (seatDoc) {
      const conflict = selectedSeats.filter(s => seatDoc.bookedSeats.includes(s));
      if (conflict.length > 0) {
        await session.abortTransaction();
        session.endSession();
        return res.status(409).json({
          success: false,
          message: `Seats already booked: ${conflict.join(', ')}. Please select different seats.`,
        });
      }
    }

    // Calculate total
    const totalAmount = bus.price * selectedSeats.length;

    // Create booking
    const booking = await Booking.create([{
      busId,
      travelDate,
      selectedSeats,
      totalAmount,
      passengerName,
      passengerEmail,
      passengerPhone,
      paymentStatus: 'CONFIRMED',
    }], { session });

    // Update seat availability
    if (seatDoc) {
      seatDoc.bookedSeats.push(...selectedSeats);
      await seatDoc.save({ session });
    } else {
      await SeatAvailability.create([{
        busId,
        date: travelDate,
        bookedSeats: selectedSeats,
      }], { session });
    }

    // Create payment record
    const payment = await Payment.create([{
      bookingId: booking[0]._id,
      amount: totalAmount,
      paymentMethod: paymentMethod || 'card',
      status: 'SUCCESS',
    }], { session });

    await session.commitTransaction();
    session.endSession();

    // Populate bus details for response
    const populatedBooking = await Booking.findById(booking[0]._id).populate('busId');

    res.status(201).json({
      success: true,
      data: {
        booking: populatedBooking,
        payment: payment[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error('Create booking error:', error);
    res.status(500).json({ success: false, message: 'Error creating booking' });
  }
};

// Get booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('busId');
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    const payment = await Payment.findOne({ bookingId: booking._id });

    res.json({
      success: true,
      data: { booking, payment },
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ success: false, message: 'Error fetching booking' });
  }
};

module.exports = { createBooking, getBookingById };
