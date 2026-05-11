import {
  MapPin,
  ArrowRight,
  Clock3,
  Bus,
  Sparkles,
  Star,
} from 'lucide-react';

const routes = [
  {
    from: 'Colombo',
    to: 'Kandy',
    duration: '3h 45m',
    price: 24,
    departures: 18,
    gradient: 'from-cyan-500/20 to-blue-500/5',
    glow: 'shadow-cyan-500/10',
  },
  {
    from: 'Colombo',
    to: 'Galle',
    duration: '2h 50m',
    price: 18,
    departures: 22,
    gradient: 'from-fuchsia-500/20 to-pink-500/5',
    glow: 'shadow-fuchsia-500/10',
  },
  {
    from: 'Kandy',
    to: 'Nuwara Eliya',
    duration: '2h 40m',
    price: 16,
    departures: 12,
    gradient: 'from-emerald-500/20 to-teal-500/5',
    glow: 'shadow-emerald-500/10',
  },
  {
    from: 'Colombo',
    to: 'Jaffna',
    duration: '7h 15m',
    price: 38,
    departures: 9,
    gradient: 'from-orange-500/20 to-amber-500/5',
    glow: 'shadow-orange-500/10',
  },
  {
    from: 'Ella',
    to: 'Mirissa',
    duration: '4h 30m',
    price: 22,
    departures: 10,
    gradient: 'from-violet-500/20 to-fuchsia-500/5',
    glow: 'shadow-violet-500/10',
  },
  {
    from: 'Negombo',
    to: 'Trincomalee',
    duration: '5h 40m',
    price: 28,
    departures: 8,
    gradient: 'from-sky-500/20 to-cyan-500/5',
    glow: 'shadow-sky-500/10',
  },
];

const PopularRoutes = () => {
  return (
    <section
      id="routes"
      className="relative py-[100px] md:py-[130px] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 text-center lg:text-left mx-auto lg:mx-0">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-300 text-xs tracking-[0.25em] uppercase">
            <Sparkles size={14} />
            Sri Lanka Premium Routes
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
            Discover Sri Lanka Through
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Luxury Travel
            </span>
          </h2>

          <p className="mt-5 text-[#AAB6CC] text-[1.02rem] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Explore the island’s most demanded premium bus routes with panoramic
            luxury coaches, AI-powered scheduling, and real-time travel comfort.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

          {routes.map((r, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#091321]/80 backdrop-blur-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)] ${r.glow}`}
            >

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${r.gradient}`}
              />

              {/* Top Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl" />

              {/* Content */}
              <div className="relative z-10">

                {/* Route Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">

                  {/* From */}
                  <div className="text-center sm:text-left">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#7E8CA5]">
                      Departure
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {r.from}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-cyan-400 to-fuchsia-400" />

                    <ArrowRight
                      size={18}
                      className="text-cyan-300 group-hover:translate-x-1 transition duration-300"
                    />

                    <div className="w-12 h-[1px] bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                  </div>

                  {/* To */}
                  <div className="text-center sm:text-right">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#7E8CA5]">
                      Arrival
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {r.to}
                    </h3>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#B7C3D9]">
                    <Clock3 size={14} className="text-cyan-300" />
                    {r.duration}
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#B7C3D9]">
                    <Bus size={14} className="text-fuchsia-300" />
                    {r.departures} Daily
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#B7C3D9]">
                    <Star
                      size={14}
                      className="text-amber-300"
                      fill="currentColor"
                    />
                    Premium
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  {/* Price */}
                  <div>
                    <p className="text-sm text-[#91A0B8]">
                      Starting From
                    </p>

                    <h4 className="mt-1 text-3xl font-black text-white">
                      ${r.price}
                    </h4>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      document
                        .getElementById('search')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="group/btn relative overflow-hidden h-[52px] px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-medium shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-500 hover:scale-[1.03]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book Now
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </span>

                    <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-white/10 transition-transform duration-500" />
                  </button>
                </div>

                {/* Bottom Info */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs uppercase tracking-[0.18em] text-[#72819A]">
                  <span className="flex items-center gap-2">
                    <MapPin size={12} />
                    Sri Lanka Luxury Route
                  </span>

                  <span>Live Booking</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;