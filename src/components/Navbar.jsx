import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-black text-[var(--primary)] tracking-tighter">
        CINEBOOK<span className="text-white">PRO</span>
      </Link>
      <div className="flex gap-6 items-center font-medium text-sm">
        <Link to="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-[var(--primary)] transition-colors">My Bookings</Link>
            <button onClick={handleLogout} className="btn-primary px-5 py-2 rounded-full text-white font-bold">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn-primary px-5 py-2 rounded-full text-white font-bold">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;