import React from 'react';

const SeatGrid = ({ selectedSeats, onSeatClick }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  // Dummy occupied seats for demo (In production, fetch these from Firebase)
  const occupiedSeats = ['A3', 'B5', 'C1', 'D8'];

  return (
    <div className="flex flex-col items-center">
      {/* Visual Screen */}
      <div className="cinema-screen"></div>
      <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">All eyes this way</p>

      {/* Seat Layout */}
      <div className="grid gap-3">
        {rows.map((row) => (
          <div key={row} className="flex gap-3 items-center">
            <span className="text-gray-600 text-xs w-4">{row}</span>
            {cols.map((col) => {
              const seatId = `${row}${col}`;
              const isSelected = selectedSeats.includes(seatId);
              const isOccupied = occupiedSeats.includes(seatId);

              return (
                <div
                  key={seatId}
                  onClick={() => !isOccupied && onSeatClick(seatId)}
                  className={`w-8 h-8 rounded-t-lg transition-all duration-300 flex items-center justify-center text-[10px] font-bold
                    ${isOccupied ? 'seat-occupied' : isSelected ? 'seat-selected' : 'seat-available'}
                  `}
                >
                  {col}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-10 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-slate-700"></div> Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[var(--primary)]"></div> Selected
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-slate-900 opacity-40"></div> Occupied
        </div>
      </div>
    </div>
  );
};

export default SeatGrid;