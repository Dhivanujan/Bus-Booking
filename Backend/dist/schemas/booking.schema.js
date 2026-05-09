"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchema = void 0;
const zod_1 = require("zod");
exports.BookingSchema = zod_1.z.object({
    scheduleId: zod_1.z.string().uuid(),
    seatNumbers: zod_1.z.array(zod_1.z.number().int().positive()).nonempty(),
});
