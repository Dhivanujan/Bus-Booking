import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Users, Compass, Route, ArrowRight } from 'lucide-react';
import CityAutocomplete from './CityAutocomplete';

const SearchWidget = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!departure || !destination) return;
    if (departure === destination) {
      alert("Departure and destination cannot be the same city.");
      return;
    }
    const params = new URLSearchParams({
      from: departure,
      to: destination,
      date: date || today,
      passengers,
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <section id="search" className="relative z-20 mt-10 sm:mt-12 lg:mt-14 pb-20">
      <div className="container">
        <div className="glass-panel p-6 md:p-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div>
              <span className="section-kicker">Intelligent Booking</span>
              <h2 className="section-title mt-4">Plan a premium route in minutes</h2>
              <p className="section-subtitle mt-3">
                Live availability, curated routes, and elite cabin options engineered for effortless travel.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Live seats', 'Instant booking', 'Luxury coaches', 'Realtime tracking'].map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[['120+', 'Routes active'], ['24/7', 'Support desk']].map(([value, label]) => (
                  <div key={label} className="glass-card px-4 py-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">{label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSearch} className="glass-card p-5 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CityAutocomplete
                  value={departure}
                  onChange={setDeparture}
                  placeholder="e.g. Colombo"
                  icon={Compass}
                  iconColor="text-cyan-300"
                  label="Departure"
                />
                <CityAutocomplete
                  value={destination}
                  onChange={setDestination}
                  placeholder="e.g. Kandy"
                  icon={Route}
                  iconColor="text-fuchsia-300"
                  label="Destination"
                />
                <label className="flex flex-col gap-2">
                  <span className="ui-label">
                    <CalendarDays size={14} className="text-amber-300" />
                    Travel date
                  </span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={today}
                    className="ui-input"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="ui-label">
                    <Users size={14} className="text-emerald-300" />
                    Travelers
                  </span>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="ui-input"
                  >
                    {[1,2,3,4,5,6].map(n => (
                      <option key={n} value={n} className="text-black">
                        {n} {n === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button type="submit" className="btn-primary btn-primary--lg w-full mt-6">
                Search Luxury Buses <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;