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
    <section id="features" className="bg-navy py-[60px] md:py-[100px]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4943e1f] border border-[#f4943e40] rounded-full text-sunset text-[0.8rem] font-semibold tracking-[0.5px] uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3">Travel with Confidence</h2>
          <p className="text-[1.05rem] text-white/70 max-w-[550px] leading-relaxed mx-auto">
            Every detail designed for comfort, safety, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 fade-up fade-up-d${i % 3 + 1}`} key={i}>
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5" style={{ color: f.color, background: `color-mix(in srgb, ${f.color} 15%, transparent)` }}>
                {f.icon}
              </div>
              <h3 className="text-[1.05rem] font-bold mb-2">{f.title}</h3>
              <p className="text-[0.9rem] text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
