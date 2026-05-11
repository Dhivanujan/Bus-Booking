import {
  Smartphone,
  ArrowRight,
  Sparkles,
  MapPinned,
  BellRing,
  Wifi,
  Ticket,
  Star,
} from 'lucide-react';

const AppCTA = () => {
  return (
    <section className="relative py-[110px] md:py-[140px] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#091321]/80 backdrop-blur-2xl px-8 py-10 md:px-14 md:py-16 shadow-[0_25px_100px_rgba(0,0,0,0.45)]">

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.12),transparent_30%)]" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_500px] gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-xs tracking-[0.25em] uppercase">
                <Sparkles size={14} />
                Mobile Luxury Experience
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl md:text-5xl font-bold leading-tight text-white">
                Your Entire Journey
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {' '}Inside One App
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#AAB6CC] text-[1.05rem] leading-[1.9] max-w-xl">
                Book luxury buses, track rides in real-time, unlock premium seat upgrades,
                receive AI-powered travel notifications, and manage every journey effortlessly.
              </p>

              {/* Features */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                {[
                  {
                    icon: <MapPinned size={18} />,
                    title: 'Live Bus Tracking',
                  },
                  {
                    icon: <BellRing size={18} />,
                    title: 'Smart Notifications',
                  },
                  {
                    icon: <Wifi size={18} />,
                    title: 'In-App Wi-Fi Access',
                  },
                  {
                    icon: <Ticket size={18} />,
                    title: 'Digital E-Tickets',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                      {item.icon}
                    </div>

                    <span className="text-white font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                {/* App Store */}
                <button className="group relative overflow-hidden h-[64px] px-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-semibold shadow-[0_15px_50px_rgba(59,130,246,0.35)] transition-all duration-500 hover:scale-[1.03]">

                  <span className="relative z-10 flex items-center gap-3">
                    Download for iPhone

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
                </button>

                {/* Play Store */}
                <button className="h-[64px] px-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300">

                  <span className="flex items-center gap-3">
                    Android App

                    <ArrowRight size={18} />
                  </span>
                </button>
              </div>

              {/* Bottom Stats */}
              <div className="mt-12 flex flex-wrap gap-5">

                {[
                  ['4.9★', 'App Rating'],
                  ['50K+', 'Downloads'],
                  ['24/7', 'Support'],
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
                  >
                    <h4 className="text-xl font-bold text-white">
                      {item[0]}
                    </h4>

                    <p className="mt-1 text-sm text-[#91A0B8]">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE PHONE UI */}
            <div className="relative flex justify-center">

              {/* Glow */}
              <div className="absolute w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Phone */}
              <div className="relative w-[320px] h-[640px] rounded-[42px] border border-white/10 bg-[#050B16]/90 backdrop-blur-2xl p-4 shadow-[0_25px_120px_rgba(0,0,0,0.55)]">

                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[28px] rounded-full bg-black z-20" />

                {/* Screen */}
                <div className="relative overflow-hidden w-full h-full rounded-[34px] bg-gradient-to-b from-[#071120] to-[#0B1729] border border-white/5 p-5">

                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                        Welcome Back
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        LuxeBus
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_10px_40px_rgba(34,211,238,0.35)]">
                      <Smartphone size={20} />
                    </div>
                  </div>

                  {/* Ticket Card */}
                  <div className="mt-8 relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/5 p-5">

                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cyan-400/10 blur-2xl" />

                    <div className="relative z-10">

                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                          Premium Ticket
                        </span>

                        <div className="flex items-center gap-1 text-amber-300">
                          <Star size={14} fill="currentColor" />
                          <span className="text-xs">VIP</span>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">

                        <div>
                          <p className="text-sm text-[#91A0B8]">
                            From
                          </p>

                          <h4 className="text-2xl font-bold text-white">
                            Colombo
                          </h4>
                        </div>

                        <ArrowRight className="text-cyan-300" />

                        <div className="text-right">
                          <p className="text-sm text-[#91A0B8]">
                            To
                          </p>

                          <h4 className="text-2xl font-bold text-white">
                            Kandy
                          </h4>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between text-sm text-[#AAB6CC]">
                        <span>Seat A12</span>
                        <span>08:30 AM</span>
                        <span>Luxury Coach</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Tracking */}
                  <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#91A0B8]">
                          Live Tracking
                        </p>

                        <h4 className="mt-1 text-lg font-semibold text-white">
                          Bus Arriving
                        </h4>
                      </div>

                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Progress */}
                    <div className="mt-6">
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                      </div>

                      <div className="mt-3 flex justify-between text-xs text-[#7E8CA5]">
                        <span>Colombo</span>
                        <span>72%</span>
                        <span>Kandy</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-xs text-[#91A0B8]">
                        Rewards
                      </p>

                      <h4 className="mt-2 text-lg font-bold text-white">
                        1,250
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-xs text-[#91A0B8]">
                        Trips
                      </p>

                      <h4 className="mt-2 text-lg font-bold text-white">
                        48
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-24 hidden xl:flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#08101E]/70 backdrop-blur-xl px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#91A0B8]">
                    Live Status
                  </p>

                  <h5 className="text-sm font-semibold text-white">
                    Tracking Active
                  </h5>
                </div>
              </div>

              <div className="absolute -right-8 bottom-24 hidden xl:flex flex-col rounded-2xl border border-fuchsia-400/20 bg-[#08101E]/70 backdrop-blur-xl px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <span className="text-xs uppercase tracking-[0.18em] text-[#91A0B8]">
                  Premium Rating
                </span>

                <span className="mt-1 text-2xl font-bold text-white">
                  4.9★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;