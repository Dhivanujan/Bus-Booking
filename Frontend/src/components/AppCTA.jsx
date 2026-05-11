import {
  Smartphone,
  ArrowRight,
  MapPinned,
  BellRing,
  Wifi,
  Ticket,
} from 'lucide-react';

const AppCTA = () => {
  return (
    <section className="section relative">
      <div className="container">
        <div className="glass-panel p-8 md:p-12">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="section-title mt-4">Your journey, curated inside one app</h2>
              <p className="section-subtitle mt-3">
                Book luxury buses, track rides live, unlock premium seat upgrades, and manage every detail on the go.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <MapPinned size={18} />, title: 'Live bus tracking' },
                  { icon: <BellRing size={18} />, title: 'Smart notifications' },
                  { icon: <Wifi size={18} />, title: 'In-app Wi-Fi access' },
                  { icon: <Ticket size={18} />, title: 'Digital e-tickets' },
                ].map((item) => (
                  <div key={item.title} className="glass-card px-5 py-4 flex items-center gap-4">
                    <div className="icon-tile text-cyan-300">{item.icon}</div>
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="btn-primary btn-primary--lg w-full sm:w-auto">
                  Download for iPhone <ArrowRight size={18} />
                </button>
                <button className="btn-primary btn-primary--lg w-full sm:w-auto">
                  Android App <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="glass-card p-6 w-full max-w-90">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">LuxeBus Mobile</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Live journey view</h3>
                  </div>
                  <div className="icon-tile text-cyan-300">
                    <Smartphone size={18} />
                  </div>
                </div>

                <div className="mt-6 glass-card px-5 py-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Premium Ticket</p>
                    <span className="chip">VIP</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#91A0B8]">From</p>
                      <p className="text-lg font-semibold text-white">Colombo</p>
                    </div>
                    <ArrowRight size={16} className="text-cyan-300" />
                    <div className="text-right">
                      <p className="text-sm text-[#91A0B8]">To</p>
                      <p className="text-lg font-semibold text-white">Kandy</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-sm text-[#91A0B8]">
                    <span>Seat A12</span>
                    <span>08:30 AM</span>
                    <span>Skyview</span>
                  </div>
                </div>

                <div className="mt-6 glass-card px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Arrival ETA</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">2h 40m</span>
                    <span className="chip">72% complete</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-linear-to-r from-cyan-400 to-fuchsia-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;