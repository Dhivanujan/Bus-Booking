import { Shield, Wifi, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Clock size={28} />,
    title: 'On-Time Guarantee',
    desc: '98% punctual arrivals with live GPS tracking on every route.',
    color: 'var(--color-sunset)'
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure Booking',
    desc: 'End-to-end encrypted payments with instant e-ticket confirmation.',
    color: 'var(--color-teal)'
  },
  {
    icon: <Wifi size={28} />,
    title: 'Free Wi-Fi',
    desc: 'High-speed internet onboard so you stay connected on the go.',
    color: 'var(--color-blue-accent)'
  },
  {
    icon: <CreditCard size={28} />,
    title: 'No Hidden Fees',
    desc: 'Transparent pricing — what you see at checkout is what you pay.',
    color: 'var(--color-pink)'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-[80px] md:py-[110px]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-kicker">Why LuxeBus</span>
          <h2 className="section-title mt-4">Travel with Command-Level Confidence</h2>
          <p className="section-subtitle mx-auto mt-3">
            Every detail is precision-tuned for comfort, safety, and cinematic calm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div className={`glass-card p-7 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] fade-up fade-up-d${i % 3 + 1}`} key={i}>
              <div className="w-[54px] h-[54px] rounded-2xl flex items-center justify-center mb-5" style={{ color: f.color, background: `color-mix(in srgb, ${f.color} 20%, transparent)` }}>
                {f.icon}
              </div>
              <h3 className="text-[1.05rem] font-semibold mb-2 text-white">{f.title}</h3>
              <p className="text-[0.9rem] text-[#C7D0E0]/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
