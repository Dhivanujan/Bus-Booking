"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreateBooking = void 0;
const booking_service_1 = require("../services/booking.service");
const booking_schema_1 = require("../schemas/booking.schema");
const handleCreateBooking = async (req, res, next) => {
    try {
        const validatedData = booking_schema_1.BookingSchema.parse(req.body);
        // Assuming custom auth middleware sets req.user
        const userId = req.user?.id || 'dummy-user-id'; // Replace 'dummy-user-id' once auth exists
        const result = await (0, booking_service_1.createBooking)(userId, validatedData.scheduleId, validatedData.seatNumbers);
        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
exports.handleCreateBooking = handleCreateBooking;
