import {
  Armchair,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

const ROWS = 12;
const COLS = ['A', 'B', 'C', 'D'];

// Generate all seats
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

const SeatLayout = ({
  bookedSeats = [],
  selectedSeats = [],
  onSeatToggle,
}) => {
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
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      
      {/* Glow */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Luxury Seat Selection
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
              Choose Your Premium Seat
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-slate-400">
              Select panoramic window seats, VIP recliners, or premium cabin
              spaces with realtime availability.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              [
                ALL_SEATS.length - bookedSeats.length,
                'Available',
                'text-cyan-300',
              ],
              [selectedSeats.length, 'Selected', 'text-fuchsia-300'],
              [bookedSeats.length, 'Booked', 'text-slate-300'],
            ].map(([value, label, color]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-center min-w-[90px]"
              >
                <h4 className={`text-2xl font-bold ${color}`}>
                  {value}
                </h4>

                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bus Layout */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-white/10
              bg-gradient-to-b from-[#0c1627] to-[#09111d]
              p-5 sm:p-7
              shadow-inner shadow-black/30
            "
          >
            {/* Reflection */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

            {/* FRONT AREA */}
            <div className="relative flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5">
              
              {/* LEFT — Door */}
              <div className="flex flex-col items-center">
                <div
                  className="
                    relative h-20 w-12 overflow-hidden
                    rounded-2xl border border-cyan-400/20
                    bg-gradient-to-b from-cyan-400/10 to-cyan-500/5
                  "
                >
                  {/* Door Glass */}
                  <div className="absolute inset-x-2 top-2 h-8 rounded-lg bg-white/10" />

                  {/* Divider */}
                  <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-white/10" />

                  {/* Handle */}
                  <div className="absolute right-1 top-10 h-3 w-[2px] rounded-full bg-cyan-300/60" />
                </div>

                <span className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Door
                </span>
              </div>

              {/* Center */}
              <div className="flex-1 flex justify-center">
                <div className="h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              {/* RIGHT — Steering */}
              <div className="flex flex-col items-center">
                <div
                  className="
                    flex h-20 w-20 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/[0.05]
                    shadow-inner shadow-black/20
                  "
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="2.5"
                    />

                    <circle
                      cx="18"
                      cy="18"
                      r="5"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                    />

                    <line
                      x1="18"
                      y1="3"
                      x2="18"
                      y2="13"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                    />

                    <line
                      x1="3"
                      y1="18"
                      x2="13"
                      y2="18"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                    />

                    <line
                      x1="23"
                      y1="18"
                      x2="33"
                      y2="18"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <span className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Driver
                </span>
              </div>
            </div>

            {/* Seats */}
            <div className="relative mt-8 space-y-3">
              {Array.from({ length: ROWS }, (_, rowIdx) => {
                const rowNum = rowIdx + 1;

                return (
                  <div
                    key={rowNum}
                    className="flex items-center justify-center gap-3"
                  >
                    {/* LEFT */}
                    <div className="flex gap-2">
                      {['A', 'B'].map((col) => {
                        const seat = `${rowNum}${col}`;
                        const state = getSeatState(seat);

                        return (
                          <SeatButton
                            key={seat}
                            seat={seat}
                            state={state}
                            onClick={() => handleClick(seat)}
                          />
                        );
                      })}
                    </div>

                    {/* AISLE */}
                    <div className="flex flex-col items-center justify-center px-2">
                      <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                      <span className="mt-1 text-[10px] text-slate-600">
                        {rowNum}
                      </span>
                    </div>

                    {/* RIGHT */}
                    <div className="flex gap-2">
                      {['C', 'D'].map((col) => {
                        const seat = `${rowNum}${col}`;
                        const state = getSeatState(seat);

                        return (
                          <SeatButton
                            key={seat}
                            seat={seat}
                            state={state}
                            onClick={() => handleClick(seat)}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rear */}
            <div className="mt-8 flex items-center justify-center">
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Rear Exit
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          {[
            ['Available', 'bg-cyan-400'],
            ['Selected', 'bg-fuchsia-400'],
            ['Booked', 'bg-slate-500'],
          ].map(([label, color]) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
            >
              <div className={`h-3 w-3 rounded-full ${color}`} />

              <span className="text-sm text-slate-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SeatButton = ({ seat, state, onClick }) => {
  const styles = {
    available:
      'border-white/10 bg-white/[0.05] text-slate-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200',
    selected:
      'border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200 shadow-lg shadow-fuchsia-500/20',
    booked:
      'border-slate-700 bg-slate-800/80 text-slate-500 cursor-not-allowed opacity-60',
  };

  return (
    <button
      onClick={onClick}
      disabled={state === 'booked'}
      title={`Seat ${seat}`}
      className={`
        group relative flex h-14 w-14 flex-col items-center justify-center
        rounded-2xl border backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        ${styles[state]}
      `}
    >
      {/* Seat Top */}
      <div className="absolute inset-x-2 top-1 h-2 rounded-full bg-white/10" />

      <Armchair size={16} className="mb-1 opacity-80" />

      <span className="text-[11px] font-semibold tracking-wide">
        {seat}
      </span>

      {state === 'selected' && (
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-500/50" />
      )}
    </button>
  );
};

export default SeatLayout;