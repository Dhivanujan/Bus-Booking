import { prisma } from "../lib/prisma";

export const createBus = async (data: any) => {
  return await prisma.bus.create({
    data,
  });
};

export const getAllBuses = async () => {
  return await prisma.bus.findMany();
};
