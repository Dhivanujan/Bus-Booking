"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const prisma_1 = require("../lib/prisma");
const client_1 = require("@prisma/client");
const createBooking = async (userId, scheduleId, seatNumbers) => {
    return await prisma_1.prisma.$transaction(async (tx) => {
        // 1. Check if schedule exists
        const schedule = await tx.schedule.findUnique({ where: { id: scheduleId } });
        if (!schedule) {
            throw { statusCode: 404, message: "Schedule not found" };
        }
        // Calculate total price
        const totalAmount = Number(schedule.price) * seatNumbers.length;
        try {
            // 2. Create the Booking and mapped Seats atomically
            const booking = await tx.booking.create({
                data: {
                    userId,
                    scheduleId,
                    totalAmount,
                    status: 'PENDING',
                    seats: {
                        create: seatNumbers.map(seat => ({
                            scheduleId,
                            seatNumber: seat
                        }))
                    }
                },
                include: { seats: true }
            });
            // 3. Initialize pending Payment
            const payment = await tx.payment.create({
                data: { bookingId: booking.id, amount: totalAmount, status: 'PENDING' }
            });
            return { booking, payment };
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw { statusCode: 409, message: "One or more selected seats have just been booked. Please choose different seats." };
            }
            throw error;
        }
    });
};
exports.createBooking = createBooking;
