import { Request, Response, NextFunction } from 'express';
import { createBooking } from '../services/booking.service';
import { BookingSchema } from '../schemas/booking.schema';

export const handleCreateBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = BookingSchema.parse(req.body);
    // Assuming custom auth middleware sets req.user
    const userId = (req as any).user?.id || 'dummy-user-id'; // Replace 'dummy-user-id' once auth exists
    
    const result = await createBooking(userId, validatedData.scheduleId, validatedData.seatNumbers);
    
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: result
    });
  } catch (error) {
    next(error);
  }
};
