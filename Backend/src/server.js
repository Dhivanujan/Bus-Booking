"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const bus_routes_1 = __importDefault(require("./routes/bus.routes"));
const booking_routes_1 = __importDefault(require("./routes/booking.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/buses", bus_routes_1.default);
app.use("/api/bookings", booking_routes_1.default);
app.use("/api/auth", auth_routes_1.default);
app.get("/", (req, res) => {
    res.send("Bus Booking API Running 🚍");
});
app.use(errorHandler_1.errorHandler);
const PORT = env_1.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} in ${env_1.env.NODE_ENV} mode`);
});
