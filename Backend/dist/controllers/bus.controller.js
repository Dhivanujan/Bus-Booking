"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBuses = exports.addBus = void 0;
const bus_service_1 = require("../services/bus.service");
const addBus = async (req, res) => {
    try {
        const bus = await (0, bus_service_1.createBus)(req.body);
        res.status(201).json(bus);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating bus" });
    }
};
exports.addBus = addBus;
const listBuses = async (_, res) => {
    const buses = await (0, bus_service_1.getAllBuses)();
    res.json(buses);
};
exports.listBuses = listBuses;
