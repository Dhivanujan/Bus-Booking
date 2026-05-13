import {
  Route,
  Armchair,
  Fingerprint,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: Route,
    num: '01',
    title: 'Search Routes',
    desc: 'Choose your departure city, destination, and travel date with intelligent realtime route suggestions.',
    gradient: 'from-cyan-400/20 to-cyan-500/10',
    iconColor: 'text-cyan-300',
  },
  {
    icon: Armchair,
    num: '02',
    title: 'Choose Your Seat',
    desc: 'Select panoramic window seats, luxury recliners, or premium VIP cabins in realtime.',
    gradient: 'from-fuchsia-400/20 to-fuchsia-500/10',
    iconColor: 'text-fuchsia-300',
  },
  {
    icon: Fingerprint,
    num: '03',
    title: 'Secure Checkout',
    desc: 'Pay instantly with encrypted payment systems and receive immediate booking confirmation.',
    gradient: 'from-emerald-400/20 to-emerald-500/10',
    iconColor: 'text-emerald-300',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Enjoy The Journey',
    desc: 'Receive your digital ticket and experience futuristic luxury travel across Sri Lanka.',
    gradient: 'from-amber-400/20 to-amber-500/10',
    iconColor: 'text-amber-300',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050B16]" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-md">
            <Sparkles size={15} />
            Seamless Booking Experience
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Book Your Luxury Trip
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
              {' '}
              In Four Steps
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-400">
            From intelligent route discovery to premium onboard comfort,
            every step is crafted for a seamless travel experience.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          
          {/* Connecting Line */}
          <div className="hidden xl:block absolute top-16 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-cyan-500/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Step Number */}
                  <div className="absolute top-5 right-5">
                    <span className="text-5xl font-black text-white/[0.04]">
                      {step.num}
                    </span>
                  </div>

                  {/* Top */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className="
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl border border-white/10
                        bg-white/5 backdrop-blur-md
                      "
                    >
                      <Icon className={step.iconColor} size={24} />
                    </div>

                    <div
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full border border-white/10
                        bg-white/5 text-slate-400
                        transition-all duration-300
                        group-hover:text-white
                        group-hover:translate-x-1
                      "
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Step Badge */}
                  <div className="relative mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                    Step {step.num}
                  </div>

                  {/* Content */}
                  <div className="relative mt-6">
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-slate-400">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;