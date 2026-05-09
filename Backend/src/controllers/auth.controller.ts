import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../services/auth.service';
import { z } from 'zod';

const AuthSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  name: z.string().optional(),
  password: z.string().min(6),
});

export const handleRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = AuthSchema.parse(req.body);
    const result = await registerUser(data);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = AuthSchema.parse(req.body);
    const result = await loginUser(data);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
