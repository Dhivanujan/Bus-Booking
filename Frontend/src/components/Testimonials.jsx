import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Mitchell',
    route: 'NYC → Boston',
    text: 'The seats were incredibly comfortable and we arrived 10 minutes early. Best bus experience ever!',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    route: 'LA → San Francisco',
    text: 'Free Wi-Fi, USB charging, and the smoothest ride. LuxeBus has set a new standard for intercity travel.',
    rating: 5
  },
  {
    name: 'Emily Chen',
    route: 'Chicago → Detroit',
    text: 'Booking was super easy and the price was transparent — no sneaky fees at checkout. Love it!',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-navy-light/20 py-[60px] md:py-[100px]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4943e1f] border border-[#f4943e40] rounded-full text-sunset text-[0.8rem] font-semibold tracking-[0.5px] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.15] mb-3">What Travelers Say</h2>
          <p className="text-[1.05rem] text-white/70 max-w-[550px] leading-relaxed mx-auto">Real reviews from passengers who experienced the difference.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div className="glass p-7 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300" key={i}>
              <Quote size={24} className="text-sunset/50" />
              <p className="text-[0.95rem] text-white/80 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sunset to-sunset-light flex items-center justify-center text-black font-bold text-sm shrink-0">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{r.name}</span>
                  <span className="text-xs text-white/50">{r.route}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
