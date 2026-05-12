import { Star, Clock, MapPin, Users, Wifi, Zap, Armchair, Monitor, Coffee, Wind, ChevronRight } from 'lucide-react';

const amenityIcons = {
  'AC': Wind,
  'WiFi': Wifi,
  'USB Charging': Zap,
  'Reclining Seats': Armchair,
  'Entertainment': Monitor,
  'Snacks': Coffee,
  'Blanket': Armchair,
  'Scenic Route': MapPin,
};

const BusCard = ({ bus, onSelect }) => {
  const availableSeats = bus.capacity - (bus.bookedCount || 0);

  return (
    <div className="glass-card group hover:border-coral/30 hover:shadow-[0_0_40px_rgba(255,77,109,0.08)] transition-all duration-300">
      <div className="p-5 md:p-6">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Bus Image */}
          <div className="w-full md:w-44 h-32 md:h-auto rounded-xl bg-gradient-to-br from-navy-mid to-navy overflow-hidden relative shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-coral/20 to-violet/20 border border-white/10 flex items-center justify-center mb-2">
                  <span className="text-2xl">🚌</span>
                </div>
                <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">{bus.type}</p>
              </div>
            </div>
          </div>

          {/* Bus Info */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-coral transition-colors">
                  {bus.busName}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{bus.plateNo}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                bus.type === 'Luxury AC'
                  ? 'bg-violet/15 text-violet border-violet/30'
                  : 'bg-aqua/10 text-aqua border-aqua/25'
              }`}>
                {bus.type}
              </span>
            </div>

            {/* Route & Times */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-center">
                <p className="text-[0.68rem] text-gray-500 uppercase tracking-wider">Depart</p>
                <p className="text-base font-bold text-white mt-0.5 flex items-center gap-1">
                  <Clock size={13} className="text-coral" />
                  {bus.departureTime}
                </p>
                <p className="text-xs text-gray-400">{bus.route.origin}</p>
              </div>
              <div className="flex-1 flex items-center px-2">
                <div className="route-line flex-1" />
                <MapPin size={14} className="text-aqua mx-1 shrink-0" />
                <div className="route-line flex-1" />
              </div>
              <div className="text-center">
                <p className="text-[0.68rem] text-gray-500 uppercase tracking-wider">Arrive</p>
                <p className="text-base font-bold text-white mt-0.5 flex items-center gap-1">
                  <Clock size={13} className="text-aqua" />
                  {bus.arrivalTime}
                </p>
                <p className="text-xs text-gray-400">{bus.route.destination}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {bus.amenities.slice(0, 5).map((amenity) => {
                const IconComp = amenityIcons[amenity] || Wind;
                return (
                  <span key={amenity} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/4 border border-white/6 text-[0.7rem] text-gray-400">
                    <IconComp size={11} />
                    {amenity}
                  </span>
                );
              })}
              {bus.amenities.length > 5 && (
                <span className="px-2 py-1 rounded-md bg-white/4 text-[0.7rem] text-gray-500">
                  +{bus.amenities.length - 5} more
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/6">
              <div className="flex items-center gap-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-white">{bus.ratings}</span>
                </div>
                {/* Availability */}
                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-aqua" />
                  <span className={`text-sm font-medium ${availableSeats <= 10 ? 'text-coral' : 'text-aqua'}`}>
                    {availableSeats} seats left
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-wider">Per seat</p>
                  <p className="text-xl font-bold text-white">
                    Rs. {bus.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => onSelect(bus)}
                  className="btn-primary btn-primary--sm group/btn"
                >
                  Select Seats
                  <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
