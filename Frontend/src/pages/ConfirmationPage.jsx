import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Download, ArrowRight, Loader2, MapPin, Clock, Ticket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBookingById } from '../lib/api';

const ConfirmationPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookingById(bookingId)
      .then(r => { setData(r.data.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [bookingId]);

  const handlePrint = () => window.print();

  if (loading) return (<div className="min-h-screen"><Navbar /><div className="pt-32 flex justify-center"><Loader2 size={40} className="animate-spin text-coral" /></div></div>);

  if (!data?.booking) return (<div className="min-h-screen"><Navbar /><div className="pt-32 container text-center"><p className="text-red-400 mb-4">Booking not found</p><button onClick={() => navigate('/')} className="btn-primary btn-primary--sm">Go Home</button></div></div>);

  const { booking, payment } = data;
  const bus = booking.busId;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 container">
        {/* Success animation */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 mb-4 confirmation-pulse">
            <CheckCircle2 size={40} className="text-emerald-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-display">Booking Confirmed!</h1>
          <p className="text-sm text-gray-400 mt-2">Your tickets have been booked successfully</p>
        </div>

        {/* Ticket Card */}
        <div className="max-w-2xl mx-auto" id="ticket-printable">
          <div className="glass-card overflow-hidden">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-coral/20 to-violet/20 p-5 border-b border-white/8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Ticket size={20} className="text-coral" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Booking ID</p>
                    <p className="text-sm font-mono font-bold text-white">{booking._id}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {booking.paymentStatus}
                </span>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="p-6 space-y-5">
              {/* Route */}
              <div className="flex items-center justify-between gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500">FROM</p>
                  <p className="text-lg font-bold text-white mt-1">{bus?.route?.origin}</p>
                  <p className="text-sm text-coral flex items-center gap-1 justify-center mt-1">
                    <Clock size={12}/>{bus?.departureTime}
                  </p>
                </div>
                <div className="flex-1 flex items-center px-4">
                  <div className="route-line flex-1"/>
                  <div className="mx-2 shrink-0">
                    <span className="text-lg">🚌</span>
                  </div>
                  <div className="route-line flex-1"/>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">TO</p>
                  <p className="text-lg font-bold text-white mt-1">{bus?.route?.destination}</p>
                  <p className="text-sm text-aqua flex items-center gap-1 justify-center mt-1">
                    <Clock size={12}/>{bus?.arrivalTime}
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/8">
                <div>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Bus</p>
                  <p className="text-sm text-white font-medium mt-1">{bus?.busName}</p>
                </div>
                <div>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Date</p>
                  <p className="text-sm text-white font-medium mt-1">
                    {booking.travelDate && new Date(booking.travelDate).toLocaleDateString('en-LK',{weekday:'short',month:'short',day:'numeric',year:'numeric'})}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Passenger</p>
                  <p className="text-sm text-white font-medium mt-1">{booking.passengerName}</p>
                </div>
                <div>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Type</p>
                  <p className="text-sm text-white font-medium mt-1">{bus?.type}</p>
                </div>
              </div>

              {/* Seats */}
              <div className="pt-4 border-t border-white/8">
                <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider mb-2">Seats</p>
                <div className="flex flex-wrap gap-2">
                  {booking.selectedSeats.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-lg bg-coral/15 border border-coral/30 text-coral text-sm font-bold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div className="pt-4 border-t border-white/8 flex justify-between items-end">
                <div>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Transaction</p>
                  <p className="text-xs font-mono text-gray-400 mt-1">{payment?.transactionId}</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Total Paid</p>
                  <p className="text-2xl font-bold text-coral mt-1">Rs. {booking.totalAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Tear line */}
            <div className="relative h-6">
              <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-white/10"/>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-navy"/>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-navy"/>
            </div>

            {/* QR / Barcode placeholder */}
            <div className="p-5 text-center">
              <div className="inline-block p-3 rounded-xl bg-white/5 border border-white/8">
                <div className="w-24 h-24 mx-auto grid grid-cols-5 grid-rows-5 gap-0.5">
                  {Array.from({length:25}).map((_,i)=>(
                    <div key={i} className={`rounded-sm ${Math.random()>0.4?'bg-white/80':'bg-transparent'}`}/>
                  ))}
                </div>
              </div>
              <p className="text-[0.6rem] text-gray-600 mt-2 uppercase tracking-wider">Scan at boarding</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="max-w-2xl mx-auto mt-6 flex flex-col sm:flex-row gap-3">
          <button onClick={handlePrint} className="btn-primary flex-1"><Download size={16}/>Download Ticket</button>
          <button onClick={() => navigate('/')} className="ghost-button flex-1 !bg-white/5 !text-white !shadow-none border border-white/10 hover:!bg-white/10">
            Book Another Trip <ArrowRight size={16}/>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
