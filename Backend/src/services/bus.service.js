"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBuses = exports.createBus = void 0;
const prisma_1 = require("../lib/prisma");
const createBus = async (data) => {
    return await prisma_1.prisma.bus.create({
        data,
    });
};
exports.createBus = createBus;
const getAllBuses = async () => {
    return await prisma_1.prisma.bus.findMany();
};
exports.getAllBuses = getAllBuses;
