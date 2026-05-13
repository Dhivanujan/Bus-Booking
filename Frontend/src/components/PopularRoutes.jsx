import {
  ArrowRight,
  Clock3,
  Bus,
  Route,
  Sparkles,
  MapPinned,
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
    <section
      id="routes"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#040B16]" />

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Discover Premium
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                {' '}
                Intercity Travel
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-400">
              Explore elite travel experiences with panoramic luxury coaches,
              predictable schedules, and refined onboard comfort.
            </p>
          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap gap-4">
            {[
              ['120+', 'Routes'],
              ['24/7', 'Booking'],
              ['50K+', 'Travelers'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl"
              >
                <h4 className="text-2xl font-bold text-white">{value}</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {routes.map((route) => (
            <div
              key={`${route.from}-${route.to}`}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/[0.05]
                backdrop-blur-xl p-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top Badge */}
              <div className="relative flex items-center justify-between">
                

                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <MapPinned size={14} />
                  Sri Lanka
                </div>
              </div>

              {/* Route */}
              <div className="relative mt-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Departure
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {route.from}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                      <span className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full" />

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                        <ArrowRight
                          size={16}
                          className="text-cyan-300"
                        />
                      </div>

                      <span className="h-[2px] w-12 bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full" />
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Arrival
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {route.to}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="relative mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Clock3 size={15} className="text-cyan-300" />
                  {route.duration}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Bus size={15} className="text-fuchsia-300" />
                  {route.departures} Daily Trips
                </div>
              </div>

              {/* Pricing */}
              <div className="relative mt-8 pt-6 border-t border-white/10 flex items-end justify-between gap-5">
                <div>
                  <p className="text-sm text-slate-400">
                    Starting from
                  </p>

                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-lg text-slate-400">Rs.</span>

                    <h4 className="text-4xl font-bold text-white">
                      {route.price.toLocaleString()}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById('search')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="
                    group/btn inline-flex items-center gap-2
                    rounded-2xl bg-gradient-to-r
                    from-cyan-400 to-fuchsia-500
                    px-5 py-3 text-sm font-semibold text-white
                    shadow-lg shadow-cyan-500/20
                    transition-all duration-300
                    hover:scale-105
                    hover:shadow-cyan-500/40
                  "
                >
                  Book Now

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;