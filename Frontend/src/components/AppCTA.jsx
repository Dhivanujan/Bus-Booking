import { Smartphone, ArrowRight } from 'lucide-react';

const AppCTA = () => {
  return (
    <section className="py-[60px] md:py-[100px]">
      <div className="container">
        <div className="glass p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-lg">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4943e1f] border border-[#f4943e40] rounded-full text-sunset text-[0.8rem] font-semibold tracking-[0.5px] uppercase mb-4">
              <Smartphone size={14} /> Get the App
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3">Download LuxeBus</h2>
            <p className="text-[1.05rem] text-white/70 max-w-[550px] leading-relaxed mb-8">
              Track your bus live, manage bookings on the go, and get exclusive app-only discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-full font-semibold text-[0.95rem] transition-all whitespace-nowrap bg-gradient-to-br from-sunset to-sunset-light text-black shadow-[0_4px_20px_rgba(244,148,62,0.3)] hover:-translate-y-[2px] hover:shadow-[0_6px_28px_rgba(244,148,62,0.45)]">
                App Store <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-full font-semibold text-[0.95rem] transition-all whitespace-nowrap bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/35">
                Google Play <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative shrink-0">
            <div className="w-[140px] h-[260px] rounded-[28px] border-2 border-white/20 bg-navy-mid/60 backdrop-blur-sm flex flex-col p-3 gap-2 shadow-[0_0_60px_rgba(244,148,62,0.15)]">
              <div className="h-2 w-12 rounded-full bg-sunset/60 self-center"></div>
              <div className="flex-1 rounded-xl bg-white/5 flex flex-col gap-2 p-2">
                <div className="h-2 w-3/4 rounded bg-white/20"></div>
                <div className="h-2 w-1/2 rounded bg-white/10"></div>
                <div className="mt-auto h-7 w-full rounded-lg bg-gradient-to-r from-sunset to-sunset-light opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
