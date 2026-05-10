import { MapPin, Calendar, Users, Search } from 'lucide-react';

const SearchWidget = () => {
  return (
    <section id="search" className="relative z-20 -mt-[120px] pb-16">
      <div className="container">
        <div className="glass-panel p-6 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="section-kicker">Command Search</span>
              <h3 className="text-[1.4rem] font-semibold mt-3 text-white">Plan a luxury route in seconds</h3>
            </div>
            <div className="text-[0.85rem] text-[#C7D0E0]/70">Live availability • Priority seats • Smart routing</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="ui-label"><MapPin size={14} /> From</label>
              <input type="text" className="ui-input" placeholder="Departure city" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="ui-label"><MapPin size={14} /> To</label>
              <input type="text" className="ui-input" placeholder="Destination city" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="ui-label"><Calendar size={14} /> Date</label>
              <input type="date" className="ui-input" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="ui-label"><Users size={14} /> Passengers</label>
              <select className="ui-input">
                <option className="text-black">1 Passenger</option>
                <option className="text-black">2 Passengers</option>
                <option className="text-black">3 Passengers</option>
                <option className="text-black">4 Passengers</option>
              </select>
            </div>
          </div>

          <button className="glow-button w-full sm:w-auto sm:self-end">
            <Search size={18} /> Search Buses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
