import {
  Shield,
  Wifi,
  Clock3,
  CreditCard,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: <Clock3 size={26} />,
    title: 'Precision Timings',
    desc: 'AI-powered scheduling with real-time tracking and ultra-reliable arrivals.',
    glow: 'from-orange-500/20 to-amber-500/5',
    border: 'border-orange-400/20',
    iconColor: 'text-orange-300',
    bg: 'bg-orange-400/10',
  },
  {
    icon: <Shield size={26} />,
    title: 'Protected Journeys',
    desc: 'Advanced encrypted bookings with verified boarding and secure payments.',
    glow: 'from-cyan-500/20 to-blue-500/5',
    border: 'border-cyan-400/20',
    iconColor: 'text-cyan-300',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: <Wifi size={26} />,
    title: 'Connected Travel',
    desc: 'Stream, browse, and work seamlessly with premium onboard Wi-Fi access.',
    glow: 'from-violet-500/20 to-fuchsia-500/5',
    border: 'border-violet-400/20',
    iconColor: 'text-violet-300',
    bg: 'bg-violet-400/10',
  },
  {
    icon: <CreditCard size={26} />,
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Luxury travel with fully visible and honest pricing.',
    glow: 'from-emerald-500/20 to-teal-500/5',
    border: 'border-emerald-400/20',
    iconColor: 'text-emerald-300',
    bg: 'bg-emerald-400/10',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-[100px] md:py-[130px] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-cyan-300 tracking-[0.2em] uppercase">
            <Sparkles size={14} />
            Premium Experience
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
            Travel Designed With
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Luxury Intelligence
            </span>
          </h2>

          <p className="mt-5 text-[#AAB6CC] text-[1.02rem] leading-relaxed">
            Every feature is engineered to deliver a seamless, futuristic,
            and stress-free luxury travel experience from booking to arrival.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[30px] border ${f.border} bg-[#091321]/80 backdrop-blur-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]`}
            >

              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${f.glow}`}
              />

              {/* Top Blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />

              {/* Card Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`w-[68px] h-[68px] rounded-2xl flex items-center justify-center ${f.bg} ${f.iconColor} border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
                >
                  {f.icon}
                </div>

                {/* Title */}
                <div className="mt-8 flex items-start justify-between gap-3">
                  <h3 className="text-[1.15rem] font-semibold text-white leading-snug">
                    {f.title}
                  </h3>

                  <div className="opacity-0 group-hover:opacity-100 transition duration-500 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight
                      size={18}
                      className="text-white/70"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-[0.95rem] leading-relaxed text-[#B7C3D9]">
                  {f.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Bottom Stats */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs tracking-[0.18em] uppercase text-[#7E8CA5]">
                    Premium Service
                  </span>

                  <span className={`text-xs font-medium ${f.iconColor}`}>
                    Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;