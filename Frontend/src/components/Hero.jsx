import heroImg from '../assets/hero.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-ambient"></div>
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Luxury buses on highway at sunset" className="w-full h-full object-cover object-center scale-[1.05] opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A]/95 via-[#0F2027]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 pt-[120px] pb-[120px] container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="max-w-[640px] fade-up">
            <span className="section-kicker">Smart Mobility Terminal</span>
            <h1 className="text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[1.05] mb-6">
              Your Journey,<br />
              <span className="bg-gradient-to-r from-sunset via-pink to-teal bg-clip-text text-transparent">Reimagined.</span>
            </h1>
            <p className="text-[1.1rem] text-[#C7D0E0]/70 leading-[1.8] mb-8 max-w-[520px]">
              A cinematic, AI-enhanced booking experience with panoramic views, adaptive comfort, and a command-center level of control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="glow-button w-full sm:w-auto" onClick={scrollToSearch}>
                Search Buses <ArrowRight size={18} />
              </button>
              <a
                href="#how"
                className="ghost-button w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Experience
              </a>
            </div>

            <div className="glass-card px-6 py-5 grid grid-cols-3 gap-5 max-w-[520px]">
              <div className="flex flex-col">
                <span className="text-[1.2rem] font-extrabold text-sunset">50K+</span>
                <span className="text-[0.8rem] text-[#C7D0E0]/60">Premium Riders</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[1.2rem] font-extrabold text-teal">200+</span>
                <span className="text-[0.8rem] text-[#C7D0E0]/60">Hyper Routes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[1.2rem] font-extrabold text-pink">98%</span>
                <span className="text-[0.8rem] text-[#C7D0E0]/60">On-Time AI</span>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end w-full max-w-[520px] fade-up fade-up-d2">
            <div className="glass-card p-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img src={heroImg} alt="Luxury coach" className="w-full h-[320px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0B0F1A]/70"></div>
              </div>
              <div className="mt-5 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.2em] text-[#C7D0E0]/70">
                <span>Autonomous Ready</span>
                <span>Ultra Quiet</span>
                <span>Skyview Cabin</span>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 glass-panel px-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-[#C7D0E0]/80">
              Live Fleet Pulse
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
