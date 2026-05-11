import heroImg from '../assets/hero.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-35 pb-32">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury buses on highway at sunset"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/85 via-navy/70 to-navy"></div>
      </div>
      <div className="absolute inset-0 hero-ambient"></div>

      <div className="container relative z-10">
        <div className="max-w-200 mx-auto text-center">
          <h1 className="hero-script mt-6 text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] text-white">
            Premium routes with <span className="text-sunset">precision arrivals</span> across Sri Lanka.
          </h1>
          <p className="mt-5 text-lg text-[#B7C3D9] leading-[1.8]">
            Curated luxury coaches, refined comfort, and intelligent booking in one seamless journey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-primary--lg w-full sm:w-auto" onClick={scrollToSearch}>
              Plan a Journey <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
