const reviews = [
  {
    name: 'Amara S.',
    route: 'Colombo → Kandy',
    text: 'Absolutely seamless experience! The luxury coach was spotless and the live tracking gave me total peace of mind.',
    color: '#00D1B2',
    stars: 5,
  },
  {
    name: 'Rajan K.',
    route: 'Galle → Colombo',
    text: 'Best bus booking app I\'ve ever used. The seat selection was incredibly intuitive and the ride was premium quality.',
    color: '#B693FF',
    stars: 5,
  },
  {
    name: 'Nisha F.',
    route: 'Colombo → Jaffna',
    text: 'The real-time tracking is a game changer. I could see exactly where my bus was. Felt like a first-class experience.',
    color: '#FFB36B',
    stars: 5,
  },
  {
    name: 'Dinesh P.',
    route: 'Negombo → Matara',
    text: 'Smart payments made everything effortless. No cash needed, just tap and go. Will definitely use again!',
    color: '#C7F36B',
    stars: 4,
  },
  {
    name: 'Lakshmi V.',
    route: 'Colombo → Kandy',
    text: 'The onboard comfort was incredible. USB charging, A/C, spacious seats — felt like flying business class on wheels.',
    color: '#FF6B8A',
    stars: 5,
  },
  {
    name: 'Suresh M.',
    route: 'Galle → Colombo',
    text: 'The 24/7 support team was incredibly responsive when I needed to change my booking. Outstanding service.',
    color: '#00D1B2',
    stars: 5,
  },
]

export default function Testimonials() {
  // Double the items for infinite scroll illusion
  const items = [...reviews, ...reviews]

  return (
    <section className="testimonial-section section" id="testimonials">
      <div style={{ paddingRight: 20 }}>
        <div className="section-title">
          <span className="dot" />
          Traveler Experiences
        </div>
      </div>

      <div className="testimonial-track">
        {items.map((r, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-header">
              <div
                className="testimonial-avatar"
                style={{ background: r.color }}
              >
                {r.name.charAt(0)}
              </div>
              <div className="testimonial-user">
                <div className="testimonial-name">{r.name}</div>
                <div className="testimonial-route">{r.route}</div>
              </div>
            </div>
            <div className="testimonial-stars">
              {Array.from({ length: r.stars }).map((_, j) => (
                <span className="testimonial-star" key={j}>★</span>
              ))}
              {Array.from({ length: 5 - r.stars }).map((_, j) => (
                <span className="testimonial-star" key={`e${j}`} style={{ opacity: 0.25 }}>★</span>
              ))}
            </div>
            <p className="testimonial-text">&ldquo;{r.text}&rdquo;</p>
          </div>
        ))}
      </div>
    </section>
  )
}
