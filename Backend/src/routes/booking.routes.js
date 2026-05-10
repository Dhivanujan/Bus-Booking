"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_controller_1 = require("../controllers/booking.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
// Will add auth middleware here later
router.post('/', auth_1.authMiddleware, booking_controller_1.handleCreateBooking);
exports.default = router;
