import {
  Radar,
  ShieldCheck,
  Signal,
  Ticket,
  ArrowUpRight,
} from 'lucide-react';

const features = [
  {
    icon: Radar,
    title: 'Precision Scheduling',
    desc: 'Adaptive routing and realtime timing intelligence ensure dependable arrivals across every journey.',
    tone: 'from-cyan-400/20 to-cyan-500/10',
    iconColor: 'text-cyan-300',
  },
  {
    icon: ShieldCheck,
    title: 'Protected Journeys',
    desc: 'Secure bookings, encrypted payments, and verified boarding for complete peace of mind.',
    tone: 'from-emerald-400/20 to-emerald-500/10',
    iconColor: 'text-emerald-300',
  },
  {
    icon: Signal,
    title: 'Connected Cabin',
    desc: 'Premium onboard connectivity and intelligent comfort systems designed for modern travelers.',
    tone: 'from-violet-400/20 to-violet-500/10',
    iconColor: 'text-violet-300',
  },
  {
    icon: Ticket,
    title: 'Transparent Pricing',
    desc: 'Clear luxury fares with flexible seating options and no hidden booking surprises.',
    tone: 'from-amber-400/20 to-amber-500/10',
    iconColor: 'text-amber-300',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050B16]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-md">
            Premium Travel Experience
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Travel Engineered for
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
              {' '}
              Luxury Intelligence
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-400">
            Every detail is crafted for effortless booking, exceptional comfort,
            and seamless long-distance travel experiences.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-white/10 bg-white/[0.04]
                  p-7 backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.07]
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
                "
              >
                {/* Card Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.tone} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Top Row */}
                <div className="relative flex items-start justify-between">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl border border-white/10
                      bg-white/5 backdrop-blur-md
                    "
                  >
                    <Icon className={feature.iconColor} size={24} />
                  </div>

                  <div
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full border border-white/10
                      bg-white/5 text-slate-400
                      transition-all duration-300
                      group-hover:text-white
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-400">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute bottom-0 left-0 h-[3px] w-0
                    bg-gradient-to-r from-cyan-400 to-fuchsia-500
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;