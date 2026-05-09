export default function LiveTracking() {
  return (
    <section className="tracking-section section" id="live-tracking">
      <div className="section-title">
        <span className="dot" />
        Live Tracking
      </div>

      <div className="tracking-map">
        {/* Grid overlay */}
        <div className="map-grid" />

        {/* Travel path */}
        <div className="map-path" />

        {/* Animated bus on path */}
        <div className="map-bus-icon">🚌</div>

        {/* Start marker */}
        <div className="map-marker start">
          <div className="marker-pin" />
          <span className="marker-label">Colombo</span>
        </div>

        {/* End marker */}
        <div className="map-marker end">
          <div className="marker-pin" />
          <span className="marker-label">Kandy</span>
        </div>

        {/* ETA overlay */}
        <div className="map-eta">
          ETA: <span>2h 14m</span>
        </div>

        {/* Ambient decorations */}
        <svg style={{ position: 'absolute', bottom: 20, left: 20, opacity: 0.15 }} width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="var(--accent-primary)" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="30" cy="30" r="18" stroke="var(--luxury)" strokeWidth="0.5" strokeDasharray="2 3" />
        </svg>

        <svg style={{ position: 'absolute', top: 16, left: 16, opacity: 0.12 }} width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 2 L22 14 L34 14 L24 22 L28 34 L20 26 L12 34 L16 22 L6 14 L18 14Z" fill="var(--accent-primary)" />
        </svg>
      </div>
    </section>
  )
}
