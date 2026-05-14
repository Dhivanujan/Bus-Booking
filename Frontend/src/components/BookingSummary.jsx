import { Ticket, X, Sparkles, MapPin, Clock } from 'lucide-react';

const formatTravelDate = (isoDate) => {
  if (!isoDate) return '';
  const parts = isoDate.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return isoDate;

  const [year, month, day] = parts;
  const localDate = new Date(year, month - 1, day);

  return localDate.toLocaleDateString('en-LK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BookingSummary = ({
  bus,
  selectedSeats = [],
  travelDate,
  onRemoveSeat,
  action,
}) => {
  if (!bus) return null;

  const seats = Array.isArray(selectedSeats) ? selectedSeats : [];
  const pricePerSeat = Number(bus.price || 0);
  const totalPrice = pricePerSeat * seats.length;

  const origin = bus?.route?.origin ?? bus?.origin ?? 'Unknown';
  const destination = bus?.route?.destination ?? bus?.destination ?? 'Unknown';
  const formattedDate = travelDate ? formatTravelDate(travelDate) : '';

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

      {/* Glow */}
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative p-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-200">
            <Ticket size={18} />
            <h3 className="text-lg font-semibold text-white">
              Booking Summary
            </h3>
          </div>

          <span className="text-xs text-slate-400">
            Live Preview
          </span>
        </div>

        {/* Bus Info */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-base font-semibold text-white">
            {bus.busName}
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={14} />
            {origin} → {destination}
          </div>

          {formattedDate && (
            <div className="mt-1 text-sm text-slate-400">
              📅 {formattedDate}
            </div>
          )}

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
            <Clock size={14} />
            {bus.departureTime} → {bus.arrivalTime}
          </div>
        </div>

        {/* Seats */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Selected Seats
            </p>

            <span className="text-sm text-cyan-300 font-semibold">
              {seats.length}
            </span>
          </div>

          {seats.length === 0 ? (
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-500 italic">
              No seats selected yet. Pick your preferred seats.
            </div>
          ) : (
            <div className="mt-3 flex flex-wrap gap-2">
              {seats.map((seat) => (
                <span
                  key={seat}
                  className="
                    group flex items-center gap-2
                    rounded-xl border border-fuchsia-400/20
                    bg-fuchsia-500/10 px-3 py-1
                    text-sm font-medium text-fuchsia-200
                  "
                >
                  {seat}

                  {onRemoveSeat && (
                    <button
                      onClick={() => onRemoveSeat(seat)}
                      className="text-fuchsia-300 hover:text-white transition"
                    >
                      <X size={14} />
                    </button>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Price per seat</span>
            <span className="text-white">
              Rs. {pricePerSeat.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-sm text-slate-400 mt-2">
            <span>Seats</span>
            <span className="text-white">× {seats.length}</span>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-end">
            <span className="text-white font-semibold">Total</span>
            <span className="text-2xl font-bold text-cyan-300">
              Rs. {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Action */}
        {action && (
          <div className="mt-6">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSummary;