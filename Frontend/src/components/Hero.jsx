import heroImg from '../assets/hero.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Luxury buses on highway at sunset" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A]/88 via-[#0B1D3A]/65 to-[#0B1D3A]/40"></div>
      </div>

      <div className="relative z-10 pt-[90px] md:pt-[100px] pb-[60px] container">
        <div className="max-w-[620px] fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4943e1f] border border-[#f4943e40] rounded-full text-sunset text-[0.8rem] font-semibold tracking-[0.5px] uppercase mb-4">
            Premium Bus Travel
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,4.2rem)] font-black leading-[1.08] mb-5 tracking-[-0.5px]">
            Your Journey,<br />
            <span className="bg-gradient-to-br from-sunset to-gold bg-clip-text text-transparent">Redefined.</span>
          </h1>
          <p className="text-[1.1rem] text-white/70 leading-[1.75] mb-8 max-w-[480px]">
            Experience luxury intercity travel with panoramic views, 
            reclining seats, onboard Wi-Fi, and guaranteed on-time arrivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              className="inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-full font-semibold text-[0.95rem] transition-all whitespace-nowrap bg-gradient-to-br from-sunset to-sunset-light text-black shadow-[0_4px_20px_rgba(244,148,62,0.3)] hover:-translate-y-[2px] hover:shadow-[0_6px_28px_rgba(244,148,62,0.45)] w-full sm:w-auto" 
              onClick={scrollToSearch}
            >
              Book Your Trip <ArrowRight size={18} />
            </button>
            <a 
              href="#how" 
              className="inline-flex items-center justify-center gap-2 px-7 py-[13px] rounded-full font-semibold text-[0.95rem] transition-all whitespace-nowrap bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/35 w-full sm:w-auto" 
              onClick={(e) => { 
                e.preventDefault(); 
                document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); 
              }}
            >
              Learn More
            </a>
          </div>

          <div className="flex items-center gap-5 md:gap-7">
            <div className="flex flex-col">
              <span className="text-[1.3rem] md:text-[1.6rem] font-extrabold text-sunset">50K+</span>
              <span className="text-[0.8rem] text-white/45 font-medium">Happy Travelers</span>
            </div>
            <div className="w-[1px] h-[36px] bg-white/15"></div>
            <div className="flex flex-col">
              <span className="text-[1.3rem] md:text-[1.6rem] font-extrabold text-sunset">200+</span>
              <span className="text-[0.8rem] text-white/45 font-medium">Routes</span>
            </div>
            <div className="w-[1px] h-[36px] bg-white/15"></div>
            <div className="flex flex-col">
              <span className="text-[1.3rem] md:text-[1.6rem] font-extrabold text-sunset">98%</span>
              <span className="text-[0.8rem] text-white/45 font-medium">On-Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
