import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export const registerUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, env.BCRYPT_SALT_ROUNDS);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      phone: data.phone,
      name: data.name,
      password: hashedPassword,
    }
  });

  const token = jwt.sign({ id: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
  return { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token };
};

export const loginUser = async (data: any) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw { statusCode: 401, message: 'Invalid credentials' };

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw { statusCode: 401, message: 'Invalid credentials' };

  const token = jwt.sign({ id: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
  return { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token };
};
