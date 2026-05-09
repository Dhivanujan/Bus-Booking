import { Router } from 'express';
import { handleCreateBooking } from '../controllers/booking.controller';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

// Will add auth middleware here later
router.post('/', authMiddleware, handleCreateBooking);

export default router;
