# Luxury Bus App Mobile Interface

Welcome to the native mobile frontend for the Luxury Bus Booking System! This project is built using [Expo](https://expo.dev) and React Native, featuring a dark-mode "Quantum Midnight" aesthetic and interactive components.

## Getting Started

### 1. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 2. Start the Development Server

```bash
npx expo start
```

## How to Test on Your Phone (Expo Go)

We use the **Expo Go** application to test the native code directly on a physical device without needing to compile it via Xcode or Android Studio.

1. Ensure your computer and your smartphone are connected to the **same Wi-Fi network**.
2. **Download Expo Go**:
   - iOS: Get it from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
   - Android: Get it from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
3. **Scan the QR Code**:
   - Once you run `npx expo start`, a large QR code will appear in your terminal.
   - **On iOS**: Open the native **Camera app**, point it at the QR code, and tap the "Open in Expo Go" notification.
   - **On Android**: Open the **Expo Go app** directly, tap the **Scan QR Code** button on the Home tab, and point it at the screen.
4. The JavaScript bundle will download to your phone, and the app will open!

## Project Structure
- `app/`: Contains the Expo Router file-based routing logic (`index.tsx` is the home screen).
- `components/`: Contains the native UI components (`HeroSection.tsx`, `BookingCard.tsx`, etc.) converted from the original web app.
- `constants/`: Contains the central `theme.ts` with our luxury color palette.

## Troubleshooting
- **Network Issues**: If Expo Go cannot connect to the packager, make sure your phone and PC are on the exact same network. You can also try changing the connection type from `LAN` to `Tunnel` by pressing `shift + T` in the terminal where Expo is running.
