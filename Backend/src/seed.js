const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Bus = require('./models/Bus');
const SeatAvailability = require('./models/SeatAvailability');

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/bus_booking';

const buses = [
  {
    busName: 'Lanka Ashok Leyland Royal',
    plateNo: 'NB-1234',
    route: { origin: 'Colombo', destination: 'Kandy' },
    type: 'Luxury AC',
    capacity: 48,
    price: 1800,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Entertainment'],
    ratings: 4.7,
    departureTime: '06:00',
    arrivalTime: '09:30',
  },
  {
    busName: 'Colombo-Kandy Express',
    plateNo: 'WP-5678',
    route: { origin: 'Colombo', destination: 'Kandy' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 1200,
    amenities: ['AC', 'Reclining Seats'],
    ratings: 4.2,
    departureTime: '07:30',
    arrivalTime: '11:30',
  },
  {
    busName: 'Southern Star Luxury',
    plateNo: 'SP-9012',
    route: { origin: 'Colombo', destination: 'Galle' },
    type: 'Luxury AC',
    capacity: 48,
    price: 1200,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Snacks'],
    ratings: 4.5,
    departureTime: '05:30',
    arrivalTime: '08:00',
  },
  {
    busName: 'Galle Coastal Rider',
    plateNo: 'SP-3456',
    route: { origin: 'Colombo', destination: 'Galle' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 850,
    amenities: ['AC', 'Reclining Seats'],
    ratings: 4.0,
    departureTime: '08:00',
    arrivalTime: '11:00',
  },
  {
    busName: 'Northern Express Premium',
    plateNo: 'NP-7890',
    route: { origin: 'Colombo', destination: 'Jaffna' },
    type: 'Luxury AC',
    capacity: 48,
    price: 4500,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Entertainment', 'Snacks', 'Blanket'],
    ratings: 4.8,
    departureTime: '20:00',
    arrivalTime: '05:30',
  },
  {
    busName: 'Jaffna Night Liner',
    plateNo: 'NP-2345',
    route: { origin: 'Colombo', destination: 'Jaffna' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 3200,
    amenities: ['AC', 'Reclining Seats', 'Blanket'],
    ratings: 4.1,
    departureTime: '21:00',
    arrivalTime: '07:00',
  },
  {
    busName: 'Hill Country Voyager',
    plateNo: 'CP-6789',
    route: { origin: 'Kandy', destination: 'Nuwara Eliya' },
    type: 'Luxury AC',
    capacity: 48,
    price: 800,
    amenities: ['AC', 'WiFi', 'Scenic Route'],
    ratings: 4.6,
    departureTime: '06:30',
    arrivalTime: '09:00',
  },
  {
    busName: 'Trinco Beach Express',
    plateNo: 'EP-1122',
    route: { origin: 'Colombo', destination: 'Trincomalee' },
    type: 'Luxury AC',
    capacity: 48,
    price: 3200,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Snacks'],
    ratings: 4.4,
    departureTime: '22:00',
    arrivalTime: '05:00',
  },
  {
    busName: 'Sacred City Liner',
    plateNo: 'NC-3344',
    route: { origin: 'Colombo', destination: 'Anuradhapura' },
    type: 'Luxury AC',
    capacity: 48,
    price: 2500,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats'],
    ratings: 4.3,
    departureTime: '06:00',
    arrivalTime: '11:00',
  },
  {
    busName: 'Matara Sunset Cruiser',
    plateNo: 'SP-5566',
    route: { origin: 'Galle', destination: 'Matara' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 500,
    amenities: ['AC', 'Reclining Seats'],
    ratings: 3.9,
    departureTime: '07:00',
    arrivalTime: '08:30',
  },
  {
    busName: 'Eastern Horizon',
    plateNo: 'EP-7788',
    route: { origin: 'Colombo', destination: 'Batticaloa' },
    type: 'Luxury AC',
    capacity: 48,
    price: 3800,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Entertainment', 'Snacks'],
    ratings: 4.5,
    departureTime: '19:30',
    arrivalTime: '04:00',
  },
  {
    busName: 'Negombo Shuttle Premium',
    plateNo: 'WP-9900',
    route: { origin: 'Colombo', destination: 'Negombo' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 400,
    amenities: ['AC'],
    ratings: 4.0,
    departureTime: '06:00',
    arrivalTime: '07:00',
  },
  {
    busName: 'Badulla Mountain Express',
    plateNo: 'UVA-1122',
    route: { origin: 'Kandy', destination: 'Badulla' },
    type: 'Luxury AC',
    capacity: 48,
    price: 1500,
    amenities: ['AC', 'WiFi', 'Scenic Route', 'Reclining Seats'],
    ratings: 4.7,
    departureTime: '05:00',
    arrivalTime: '10:00',
  },
  {
    busName: 'North Link Connector',
    plateNo: 'NP-3344',
    route: { origin: 'Jaffna', destination: 'Trincomalee' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 2200,
    amenities: ['AC', 'Reclining Seats', 'USB Charging'],
    ratings: 4.1,
    departureTime: '08:00',
    arrivalTime: '14:00',
  },
  {
    busName: 'Wayamba Royal Cruiser',
    plateNo: 'NW-5566',
    route: { origin: 'Kurunegala', destination: 'Colombo' },
    type: 'Semi Luxury',
    capacity: 48,
    price: 600,
    amenities: ['AC', 'Reclining Seats'],
    ratings: 4.0,
    departureTime: '05:30',
    arrivalTime: '08:00',
  },
  {
    busName: 'Ancient City Premium',
    plateNo: 'NC-7788',
    route: { origin: 'Anuradhapura', destination: 'Jaffna' },
    type: 'Luxury AC',
    capacity: 48,
    price: 1800,
    amenities: ['AC', 'WiFi', 'Reclining Seats', 'USB Charging'],
    ratings: 4.4,
    departureTime: '09:00',
    arrivalTime: '13:00',
  },
  {
    busName: 'Southern Return Luxury',
    plateNo: 'SP-1199',
    route: { origin: 'Matara', destination: 'Colombo' },
    type: 'Luxury AC',
    capacity: 48,
    price: 1400,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats'],
    ratings: 4.3,
    departureTime: '04:30',
    arrivalTime: '08:30',
  },
  {
    busName: 'Hill Capital Return',
    plateNo: 'CP-2233',
    route: { origin: 'Nuwara Eliya', destination: 'Colombo' },
    type: 'Luxury AC',
    capacity: 48,
    price: 2000,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Scenic Route'],
    ratings: 4.6,
    departureTime: '06:00',
    arrivalTime: '12:00',
  },
  {
    busName: 'Colombo Kandy Daytime',
    plateNo: 'WP-4455',
    route: { origin: 'Colombo', destination: 'Kandy' },
    type: 'Luxury AC',
    capacity: 48,
    price: 2000,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Entertainment', 'Snacks'],
    ratings: 4.9,
    departureTime: '10:00',
    arrivalTime: '13:30',
  },
  {
    busName: 'Colombo Galle Expressway',
    plateNo: 'WP-6677',
    route: { origin: 'Colombo', destination: 'Galle' },
    type: 'Luxury AC',
    capacity: 48,
    price: 1500,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Reclining Seats', 'Snacks'],
    ratings: 4.6,
    departureTime: '14:00',
    arrivalTime: '16:00',
  },
];

// Some sample booked seats for demo
const sampleSeatAvailabilities = [
  {
    date: '2026-05-20',
    seatIndices: [0, 1, 2],  // first 3 buses get some booked seats
    seats: [
      ['1A', '1B', '3C', '5D', '7A', '7B'],
      ['2A', '2B', '4C', '6D'],
      ['1A', '3B', '5C', '8D', '10A'],
    ],
  },
  {
    date: '2026-05-21',
    seatIndices: [0, 4, 7],
    seats: [
      ['2A', '2B', '4A', '4B', '6C', '6D'],
      ['1A', '1B', '2A', '2B', '3C', '3D', '5A'],
      ['3A', '3B', '7C'],
    ],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('📦 Connected to MongoDB for seeding...');

    // Clear existing data
    await Bus.deleteMany({});
    await SeatAvailability.deleteMany({});
    console.log('🗑️  Cleared existing buses and seat data');

    // Insert buses
    const createdBuses = await Bus.insertMany(buses);
    console.log(`✅ Seeded ${createdBuses.length} buses`);

    // Insert sample seat availabilities
    for (const sample of sampleSeatAvailabilities) {
      for (let i = 0; i < sample.seatIndices.length; i++) {
        const busIndex = sample.seatIndices[i];
        if (createdBuses[busIndex]) {
          await SeatAvailability.create({
            busId: createdBuses[busIndex]._id,
            date: sample.date,
            bookedSeats: sample.seats[i],
          });
        }
      }
    }
    console.log('✅ Seeded sample seat availabilities');

    console.log('\n🎉 Database seeded successfully!');
    console.log('📊 Summary:');
    console.log(`   - ${createdBuses.length} buses across Sri Lankan routes`);
    console.log(`   - Sample booked seats for demo dates`);
    console.log('\nRoutes available:');
    const routes = [...new Set(createdBuses.map(b => `   ${b.route.origin} → ${b.route.destination} (Rs. ${b.price})`))];
    routes.forEach(r => console.log(r));

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
