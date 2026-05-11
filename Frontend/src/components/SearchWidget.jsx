import { CalendarDays, Users, Compass, Route, ArrowRight } from 'lucide-react';

const SearchWidget = () => {
  return (
    <section
      id="search"
      className="relative z-20 mt-10 sm:mt-12 lg:mt-14 pb-20"
    >
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
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ['120+', 'Routes active'],
                  ['24/7', 'Support desk'],
                ].map(([value, label]) => (
                  <div key={label} className="glass-card px-4 py-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">{label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-3">
                  <span className="ui-label">
                    <Compass size={14} className="text-cyan-300" />
                    Departure
                  </span>
                  <input type="text" placeholder="Colombo" className="ui-input" />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="ui-label">
                    <Route size={14} className="text-fuchsia-300" />
                    Destination
                  </span>
                  <input type="text" placeholder="Kandy" className="ui-input" />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="ui-label">
                    <CalendarDays size={14} className="text-amber-300" />
                    Travel date
                  </span>
                  <input type="date" className="ui-input" />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="ui-label">
                    <Users size={14} className="text-emerald-300" />
                    Travelers
                  </span>
                  <select className="ui-input">
                    <option className="text-black">1 Passenger</option>
                    <option className="text-black">2 Passengers</option>
                    <option className="text-black">3 Passengers</option>
                    <option className="text-black">4 Passengers</option>
                  </select>
                </label>
              </div>

              <button className="btn-primary btn-primary--lg w-full mt-6">
                Search Luxury Buses <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;