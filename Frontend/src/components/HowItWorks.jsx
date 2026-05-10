import { Search, Armchair, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <Search size={28} />, num: '01', title: 'Search', desc: 'Enter your departure city, destination, and travel date.' },
  { icon: <Armchair size={28} />, num: '02', title: 'Select Seat', desc: 'Pick your preferred seat from the interactive layout.' },
  { icon: <CreditCard size={28} />, num: '03', title: 'Pay Securely', desc: 'Complete your payment with our encrypted checkout.' },
  { icon: <CheckCircle size={28} />, num: '04', title: 'Travel', desc: 'Receive your e-ticket and enjoy the journey!' },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-[80px] md:py-[110px]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-kicker">How It Works</span>
          <h2 className="section-title mt-4">Book in 4 Elegant Steps</h2>
          <p className="section-subtitle mx-auto mt-3">From command search to seat selection — your next trip is moments away.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <div className="relative flex flex-col items-center text-center gap-4" key={i}>
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+36px)] w-[calc(100%-72px)] h-[2px] bg-gradient-to-r from-sunset/40 to-teal/40 z-0"></div>
              )}
              <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-[#ff4d6d1f] border border-[#ff4d6d40] flex items-center justify-center text-sunset">
                {s.icon}
              </div>
              <span className="text-[0.75rem] font-bold text-sunset/70 tracking-[2px] uppercase">{s.num}</span>
              <div className="glass-card px-5 py-6 w-full">
                <h3 className="text-[1.05rem] font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[0.9rem] text-[#C7D0E0]/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
