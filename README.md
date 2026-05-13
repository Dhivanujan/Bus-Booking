# LuxeBus Booking System (Web)

LuxeBus is a full-stack web application for premium intercity bus booking in Sri Lanka. It includes a React + Vite frontend with a high-end UI and a Node.js + Express API backed by MongoDB. The system supports search, filtering, seat selection, booking, simulated payments, and ticket confirmation.

## Product Overview

- End-to-end booking flow: search routes, pick seats, enter passenger details, and confirm.
- Real-time seat availability and conflict prevention during booking.
- Booking confirmation with a printable ticket screen.
- Auth endpoints (register/login) with JWT issuance.

## Key Features

Frontend (Web UI)
- Route search with origin, destination, and date.
- Smart filters (type, price, rating, sort options).
- Seat layout with availability, selection, and pricing.
- Booking form with validation and payment method selection.
- Confirmation page with ticket details and print/download.

Backend (API)
- JWT-based register and login.
- Bus catalog and search by origin and destination.
- Seat availability per bus and date.
- Transactional booking with seat locking.
- Payment records with status tracking.

## Tech Stack

Frontend
- React
- Vite
- React Router
- Axios
- Tailwind CSS
- Lucide Icons

Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT and bcrypt
- dotenv, cors

## Folder Structure

```
Backend/   Node.js + Express API
Frontend/  React + Vite web app
```

## Getting Started

Prerequisites
- Node.js 18+
- MongoDB (local or hosted)

### Backend Setup

```bash
cd Backend
npm install
```

Create a .env file in Backend with the variables listed below.

Optional: seed the database with sample buses and booked seats.

```bash
npm run seed
```

Run the API server:

```bash
npm run dev
```

The API runs on http://localhost:5000 by default.

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The web app runs on http://localhost:5173 by default.

If your API is not on localhost:5000, update the base URL in Frontend/src/lib/api.js.

## Environment Variables (Backend)

```
PORT=5000
DATABASE_URL=mongodb://127.0.0.1:27017/bus_booking
JWT_SECRET=change_me
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
NODE_ENV=development
```

## Scripts

Backend
- dev: start with nodemon
- start: start with node
- seed: seed MongoDB with demo data

Frontend
- dev: start Vite dev server
- build: build for production
- preview: preview production build
- lint: run ESLint

## API Reference

Base URL: http://localhost:5000/api

Auth
- POST /auth/register
   - Body: { name, email, phone, password }
- POST /auth/login
   - Body: { email, password }

Buses
- GET /buses
- GET /buses/:id
- GET /buses/search?origin=Colombo&destination=Kandy
- POST /buses
   - Body:
      {
         busName,
         plateNo,
         route: { origin, destination },
         type,               // Luxury AC | Semi Luxury
         capacity,
         price,
         amenities: [],
         ratings,
         departureTime,
         arrivalTime,
         image
      }

Seats
- GET /seats/:busId/:date
   - date format: YYYY-MM-DD

Bookings
- POST /bookings
   - Body:
      {
         busId,
         travelDate,
         selectedSeats,
         passengerName,
         passengerEmail,
         passengerPhone,
         paymentMethod
      }
- GET /bookings/:id

Payments
- POST /payments
   - Body: { bookingId, paymentMethod }
- GET /payments/:bookingId

## Data Models (MongoDB)

Bus
- busName, plateNo
- route.origin, route.destination
- type, capacity, price
- amenities[], ratings
- departureTime, arrivalTime, image

Booking
- userId (optional)
- busId, travelDate
- selectedSeats[], totalAmount
- passengerName, passengerEmail, passengerPhone
- paymentStatus (PENDING, CONFIRMED, CANCELLED)

SeatAvailability
- busId, date
- bookedSeats[]

Payment
- bookingId, amount
- paymentMethod (card, bank_transfer, cash)
- transactionId, status (PENDING, SUCCESS, FAILED)

User
- name, email, phone, password
- role (USER, ADMIN)

## Frontend Routes

- /                         Home
- /search?from=...&to=...    Search results
- /seats/:busId              Seat selection
- /booking/:busId            Booking form
- /confirmation/:bookingId   Ticket confirmation

## Notes

- The frontend stores JWTs in localStorage under luxebus_token; the API currently does not enforce auth on bus or booking routes.
- Payments are simulated; no external gateway is integrated.
- Seat layout is a 12x4 grid (1A to 12D).
