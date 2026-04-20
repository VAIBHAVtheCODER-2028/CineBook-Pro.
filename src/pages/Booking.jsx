import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooking } from '../hooks/useBooking';
import { useAuth } from '../context/AuthContext';
import { createBooking } from '../services/firebase';
import SeatGrid from '../components/SeatGrid';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { selectedSeats, toggleSeat, totalPrice } = useBooking(250); // ₹250 per seat

  const handleBooking = async () => {
    if (selectedSeats.length === 0) return alert("Please select at least one seat.");
    
    try {
      // CRUD: Create operation
      await createBooking(user.uid, { title: `Movie ${id}`, id }, selectedSeats, totalPrice);
      alert("Tickets Booked Successfully!");
      navigate('/dashboard');
    } catch (error) {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">Select Seats</h2>
      
      <div className="glass-panel p-8 rounded-3xl mb-8">
        <SeatGrid selectedSeats={selectedSeats} onSeatClick={toggleSeat} />
      </div>

      <div className="glass-panel p-6 rounded-2xl flex justify-between items-center border-t border-white/10">
        <div>
          <p className="text-gray-400 text-sm">Selected: {selectedSeats.length}</p>
          <p className="text-2xl font-bold text-[var(--primary)]">₹{totalPrice}</p>
        </div>
        <button 
          onClick={handleBooking}
          className="btn-primary px-10 py-3 rounded-xl font-bold uppercase tracking-wider"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;