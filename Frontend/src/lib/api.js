import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('luxebus_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Bus APIs
export const searchBuses = (params) => API.get('/buses/search', { params });
export const getBusById = (id) => API.get(`/buses/${id}`);
export const getAllBuses = () => API.get('/buses');

// Seat APIs
export const getSeatAvailability = (busId, date) => API.get(`/seats/${busId}/${date}`);

// Booking APIs
export const createBooking = (data) => API.post('/bookings', data);
export const getBookingById = (id) => API.get(`/bookings/${id}`);

// Payment APIs
export const processPayment = (data) => API.post('/payments', data);

// Auth APIs
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);

export default API;
