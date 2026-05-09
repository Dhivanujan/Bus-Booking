import { z } from 'zod';

export const BookingSchema = z.object({
  scheduleId: z.string().uuid(),
  seatNumbers: z.array(z.number().int().positive()).nonempty(),
});
