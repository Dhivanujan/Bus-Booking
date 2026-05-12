import { Ticket, X } from 'lucide-react';

const BookingSummary = ({ bus, selectedSeats, travelDate, onRemoveSeat }) => {
  if (!bus) return null;

  const totalPrice = bus.price * selectedSeats.length;

  return (
    <div className="glass-card p-5 sticky top-28">
      <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-4">
        <Ticket size={16} className="text-coral" />
        Booking Summary
      </h3>

      {/* Bus Info */}
      <div className="pb-4 border-b border-white/8">
        <p className="text-sm font-medium text-white">{bus.busName}</p>
        <p className="text-xs text-gray-500 mt-1">
          {bus.route.origin} → {bus.route.destination}
        </p>
        {travelDate && (
          <p className="text-xs text-gray-500 mt-0.5">
            📅 {new Date(travelDate).toLocaleDateString('en-LK', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        )}
        <p className="text-xs text-gray-500 mt-0.5">
          🕐 {bus.departureTime} → {bus.arrivalTime}
        </p>
      </div>

      {/* Selected Seats */}
      <div className="py-4 border-b border-white/8">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
          Selected Seats ({selectedSeats.length})
        </p>
        {selectedSeats.length === 0 ? (
          <p className="text-sm text-gray-600 italic">Click seats to select</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selectedSeats.map((seat) => (
              <span
                key={seat}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-coral/15 border border-coral/30 text-coral text-xs font-semibold"
              >
                {seat}
                {onRemoveSeat && (
                  <button
                    onClick={() => onRemoveSeat(seat)}
                    className="hover:text-white transition-colors"
                  >
                    <X size={12} />
                  </button>
                )}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Price per seat</span>
          <span className="text-white">Rs. {bus.price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Seats</span>
          <span className="text-white">× {selectedSeats.length}</span>
        </div>
        <div className="flex justify-between text-base font-bold pt-2 border-t border-white/8">
          <span className="text-white">Total</span>
          <span className="text-coral text-lg">Rs. {totalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
