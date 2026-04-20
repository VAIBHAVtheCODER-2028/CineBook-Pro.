import React, { useEffect, useState } from "react";
import { getUserBookings, deleteBooking } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // CRUD: Read
    const fetchBookings = async () => {
      const data = await getUserBookings(user.uid);
      setBookings(data);
    };
    fetchBookings();
  }, [user.uid]);

  const handleCancel = async (bookingId) => {
    // CRUD: Delete
    if (window.confirm("Cancel this booking?")) {
      await deleteBooking(bookingId);
      setBookings(bookings.filter(b => b.id !== bookingId));
    }
  };

  return (
    <div className="p-8 mt-16 bg-[#0f172a] min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-6">Your Bookings</h2>
      <div className="grid gap-4">
        {bookings.map((b) => (
          <div key={b.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{b.movieTitle}</h3>
              <p className="text-gray-400">Seats: {b.seats.join(", ")}</p>
              <p className="text-[#e50914] font-bold">Total: ₹{b.total}</p>
            </div>
            <button 
              onClick={() => handleCancel(b.id)}
              className="text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              Cancel Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;