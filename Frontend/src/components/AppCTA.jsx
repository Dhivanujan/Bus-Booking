import { Smartphone, ArrowRight } from 'lucide-react';

const AppCTA = () => {
  return (
    <section className="py-[80px] md:py-[110px]">
      <div className="container">
        <div className="glass-panel p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <span className="section-kicker"><Smartphone size={14} /> Get the App</span>
            <h2 className="section-title mt-4">Download LuxeBus</h2>
            <p className="section-subtitle mt-3 mb-8">
              Track your bus live, manage bookings on the go, and unlock app-only luxury upgrades.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <button className="glow-button w-full sm:w-auto">
                App Store <ArrowRight size={16} />
              </button>
              <button className="ghost-button w-full sm:w-auto">
                Google Play <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative shrink-0 mx-auto lg:mx-0">
            <div className="w-[150px] h-[280px] rounded-[30px] border-2 border-white/20 bg-navy-mid/60 backdrop-blur-sm flex flex-col p-3 gap-2 shadow-[0_0_60px_rgba(255,77,109,0.25)]">
              <div className="h-2 w-12 rounded-full bg-sunset/70 self-center"></div>
              <div className="flex-1 rounded-xl bg-white/5 flex flex-col gap-2 p-2">
                <div className="h-2 w-3/4 rounded bg-white/20"></div>
                <div className="h-2 w-1/2 rounded bg-white/10"></div>
                <div className="mt-auto h-7 w-full rounded-lg bg-gradient-to-r from-sunset to-pink opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
