import { prisma } from '../lib/prisma';
import { Prisma } from '@prisma/client';

export const createBooking = async (userId: string, scheduleId: string, seatNumbers: number[]) => {
  return await prisma.$transaction(async (tx) => {
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
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw { statusCode: 409, message: "One or more selected seats have just been booked. Please choose different seats." };
      }
      throw error;
    }
  });
};
