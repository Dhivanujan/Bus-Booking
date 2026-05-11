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
    <section id="reviews" className="py-[80px] md:py-[110px]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-kicker">Testimonials</span>
          <h2 className="section-title mt-4">What Travelers Say</h2>
          <p className="section-subtitle mx-auto mt-3">Real reviews from passengers who experienced the LuxeBus difference.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div className="glass-card p-7 h-full flex flex-col gap-5 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]" key={i}>
              <Quote size={24} className="text-sunset/70" />
              <p className="text-[0.95rem] text-[#C7D0E0]/80 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="var(--color-coral)" color="var(--color-coral)" className="glow-star" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sunset to-sunset-light flex items-center justify-center text-black font-bold text-sm shrink-0">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{r.name}</span>
                  <span className="text-xs text-[#C7D0E0]/60">{r.route}</span>
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
