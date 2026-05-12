const ROWS = 12;
const COLS = ['A', 'B', 'C', 'D'];

// Generate all seat labels: 1A, 1B, 1C, 1D ... 12A, 12B, 12C, 12D
const generateAllSeats = () => {
  const seats = [];
  for (let row = 1; row <= ROWS; row++) {
    for (const col of COLS) {
      seats.push(`${row}${col}`);
    }
  }
  return seats;
};

const ALL_SEATS = generateAllSeats();

const SeatLayout = ({ bookedSeats = [], selectedSeats = [], onSeatToggle }) => {
  const getSeatState = (seat) => {
    if (bookedSeats.includes(seat)) return 'booked';
    if (selectedSeats.includes(seat)) return 'selected';
    return 'available';
  };

  const handleClick = (seat) => {
    if (bookedSeats.includes(seat)) return;
    onSeatToggle(seat);
  };

  return (
    <div className="seat-layout-container">
      {/* Bus shell */}
      <div className="bus-shell">
        {/* Driver section */}
        <div className="driver-section">
          <div className="door-indicator">
            <span>DOOR</span>
          </div>
          <div className="driver-label">DRIVER</div>
          <div className="steering-wheel">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5"/>
              <circle cx="18" cy="18" r="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <line x1="18" y1="3" x2="18" y2="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <line x1="18" y1="23" x2="18" y2="33" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <line x1="3" y1="18" x2="13" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <line x1="23" y1="18" x2="33" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* Seat grid */}
        <div className="seat-grid">
          {Array.from({ length: ROWS }, (_, rowIdx) => {
            const rowNum = rowIdx + 1;
            return (
              <div key={rowNum} className="seat-row">
                {/* Left pair: A, B */}
                <button
                  className={`seat seat--${getSeatState(`${rowNum}A`)}`}
                  onClick={() => handleClick(`${rowNum}A`)}
                  disabled={bookedSeats.includes(`${rowNum}A`)}
                  title={`Seat ${rowNum}A`}
                >
                  <span className="seat-label">{rowNum}A</span>
                </button>
                <button
                  className={`seat seat--${getSeatState(`${rowNum}B`)}`}
                  onClick={() => handleClick(`${rowNum}B`)}
                  disabled={bookedSeats.includes(`${rowNum}B`)}
                  title={`Seat ${rowNum}B`}
                >
                  <span className="seat-label">{rowNum}B</span>
                </button>

                {/* Aisle */}
                <div className="seat-aisle">
                  <div className="aisle-line" />
                </div>

                {/* Right pair: C, D */}
                <button
                  className={`seat seat--${getSeatState(`${rowNum}C`)}`}
                  onClick={() => handleClick(`${rowNum}C`)}
                  disabled={bookedSeats.includes(`${rowNum}C`)}
                  title={`Seat ${rowNum}C`}
                >
                  <span className="seat-label">{rowNum}C</span>
                </button>
                <button
                  className={`seat seat--${getSeatState(`${rowNum}D`)}`}
                  onClick={() => handleClick(`${rowNum}D`)}
                  disabled={bookedSeats.includes(`${rowNum}D`)}
                  title={`Seat ${rowNum}D`}
                >
                  <span className="seat-label">{rowNum}D</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Back wall */}
        <div className="bus-back">
          <span className="text-[0.6rem] text-gray-600 uppercase tracking-[0.2em]">Rear</span>
        </div>
      </div>

      {/* Legend */}
      <div className="seat-legend">
        <div className="legend-item">
          <div className="legend-dot legend-dot--available" />
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot legend-dot--selected" />
          <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot legend-dot--booked" />
          <span>Booked</span>
        </div>
      </div>

      {/* Stats */}
      <div className="seat-stats">
        <div className="stat-item">
          <span className="stat-value text-aqua">{ALL_SEATS.length - bookedSeats.length}</span>
          <span className="stat-label">Available</span>
        </div>
        <div className="stat-item">
          <span className="stat-value text-coral">{selectedSeats.length}</span>
          <span className="stat-label">Selected</span>
        </div>
        <div className="stat-item">
          <span className="stat-value text-gray-400">{bookedSeats.length}</span>
          <span className="stat-label">Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
