import { Route, Armchair, Fingerprint, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Route,
    num: '01',
    title: 'Search Routes',
    desc: 'Choose your departure city, destination, and travel date with intelligent route suggestions.',
    tone: 'text-cyan-300',
  },
  {
    icon: Armchair,
    num: '02',
    title: 'Choose Your Seat',
    desc: 'Select panoramic window seats, premium recliners, or VIP luxury cabins in real time.',
    tone: 'text-fuchsia-300',
  },
  {
    icon: Fingerprint,
    num: '03',
    title: 'Secure Checkout',
    desc: 'Pay instantly using protected encrypted payment systems with instant booking confirmation.',
    tone: 'text-emerald-300',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Enjoy The Journey',
    desc: 'Receive your digital e-ticket and experience futuristic luxury travel across Sri Lanka.',
    tone: 'text-amber-300',
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="section relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mt-4">Book your luxury trip in four steps</h2>
          <p className="section-subtitle mt-3 mx-auto">
            From route discovery to onboard comfort, every step is streamlined for premium travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;

            return (
              <div key={s.title} className="glass-card p-7 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
                <div className="flex items-center justify-between">
                  <div className={`icon-tile ${s.tone}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.24em] text-[#7E8CA5]">Step {s.num}</span>
                </div>
                <h3 className="mt-6 text-[1.1rem] font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[#B7C3D9]">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;