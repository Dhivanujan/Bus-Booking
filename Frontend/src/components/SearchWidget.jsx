import { MapPin, CalendarDays, Users, Search, ArrowRightLeft } from 'lucide-react';

const SearchWidget = () => {
  return (
    <section
      id="search"
      className="relative z-20 -mt-[130px] pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071120]/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 h-64 w-64 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 h-72 w-72 bg-fuchsia-500/10 blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
          </div>

          <div className="relative p-6 md:p-10">

            {/* Top Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs tracking-[0.25em] uppercase font-medium">
                  Smart Luxury Search
                </div>

                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white leading-tight">
                  Book Premium Bus Routes <br />
                  With Intelligent Travel Search
                </h2>

                <p className="mt-4 text-[#A9B4C7] max-w-2xl leading-relaxed">
                  Experience seamless intercity travel with live seat tracking,
                  luxury AC coaches, priority boarding, and AI-powered route optimization.
                </p>
              </div>

              {/* Floating Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white">120+</h4>
                  <p className="text-xs text-[#9BA9C0] mt-1">Luxury Routes</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white">24/7</h4>
                  <p className="text-xs text-[#9BA9C0] mt-1">Availability</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white">5★</h4>
                  <p className="text-xs text-[#9BA9C0] mt-1">Premium Travel</p>
                </div>
              </div>
            </div>

            {/* Search Form */}
            <div className="relative rounded-[28px] border border-white/10 bg-[#0B1729]/80 p-5 md:p-6 backdrop-blur-xl">

              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-[28px] border border-cyan-400/10 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

                {/* From */}
                <div className="group relative">
                  <label className="mb-3 flex items-center gap-2 text-sm text-[#B7C4D8]">
                    <MapPin size={15} className="text-cyan-400" />
                    Departure
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Colombo"
                      className="w-full h-[64px] rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 placeholder:text-[#6E7C93] focus:border-cyan-400/40 focus:bg-white/10"
                    />

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/5 pointer-events-none" />
                  </div>
                </div>

                {/* Swap */}
                <div className="hidden xl:flex items-center justify-center pt-7">
                  <button className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 text-cyan-300 hover:bg-cyan-400/10 hover:rotate-180 transition-all duration-500 flex items-center justify-center">
                    <ArrowRightLeft size={20} />
                  </button>
                </div>

                {/* To */}
                <div className="group relative">
                  <label className="mb-3 flex items-center gap-2 text-sm text-[#B7C4D8]">
                    <MapPin size={15} className="text-fuchsia-400" />
                    Destination
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Kandy"
                      className="w-full h-[64px] rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 placeholder:text-[#6E7C93] focus:border-fuchsia-400/40 focus:bg-white/10"
                    />

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-fuchsia-400/5 pointer-events-none" />
                  </div>
                </div>

                {/* Date */}
                <div className="group relative">
                  <label className="mb-3 flex items-center gap-2 text-sm text-[#B7C4D8]">
                    <CalendarDays size={15} className="text-amber-400" />
                    Travel Date
                  </label>

                  <input
                    type="date"
                    className="w-full h-[64px] rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 focus:border-amber-400/40 focus:bg-white/10"
                  />
                </div>

                {/* Passengers */}
                <div className="group relative">
                  <label className="mb-3 flex items-center gap-2 text-sm text-[#B7C4D8]">
                    <Users size={15} className="text-emerald-400" />
                    Travelers
                  </label>

                  <select className="w-full h-[64px] rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 focus:border-emerald-400/40 focus:bg-white/10">
                    <option className="text-black">1 Passenger</option>
                    <option className="text-black">2 Passengers</option>
                    <option className="text-black">3 Passengers</option>
                    <option className="text-black">4 Passengers</option>
                  </select>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                {/* Features */}
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    'Live Seats',
                    'Instant Booking',
                    'Luxury Coaches',
                    'Realtime Tracking',
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#BFC9DA]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="group relative overflow-hidden h-[64px] px-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.45)] transition-all duration-500 hover:scale-[1.03]">
                  <span className="relative z-10 flex items-center gap-3">
                    <Search size={19} />
                    Search Luxury Buses
                  </span>

                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;