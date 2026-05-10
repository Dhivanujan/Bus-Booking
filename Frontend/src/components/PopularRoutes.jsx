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
    <section id="routes" className="py-[80px] md:py-[110px]">
      <div className="container">
        <div className="mb-12">
          <span className="section-kicker">Popular Routes</span>
          <h2 className="section-title mt-4">Trending Destinations</h2>
          <p className="section-subtitle mt-3">Most booked routes this month — reserve early for the best cabins.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((r, i) => (
            <div className="glass-card p-6 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]" key={i}>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sunset font-semibold text-sm">
                  <MapPin size={16} />
                  <span>{r.from}</span>
                </div>
                <div className="flex items-center gap-2 flex-1 text-white/40">
                  <div className="route-line flex-1">
                    <span className="route-dot"></span>
                  </div>
                  <ArrowRight size={16} className="text-teal" />
                </div>
                <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                  <MapPin size={16} className="text-pink" />
                  <span>{r.to}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#C7D0E0]/70 text-xs font-medium">{r.duration}</span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#C7D0E0]/70 text-xs font-medium">{r.departures} daily</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-[#C7D0E0]/70 text-sm">
                  From <strong className="text-sunset text-lg font-bold">${r.price}</strong>
                </span>
                <button
                  className="glow-button text-sm"
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
