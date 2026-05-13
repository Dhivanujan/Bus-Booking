import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CalendarDays,
  Compass,
  Route,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock3,
} from 'lucide-react';
import CityAutocomplete from './CityAutocomplete';

const SearchWidget = () => {
  const navigate = useNavigate();

  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!departure || !destination) return;

    if (departure === destination) {
      alert('Departure and destination cannot be the same city.');
      return;
    }

    const params = new URLSearchParams({
      from: departure,
      to: destination,
      date: date || today,
    });

    navigate(`/search?${params.toString()}`);
  };

  return (
    <section
      id="search"
      className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/90 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 p-6 sm:p-8 lg:p-12">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <h2 className="mt-6 text-4xl sm:text-5xl leading-tight font-bold text-white">
                Travel Sri Lanka with
                <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {' '}
                  Comfort & Style
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-7 text-slate-300">
                Discover luxury buses, realtime seat availability, instant
                booking, and premium travel experiences designed for modern
                travelers.
              </p>

              {/* Features */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Safe & Secure',
                    desc: 'Verified operators and trusted routes.',
                  },
                  {
                    icon: Clock3,
                    title: 'Realtime Updates',
                    desc: 'Track schedules and seat availability live.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 border border-white/10">
                        <item.icon className="h-5 w-5 text-cyan-200" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  ['120+', 'Routes'],
                  ['24/7', 'Support'],
                  ['50K+', 'Passengers'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 min-w-[120px]"
                  >
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative">
              <form
                onSubmit={handleSearch}
                className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Find Your Perfect Ride
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Book premium intercity buses across Sri Lanka in seconds.
                  </p>
                </div>

                <div className="space-y-5">
                  <CityAutocomplete
                    value={departure}
                    onChange={setDeparture}
                    placeholder="Enter departure city"
                    icon={Compass}
                    iconColor="text-cyan-300"
                    label="Departure"
                  />

                  <CityAutocomplete
                    value={destination}
                    onChange={setDestination}
                    placeholder="Enter destination city"
                    icon={Route}
                    iconColor="text-fuchsia-300"
                    label="Destination"
                  />

                  <label className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-300">
                      <CalendarDays size={16} className="text-amber-300" />
                      Travel Date
                    </span>

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={today}
                      className="
                        h-14 rounded-2xl border border-white/10
                        bg-[#0d1726]/80 px-4 text-sm text-white
                        outline-none transition-all duration-300
                        focus:border-cyan-400/50
                        focus:ring-4 focus:ring-cyan-400/10
                      "
                    />
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                    group mt-7 flex h-14 w-full items-center justify-center gap-2
                    rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500
                    text-sm font-semibold text-white
                    shadow-lg shadow-cyan-500/20
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:shadow-cyan-500/40
                    active:scale-[0.99]
                  "
                >
                  Search Luxury Buses

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Secure booking • Instant confirmation
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;