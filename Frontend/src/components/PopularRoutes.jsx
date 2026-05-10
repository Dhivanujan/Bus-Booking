import { MapPin, ArrowRight } from 'lucide-react';

const routes = [
  { from: 'New York', to: 'Boston', duration: '4h 15m', price: 45, departures: 12 },
  { from: 'Los Angeles', to: 'San Francisco', duration: '6h 30m', price: 55, departures: 8 },
  { from: 'Chicago', to: 'Detroit', duration: '4h 45m', price: 38, departures: 10 },
  { from: 'Miami', to: 'Orlando', duration: '3h 50m', price: 32, departures: 15 },
  { from: 'Seattle', to: 'Portland', duration: '3h 30m', price: 28, departures: 9 },
  { from: 'Dallas', to: 'Houston', duration: '3h 45m', price: 35, departures: 11 },
];

const PopularRoutes = () => {
  return (
    <section id="routes" className="bg-navy-light/30 py-[60px] md:py-[100px]">
      <div className="container">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4943e1f] border border-[#f4943e40] rounded-full text-sunset text-[0.8rem] font-semibold tracking-[0.5px] uppercase mb-4">
            Popular Routes
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3">Trending Destinations</h2>
          <p className="text-[1.05rem] text-white/70 max-w-[550px] leading-relaxed">Most booked routes this month — book early for the best seats.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((r, i) => (
            <div className="glass p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 hover:border-white/15" key={i}>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sunset font-semibold text-sm">
                  <MapPin size={16} />
                  <span>{r.from}</span>
                </div>
                <div className="flex items-center gap-1.5 flex-1 text-white/40">
                  <div className="flex-1 h-[1px] bg-white/15"></div>
                  <ArrowRight size={16} />
                </div>
                <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                  <MapPin size={16} className="text-teal" />
                  <span>{r.to}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">{r.duration}</span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">{r.departures} daily</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-white/60 text-sm">
                  From <strong className="text-sunset text-lg font-bold">${r.price}</strong>
                </span>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all bg-gradient-to-br from-sunset to-sunset-light text-black shadow-[0_4px_20px_rgba(244,148,62,0.3)] hover:-translate-y-[2px] hover:shadow-[0_6px_28px_rgba(244,148,62,0.45)]"
                  onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
