import heroImg from '../assets/hero.png';
import { ArrowRight, Radar, Ticket, Compass } from 'lucide-react';

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-30 md:pt-37.5 pb-25">
      <div className="absolute inset-0 hero-ambient"></div>
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
        <img
          src={heroImg}
          alt="Luxury buses on highway at sunset"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-l from-navy via-navy/70 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="max-w-140">
            <span className="section-kicker">Cinematic Mobility Network</span>
            <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[1.05] text-white">
              Luxury routes, precision arrivals for Sri Lanka.
            </h1>
            <p className="mt-5 text-[1.05rem] text-[#B7C3D9] leading-[1.8]">
              Book premium coaches with live fleet intelligence, refined cabin control, and a travel experience designed like a private terminal.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary btn-primary--lg w-full sm:w-auto" onClick={scrollToSearch}>
                Plan a Journey <ArrowRight size={18} />
              </button>
              <a
                href="#how"
                className="inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#B7C3D9] hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience the cabin
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                ['50K+', 'Premium riders'],
                ['200+', 'Curated routes'],
                ['98%', 'On-time AI'],
              ].map(([value, label]) => (
                <div key={label} className="glass-card px-5 py-4 text-center sm:text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">{label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-130 mx-auto lg:mx-0 lg:justify-self-end">
            <div className="glass-panel p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="icon-tile text-cyan-300">
                    <Radar size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Live route console</p>
                    <p className="text-sm text-white">Colombo → Kandy</p>
                  </div>
                </div>
                <span className="chip">AI Synced</span>
              </div>

              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">From</p>
                  <p className="mt-1 text-base font-semibold text-white">Colombo</p>
                </div>
                <div className="route-line"></div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">To</p>
                  <p className="mt-1 text-base font-semibold text-white">Kandy</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ['Departure', '08:30 AM'],
                  ['Seat', 'A12'],
                  ['Cabin', 'Skyview'],
                ].map(([label, value]) => (
                  <div key={label} className="glass-card px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 relative overflow-hidden rounded-[22px] border border-white/10">
                <img src={heroImg} alt="Luxury coach" className="h-47.5 w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 chip">Panoramic cabin</div>
              </div>
            </div>

            <div className="absolute -top-6 left-6 hidden md:flex items-center gap-3 glass-card px-4 py-3">
              <div className="icon-tile text-teal">
                <Compass size={16} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Route Signal</p>
                <p className="text-sm font-semibold text-white">Fleet Aligned</p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 hidden md:flex items-center gap-3 glass-card px-4 py-3">
              <div className="icon-tile text-sunset">
                <Ticket size={16} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#7E8CA5]">Premium Ticket</p>
                <p className="text-sm font-semibold text-white">Priority boarding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
