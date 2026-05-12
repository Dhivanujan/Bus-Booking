const SeatAvailability = require('../models/SeatAvailability');

// Get booked seats for a bus on a specific date
const getSeatAvailability = async (req, res) => {
  try {
    const { busId, date } = req.params;

    const seatDoc = await SeatAvailability.findOne({ busId, date });

    res.json({
      success: true,
      data: {
        busId,
        date,
        bookedSeats: seatDoc ? seatDoc.bookedSeats : [],
      },
    });
  } catch (error) {
    console.error('Seat availability error:', error);
    res.status(500).json({ success: false, message: 'Error fetching seat availability' });
  }
};

module.exports = { getSeatAvailability };
