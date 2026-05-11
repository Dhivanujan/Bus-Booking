import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Kasun Perera',
    route: 'Colombo → Kandy',
    text: 'The panoramic luxury seats and smooth ride completely changed how I travel across Sri Lanka.',
    rating: 5,
  },
  {
    name: 'Nethmi Fernando',
    route: 'Galle → Colombo',
    text: 'Booking was seamless and the live tracking feature made the journey feel premium and stress-free.',
    rating: 5,
  },
  {
    name: 'Dilan Jayasekara',
    route: 'Ella → Mirissa',
    text: 'The onboard Wi-Fi, smart climate system, and luxury interior made this feel futuristic.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="section relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mt-4">Trusted by premium travelers</h2>
          <p className="section-subtitle mt-3 mx-auto">
            Real journeys from passengers who experienced refined comfort and intelligent booking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="glass-card p-7 h-full flex flex-col">
              <Quote size={22} className="text-sunset/70" />
              <p className="mt-4 text-[0.98rem] text-[#C7D0E0] leading-relaxed flex-1">
                “{r.text}”
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" className="text-amber-300" />
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-sunset to-sunset-light flex items-center justify-center text-black font-semibold">
                  {r.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-[#8FA0B8]">{r.route}</p>
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