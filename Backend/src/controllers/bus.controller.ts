import { Request, Response } from "express";
import { createBus, getAllBuses } from "../services/bus.service";

export const addBus = async (req: Request, res: Response) => {
  try {
    const bus = await createBus(req.body);
    res.status(201).json(bus);
  } catch (error) {
    res.status(500).json({ message: "Error creating bus" });
  }
};

export const listBuses = async (_: Request, res: Response) => {
  const buses = await getAllBuses();
  res.json(buses);
};