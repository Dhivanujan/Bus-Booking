import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import busRoutes from "./routes/bus.routes";
import bookingRoutes from "./routes/booking.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/buses", busRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Bus Booking API Running 🚍");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});