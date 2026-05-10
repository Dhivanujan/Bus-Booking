import { Search, Armchair, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <Search size={28} />, num: '01', title: 'Search', desc: 'Enter your departure city, destination, and travel date.' },
  { icon: <Armchair size={28} />, num: '02', title: 'Select Seat', desc: 'Pick your preferred seat from the interactive layout.' },
  { icon: <CreditCard size={28} />, num: '03', title: 'Pay Securely', desc: 'Complete your payment with our encrypted checkout.' },
  { icon: <CheckCircle size={28} />, num: '04', title: 'Travel', desc: 'Receive your e-ticket and enjoy the journey!' },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-navy py-[60px] md:py-[100px]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4943e1f] border border-[#f4943e40] rounded-full text-sunset text-[0.8rem] font-semibold tracking-[0.5px] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3">Book in 4 Simple Steps</h2>
          <p className="text-[1.05rem] text-white/70 max-w-[550px] leading-relaxed mx-auto">From search to seat — your next trip is just minutes away.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <div className="relative flex flex-col items-center text-center gap-4" key={i}>
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+36px)] w-[calc(100%-72px)] h-[1px] bg-white/10 z-0"></div>
              )}
              <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-[#f4943e1f] border border-[#f4943e30] flex items-center justify-center text-sunset">
                {s.icon}
              </div>
              <span className="text-[0.75rem] font-bold text-sunset/60 tracking-[2px] uppercase">{s.num}</span>
              <h3 className="text-[1.05rem] font-bold">{s.title}</h3>
              <p className="text-[0.9rem] text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
