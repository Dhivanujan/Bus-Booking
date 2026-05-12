import {
  ArrowRight,
  Clock3,
  Bus,
  Route,
} from 'lucide-react';

const routes = [
  {
    from: 'Colombo',
    to: 'Kandy',
    duration: '3h 45m',
    price: 1800,
    departures: 18,
  },
  {
    from: 'Colombo',
    to: 'Galle',
    duration: '2h 50m',
    price: 1500,
    departures: 22,
  },
  {
    from: 'Kandy',
    to: 'Nuwara Eliya',
    duration: '2h 40m',
    price: 1200,
    departures: 12,
  },
  {
    from: 'Colombo',
    to: 'Jaffna',
    duration: '7h 15m',
    price: 3500,
    departures: 9,
  },
  {
    from: 'Kurunegala',
    to: 'Matara',
    duration: '4h 30m',
    price: 2200,
    departures: 10,
  },
  {
    from: 'Negombo',
    to: 'Trincomalee',
    duration: '5h 40m',
    price: 2800,
    departures: 8,
  },
];

const PopularRoutes = () => {
  return (
    <section id="routes" className="section relative">
      <div className="container">
        <div className="max-w-3xl mb-14 text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="section-title mt-4">Discover premium intercity travel</h2>
          <p className="section-subtitle mt-3 mx-auto lg:mx-0">
            Curated luxury routes with panoramic coaches, predictable timings, and refined service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {routes.map((r) => (
            <div key={`${r.from}-${r.to}`} className="glass-card p-7 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Departure</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{r.from}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="route-line w-16"></span>
                  <ArrowRight size={16} className="text-cyan-300" />
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Arrival</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{r.to}</h3>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="chip">
                  <Clock3 size={14} className="text-cyan-300" />
                  {r.duration}
                </span>
                <span className="chip">
                  <Bus size={14} className="text-fuchsia-300" />
                  {r.departures} Daily
                </span>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-[#91A0B8]">Starting from</p>
                  <h4 className="mt-1 text-3xl font-semibold text-white">Rs. {r.price.toLocaleString()}</h4>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById('search')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="btn-primary btn-primary--sm"
                >
                  Book route <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#72819A]">
                <span className="flex items-center gap-2">
                  <Route size={12} />
                  Live premium route
                </span>
                <span>Live booking</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;