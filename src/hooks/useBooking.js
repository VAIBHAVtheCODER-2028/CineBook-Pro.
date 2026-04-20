import { useState, useCallback, useMemo } from 'react';

export const useBooking = (pricePerSeat = 150) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // useCallback prevents unnecessary re-renders of seat components
  const toggleSeat = useCallback((seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  }, []);

  // useMemo ensures price is only recalculated when selection changes
  const totalPrice = useMemo(() => {
    return selectedSeats.length * pricePerSeat;
  }, [selectedSeats, pricePerSeat]);

  const resetBooking = () => setSelectedSeats([]);

  return { selectedSeats, toggleSeat, totalPrice, resetBooking };
};