# Luxury Bus Booking System

A production-ready Full-Stack Bus Booking System built with **React Native (Expo)**, Node.js, TypeScript, and Prisma. Designed using clean, modular architecture principles, this project features a high-end, futuristic mobile interface and simulates a real-world transportation booking platform with secure authentication, real-time seat management, and scalable system design.

It supports user, admin, and driver roles, enabling full lifecycle management of bus operations—from route scheduling to ticket booking and payment tracking.

## 🚀 Key Features

### 👤 Authentication & Authorization
- JWT-based authentication (Access tokens)
- Role-based access control (User, Admin, Driver)
- Secure password hashing (bcrypt)

### 🚌 Bus & Route Management
- Manage buses (capacity, type, registration)
- Create and manage routes (source → destination)
- Schedule trips with date & time allocation

### 🎫 Smart Booking System
- Real-time seat availability management
- Seat locking to prevent double booking
- Booking confirmation with ticket generation
- Booking cancellation support

### 📱 Mobile UI (Frontend)
- **Expo App:** Modern, responsive native mobile application built with React Native and Expo Router.
- **Premium Design:** Features a dark mode aesthetic ("Quantum Midnight" to "Electric Lime Dust"), glassmorphism, and smooth layouts.
- Interactive components including `HeroSection`, `BookingCard`, `LiveTracking`, `PopularRoutes`, and `OfferBanner`.

## ⚙️ Architecture Highlights

- **Built with Clean / Modular Architecture**
- Separation of concerns: Controllers, Services, Routes, and Schemas
- Centralized error handling system
- Transaction-safe booking system (prevents race conditions)
- Scalable database design using PostgreSQL + Prisma ORM

## 🧱 Tech Stack

**Frontend (Mobile App):**
- React Native
- Expo & Expo Router
- Expo Vector Icons
- React Native SVG for custom graphics

**Backend:**
- Node.js & TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT & bcrypt
- Zod (Schema Validation)

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL
- **Expo Go App** (installed on your iOS or Android device)
- npm or yarn

### 1. Backend Setup
```bash
cd Backend
npm install
# Set up your environment variables
cp .env.example .env # Configure your DATABASE_URL and JWT_SECRET
# Run Prisma migrations
npx prisma generate
npx prisma db push
# Start the development server
npm run dev
```

### 2. Mobile App Setup (Expo)
```bash
cd Mobile
npm install
```

### 📱 How to Run the App on Expo Go
We use **Expo Go**, a client application that allows you to open up apps built with Expo on your physical device without needing to compile native code (like Xcode or Android Studio).

1. Ensure your computer and your mobile phone are connected to the **same Wi-Fi network**.
2. Open a terminal and navigate to the `Mobile` directory:
   ```bash
   cd Mobile
   ```
3. Start the Expo development server:
   ```bash
   npx expo start
   ```
4. A large **QR code** will appear in your terminal (and automatically open in your browser).
5. **On your mobile device:**
   - **For iOS (iPhone):** Open the default **Camera app**, point it at the QR code on your computer screen, and tap the "Open in Expo Go" notification that appears.
   - **For Android:** Open the **Expo Go app** directly, tap on "Scan QR Code" on the Home tab, and scan the QR code on your computer screen.
6. The app will bundle the JavaScript and launch the futuristic native experience right on your phone!

*Note: If you want to run it on an emulator instead of a physical device, press `a` in the terminal for the Android Emulator or `i` for the iOS Simulator (requires Android Studio / Xcode to be installed).*

---

## 🎯 Project Goal

This project is designed to demonstrate full-stack engineering skills, focusing on a premium mobile-first UI experience, scalable backend APIs, and real-world booking system challenges such as concurrency control and data consistency.

## 📌 Future Enhancements
- Redis caching for performance optimization
- WebSocket for live seat updates and real-time bus tracking
- Payment gateway integration
- Push notifications via Expo Application Services (EAS)
