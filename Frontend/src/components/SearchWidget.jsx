import { MapPin, Calendar, Users, Search } from 'lucide-react';

const SearchWidget = () => {
  return (
    <section id="search" className="relative z-10 -mt-[60px] pb-10">
      <div className="container">
        <div className="glass p-6 md:p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[0.82rem] font-medium text-white/70"><MapPin size={14} /> From</label>
              <input type="text" className="w-full px-4 py-[13px] bg-black/25 border border-white/10 rounded-xl text-white text-[0.95rem] transition-all focus:border-sunset focus:shadow-[0_0_0_3px_rgba(244,148,62,0.3)] placeholder:text-white/45 outline-none" placeholder="Departure city" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[0.82rem] font-medium text-white/70"><MapPin size={14} /> To</label>
              <input type="text" className="w-full px-4 py-[13px] bg-black/25 border border-white/10 rounded-xl text-white text-[0.95rem] transition-all focus:border-sunset focus:shadow-[0_0_0_3px_rgba(244,148,62,0.3)] placeholder:text-white/45 outline-none" placeholder="Destination city" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[0.82rem] font-medium text-white/70"><Calendar size={14} /> Date</label>
              <input type="date" className="w-full px-4 py-[13px] bg-black/25 border border-white/10 rounded-xl text-white text-[0.95rem] transition-all focus:border-sunset focus:shadow-[0_0_0_3px_rgba(244,148,62,0.3)] outline-none" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[0.82rem] font-medium text-white/70"><Users size={14} /> Passengers</label>
              <select className="w-full px-4 py-[13px] bg-black/25 border border-white/10 rounded-xl text-white text-[0.95rem] transition-all focus:border-sunset focus:shadow-[0_0_0_3px_rgba(244,148,62,0.3)] outline-none">
                <option className="text-black">1 Passenger</option>
                <option className="text-black">2 Passengers</option>
                <option className="text-black">3 Passengers</option>
                <option className="text-black">4 Passengers</option>
              </select>
            </div>
          </div>

          <button className="w-full sm:w-auto sm:self-end inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full font-semibold text-[0.95rem] transition-all whitespace-nowrap bg-gradient-to-br from-sunset to-sunset-light text-black shadow-[0_4px_20px_rgba(244,148,62,0.3)] hover:-translate-y-[2px] hover:shadow-[0_6px_28px_rgba(244,148,62,0.45)]">
            <Search size={18} /> Search Buses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
