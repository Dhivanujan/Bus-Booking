const routes = [
  {
    from: 'Colombo',
    to: 'Kandy',
    duration: '3h 20m',
    price: 'LKR 1,200',
    category: 'Luxury A/C',
    seats: 14,
    gradient: 'linear-gradient(135deg, #121A2F, rgba(0,209,178,0.2))',
  },
  {
    from: 'Colombo',
    to: 'Jaffna',
    duration: '6h 45m',
    price: 'LKR 2,800',
    category: 'Premium Sleeper',
    seats: 8,
    gradient: 'linear-gradient(135deg, #1A233D, rgba(182,147,255,0.2))',
  },
  {
    from: 'Galle',
    to: 'Colombo',
    duration: '2h 10m',
    price: 'LKR 850',
    category: 'Semi-Luxury',
    seats: 22,
    gradient: 'linear-gradient(135deg, #0B1020, rgba(255,179,107,0.2))',
  },
  {
    from: 'Negombo',
    to: 'Matara',
    duration: '4h 30m',
    price: 'LKR 1,650',
    category: 'Executive',
    seats: 6,
    gradient: 'linear-gradient(135deg, #121A2F, rgba(199,243,107,0.15))',
  },
]

export default function PopularRoutes() {
  return (
    <section className="routes-section section" id="popular-routes">
      <div style={{ paddingRight: 20 }}>
        <div className="section-title">
          <span className="dot" />
          Popular Routes
        </div>
      </div>

      <div className="routes-scroll">
        {routes.map((r, i) => (
          <div
            className="route-card"
            key={i}
            style={{ background: r.gradient }}
          >
            {/* Route path header */}
            <div className="route-header">
              <div className="route-dot" />
              <div className="route-line">
                <span className="bus-indicator">🚌</span>
              </div>
              <div className="route-dot-end" />
            </div>

            {/* Cities */}
            <div className="route-cities">
              <div>
                <div className="route-city">{r.from}</div>
                <div className="route-label">Departure</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="route-city">{r.to}</div>
                <div className="route-label">Arrival</div>
              </div>
            </div>

            {/* Meta info */}
            <div className="route-meta">
              <div className="route-meta-item">
                <span className="route-meta-value">{r.duration}</span>
                <span className="route-meta-label">Duration</span>
              </div>
              <div className="route-meta-item">
                <span className="route-meta-value" style={{ fontSize: '0.75rem' }}>{r.category}</span>
                <span className="route-meta-label">Category</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="route-price">{r.price}</div>
                <div className="route-seats">
                  <span className="seats-dot" />
                  {r.seats} seats
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
