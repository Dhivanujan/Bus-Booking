const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/env');

const busRoutes = require('./routes/bus.routes');
const bookingRoutes = require('./routes/booking.routes');
const authRoutes = require('./routes/auth.routes');
const seatRoutes = require('./routes/seat.routes');
const paymentRoutes = require('./routes/payment.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/buses', busRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/payments', paymentRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'LuxeBus API Running 🚍', status: 'ok' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// Connect to DB and start server
const startServer = async () => {
  await connectDB();
  app.listen(config.PORT, () => {
    console.log(`🚀 LuxeBus server running on port ${config.PORT}`);
  });
};

startServer();
