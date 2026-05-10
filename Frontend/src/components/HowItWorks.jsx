import {
  Search,
  Armchair,
  CreditCard,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: <Search size={28} />,
    num: '01',
    title: 'Search Routes',
    desc: 'Choose your departure city, destination, and travel date with intelligent route suggestions.',
    gradient: 'from-cyan-500/20 to-blue-500/5',
    iconColor: 'text-cyan-300',
    border: 'border-cyan-400/20',
  },
  {
    icon: <Armchair size={28} />,
    num: '02',
    title: 'Choose Your Seat',
    desc: 'Select panoramic window seats, premium recliners, or VIP luxury cabins in real time.',
    gradient: 'from-fuchsia-500/20 to-pink-500/5',
    iconColor: 'text-fuchsia-300',
    border: 'border-fuchsia-400/20',
  },
  {
    icon: <CreditCard size={28} />,
    num: '03',
    title: 'Secure Checkout',
    desc: 'Pay instantly using protected encrypted payment systems with instant booking confirmation.',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    iconColor: 'text-emerald-300',
    border: 'border-emerald-400/20',
  },
  {
    icon: <CheckCircle2 size={28} />,
    num: '04',
    title: 'Enjoy The Journey',
    desc: 'Receive your digital e-ticket and experience futuristic luxury travel across Sri Lanka.',
    gradient: 'from-orange-500/20 to-amber-500/5',
    iconColor: 'text-orange-300',
    border: 'border-orange-400/20',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative py-[100px] md:py-[130px] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-300 text-xs tracking-[0.25em] uppercase">
            <Sparkles size={14} />
            Seamless Booking Experience
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
            Book Your Luxury Trip
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}In 4 Smart Steps
            </span>
          </h2>

          <p className="mt-5 text-[#AAB6CC] text-[1.02rem] leading-relaxed">
            From AI-powered route discovery to premium onboard experiences —
            every step is crafted for futuristic comfort and effortless travel.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Connector Line */}
          <div className="hidden xl:block absolute top-[80px] left-0 right-0 h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-orange-500/30" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {steps.map((s, i) => (
              <div
                key={i}
                className="group relative"
              >

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-[32px] border ${s.border} bg-[#091321]/80 backdrop-blur-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]`}
                >

                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br ${s.gradient}`}
                  />

                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 blur-3xl" />

                  {/* Content */}
                  <div className="relative z-10">

                    {/* Step Number */}
                    <div className="flex items-center justify-between">

                      <span className="text-[0.75rem] tracking-[0.25em] uppercase text-[#72819A] font-semibold">
                        Step {s.num}
                      </span>

                      <div className="opacity-0 group-hover:opacity-100 transition duration-500 translate-x-2 group-hover:translate-x-0">
                        <ArrowRight
                          size={18}
                          className="text-white/70"
                        />
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`mt-6 w-[78px] h-[78px] rounded-3xl flex items-center justify-center ${s.iconColor} bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]`}
                    >
                      {s.icon}
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-[1.25rem] font-bold text-white">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[0.96rem] leading-relaxed text-[#B7C3D9]">
                      {s.desc}
                    </p>

                    {/* Bottom Line */}
                    <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                    {/* Bottom Status */}
                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-xs tracking-[0.18em] uppercase text-[#7E8CA5]">
                        Smart Process
                      </span>

                      <span className={`${s.iconColor} text-xs font-medium`}>
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="xl:hidden flex justify-center py-4">
                    <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-500/40 to-fuchsia-500/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;