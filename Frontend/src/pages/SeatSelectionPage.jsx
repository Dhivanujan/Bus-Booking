import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import SeatLayout from '../components/SeatLayout';
import BookingSummary from '../components/BookingSummary';
import Footer from '../components/Footer';
import { getBusById, getSeatAvailability } from '../lib/api';

const SeatSelectionPage = () => {
  const { busId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const travelDate = searchParams.get('date') || '';
  const passengers = parseInt(searchParams.get('passengers') || '1');

  const [bus, setBus] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [busRes, seatRes] = await Promise.all([
          getBusById(busId),
          travelDate ? getSeatAvailability(busId, travelDate) : Promise.resolve({ data: { data: { bookedSeats: [] } } }),
        ]);
        setBus(busRes.data.data);
        setBookedSeats(seatRes.data.data.bookedSeats || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load bus details. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [busId, travelDate]);

  const handleSeatToggle = (seat) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s !== seat);
      }
      return [...prev, seat];
    });
  };

  const handleRemoveSeat = (seat) => {
    setSelectedSeats((prev) => prev.filter((s) => s !== seat));
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0 || !travelDate) return;
    const params = new URLSearchParams({
      date: travelDate,
      seats: selectedSeats.join(','),
      passengers: passengers.toString(),
    });
    navigate(`/booking/${busId}?${params.toString()}`);
  };

  const proceedDisabled = selectedSeats.length === 0 || !travelDate;
  const proceedHint = !travelDate
    ? 'Select a travel date to continue.'
    : selectedSeats.length === 0
      ? 'Select at least one seat to continue.'
      : '';

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <Loader2 size={40} className="animate-spin text-coral" />
        </div>
      </div>
    );
  }

  if (error || !bus) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 container text-center">
          <p className="text-red-400 mb-4">{error || 'Bus not found'}</p>
          <button onClick={() => navigate(-1)} className="btn-primary btn-primary--sm">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-6 relative">
        <div className="absolute inset-0 hero-ambient opacity-40" />
        <div className="container relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-coral transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Results
          </button>

          <h1 className="text-2xl md:text-3xl font-bold text-white font-display">
            Select Your Seats
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {bus.busName} • {bus.route.origin} → {bus.route.destination}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          {/* Seat Layout */}
          <div>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  🚌 {bus.busName}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  bus.type === 'Luxury AC'
                    ? 'bg-violet/15 text-violet border-violet/30'
                    : 'bg-aqua/10 text-aqua border-aqua/25'
                }`}>
                  {bus.type}
                </span>
              </div>
              <SeatLayout
                bookedSeats={bookedSeats}
                selectedSeats={selectedSeats}
                onSeatToggle={handleSeatToggle}
                price={bus.price}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <BookingSummary
              bus={bus}
              selectedSeats={selectedSeats}
              travelDate={travelDate}
              onRemoveSeat={handleRemoveSeat}
              action={(
                <div>
                  <button
                    onClick={handleProceed}
                    disabled={proceedDisabled}
                    className={`btn-primary btn-primary--lg w-full ${
                      proceedDisabled ? 'opacity-40 cursor-not-allowed' : ''
                    }`}
                  >
                    Proceed to Booking
                    <ArrowRight size={18} />
                  </button>
                  {proceedHint && (
                    <p className="text-xs text-gray-500 mt-2">{proceedHint}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeatSelectionPage;
