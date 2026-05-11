import { Radar, ShieldCheck, Signal, Ticket } from 'lucide-react';

const features = [
  {
    icon: Radar,
    title: 'Precision Scheduling',
    desc: 'Adaptive routing and live timing intelligence keep every arrival dependable.',
    tone: 'text-cyan-300',
  },
  {
    icon: ShieldCheck,
    title: 'Protected Journeys',
    desc: 'Encrypted bookings, verified boarding, and secure payments across every route.',
    tone: 'text-emerald-300',
  },
  {
    icon: Signal,
    title: 'Connected Cabin',
    desc: 'Premium connectivity and cabin controls built for uninterrupted travel.',
    tone: 'text-violet-300',
  },
  {
    icon: Ticket,
    title: 'Transparent Pricing',
    desc: 'Luxury fares with clear, upfront pricing and premium seat flexibility.',
    tone: 'text-amber-300',
  },
];

const Features = () => {
  return (
    <section id="features" className="section relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-kicker">Premium Experience</span>
          <h2 className="section-title mt-4">Travel engineered for luxury intelligence</h2>
          <p className="section-subtitle mt-3 mx-auto">
            Every detail is tuned for effortless booking, consistent comfort, and confident arrivals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;

            return (
              <div
                key={f.title}
                className="glass-card p-7 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
              >
                <div className={`icon-tile ${f.tone}`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-[1.1rem] font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[#B7C3D9]">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;