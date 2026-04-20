import React, { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center">Join CineBook</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input 
            type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--primary)] outline-none"
          />
          <input 
            type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--primary)] outline-none"
          />
          <button className="btn-primary w-full py-4 rounded-xl font-bold">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-[var(--primary)]">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;