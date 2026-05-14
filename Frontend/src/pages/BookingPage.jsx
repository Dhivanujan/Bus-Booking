import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Banknote, Building2, Loader2, Shield, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBusById, createBooking } from '../lib/api';

const METHODS = [
  { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, Amex' },
  { id: 'bank_transfer', label: 'Bank Transfer', icon: Building2, desc: 'Direct bank payment' },
  { id: 'cash', label: 'Cash on Boarding', icon: Banknote, desc: 'Pay when you board' },
];

const formatTravelDate = (isoDate) => {
  if (!isoDate) return '';
  const parts = isoDate.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return isoDate;
  const [year, month, day] = parts;
  const localDate = new Date(year, month - 1, day);
  return localDate.toLocaleDateString('en-LK', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
};

const BookingPage = () => {
  const { busId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const travelDate = searchParams.get('date') || '';
  const seats = (searchParams.get('seats') || '').split(',').filter(Boolean);

  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [form, setForm] = useState({ passengerName: '', passengerEmail: '', passengerPhone: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getBusById(busId).then(r => { setBus(r.data.data); setLoading(false); }).catch(() => setLoading(false));
  }, [busId]);

  const validate = () => {
    const e = {};
    if (!form.passengerName.trim()) e.passengerName = 'Required';
    if (!form.passengerEmail.trim() || !/\S+@\S+\.\S+/.test(form.passengerEmail)) e.passengerEmail = 'Valid email required';
    if (!form.passengerPhone.trim() || form.passengerPhone.replace(/\D/g,'').length < 9) e.passengerPhone = 'Valid phone required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await createBooking({ busId, travelDate, selectedSeats: seats, ...form, paymentMethod });
      navigate(`/confirmation/${res.data.data.booking._id}`);
    } catch (err) {
      setErrors({ submit: err.response?.data?.message || 'Booking failed' });
      setSubmitting(false);
    }
  };

  if (loading || !bus) return (<div className="min-h-screen"><Navbar /><div className="pt-32 flex justify-center"><Loader2 size={40} className="animate-spin text-coral" /></div></div>);

  const total = bus.price * seats.length;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-6 relative">
        <div className="absolute inset-0 hero-ambient opacity-40" />
        <div className="container relative z-10">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-coral transition-colors mb-4"><ArrowLeft size={16} />Back</button>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-display">Complete Your Booking</h1>
        </div>
      </div>
      <div className="container pb-20">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-[1fr_380px] gap-6">
            <div className="space-y-6">
              {/* Passenger */}
              <div className="glass-card p-6">
                <h2 className="text-lg font-semibold text-white mb-5">Passenger Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="ui-label mb-2 block">Full Name</label>
                    <input type="text" value={form.passengerName} onChange={e => setForm({...form, passengerName: e.target.value})} placeholder="Enter your full name" className={`ui-input ${errors.passengerName?'border-red-500/50':''}`} />
                    {errors.passengerName && <p className="text-xs text-red-400 mt-1">{errors.passengerName}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="ui-label mb-2 block">Email</label>
                      <input type="email" value={form.passengerEmail} onChange={e => setForm({...form, passengerEmail: e.target.value})} placeholder="your@email.com" className={`ui-input ${errors.passengerEmail?'border-red-500/50':''}`} />
                      {errors.passengerEmail && <p className="text-xs text-red-400 mt-1">{errors.passengerEmail}</p>}
                    </div>
                    <div>
                      <label className="ui-label mb-2 block">Phone</label>
                      <input type="tel" value={form.passengerPhone} onChange={e => setForm({...form, passengerPhone: e.target.value})} placeholder="+94 77 123 4567" className={`ui-input ${errors.passengerPhone?'border-red-500/50':''}`} />
                      {errors.passengerPhone && <p className="text-xs text-red-400 mt-1">{errors.passengerPhone}</p>}
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Method */}
              <div className="glass-card p-6">
                <h2 className="text-lg font-semibold text-white mb-5">Payment Method</h2>
                <div className="space-y-3">
                  {METHODS.map(m => {
                    const I = m.icon;
                    return (
                      <label key={m.id} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod===m.id?'bg-coral/8 border-coral/30':'border-white/8 hover:border-white/15'}`}>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod===m.id?'border-coral':'border-white/25'}`}>
                          {paymentMethod===m.id && <div className="w-2.5 h-2.5 rounded-full bg-coral"/>}
                        </div>
                        <I size={20} className={paymentMethod===m.id?'text-coral':'text-gray-500'} />
                        <div><p className="text-sm font-medium text-white">{m.label}</p><p className="text-xs text-gray-500">{m.desc}</p></div>
                        <input type="radio" name="pm" value={m.id} checked={paymentMethod===m.id} onChange={()=>setPaymentMethod(m.id)} className="sr-only"/>
                      </label>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-aqua/5 border border-aqua/15">
                  <Shield size={14} className="text-aqua shrink-0"/>
                  <p className="text-xs text-gray-400">Secured with 256-bit SSL encryption</p>
                </div>
              </div>
              {errors.submit && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30"><p className="text-sm text-red-400">{errors.submit}</p></div>}
            </div>
            {/* Summary */}
            <div>
              <div className="glass-card p-5 sticky top-28">
                <h3 className="text-base font-semibold text-white mb-4">Order Summary</h3>
                <div className="pb-4 border-b border-white/8">
                  <p className="text-sm font-medium text-white">{bus.busName}</p>
                  <p className="text-xs text-gray-500 mt-1">{bus.route.origin} → {bus.route.destination}</p>
                  {travelDate && (
                    <p className="text-xs text-gray-500 mt-0.5">📅 {formatTravelDate(travelDate)}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-0.5">🕐 {bus.departureTime} → {bus.arrivalTime}</p>
                </div>
                <div className="py-4 border-b border-white/8">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Seats</p>
                  <div className="flex flex-wrap gap-2">
                    {seats.map(s=><span key={s} className="px-2.5 py-1 rounded-lg bg-coral/15 border border-coral/30 text-coral text-xs font-semibold">{s}</span>)}
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Rs. {bus.price.toLocaleString()} × {seats.length}</span><span className="text-white">Rs. {total.toLocaleString()}</span></div>
                  <div className="flex justify-between font-bold pt-2 border-t border-white/8"><span className="text-white">Total</span><span className="text-coral text-xl">Rs. {total.toLocaleString()}</span></div>
                </div>
                <button type="submit" disabled={submitting} className={`btn-primary btn-primary--lg w-full mt-6 ${submitting?'opacity-60':''}`}>
                  {submitting ? <><Loader2 size={18} className="animate-spin"/>Processing...</> : <><Lock size={16}/>Confirm & Pay</>}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
