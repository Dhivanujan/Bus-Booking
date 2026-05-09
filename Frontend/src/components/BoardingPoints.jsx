const points = [
  { name: 'Colombo Fort Station', distance: '1.2 km', eta: '4 min', icon: '📍' },
  { name: 'Pettah Bus Terminal', distance: '2.8 km', eta: '8 min', icon: '🚏' },
  { name: 'Bambalapitiya Junction', distance: '3.5 km', eta: '11 min', icon: '📍' },
  { name: 'Maradana Central Hub', distance: '4.1 km', eta: '14 min', icon: '🚏' },
]

export default function BoardingPoints() {
  return (
    <section className="boarding-section section" id="boarding-points">
      <div className="section-title">
        <span className="dot" />
        Nearby Boarding Points
      </div>

      <div className="boarding-list">
        {points.map((p, i) => (
          <div
            className="boarding-card"
            key={i}
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="boarding-icon">{p.icon}</div>
            <div className="boarding-info">
              <div className="boarding-name">{p.name}</div>
              <div className="boarding-detail">
                <span>{p.distance} away</span>
                <span className="divider" />
                <span>Next bus: {p.eta}</span>
              </div>
            </div>
            <div className="boarding-eta">{p.eta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
