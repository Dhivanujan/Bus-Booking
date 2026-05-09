"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bus_controller_1 = require("../controllers/bus.controller");
const router = (0, express_1.Router)();
router.post("/", bus_controller_1.addBus);
router.get("/", bus_controller_1.listBuses);
exports.default = router;
