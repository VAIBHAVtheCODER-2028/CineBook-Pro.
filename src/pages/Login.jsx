import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="glass-panel p-10 rounded-3xl w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[var(--primary)] outline-none transition-all"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[var(--primary)] outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full py-4 rounded-xl font-bold text-lg shadow-lg">
            Sign In
          </button>
        </form>
        <p className="mt-8 text-center text-gray-500">
          New here? <Link to="/signup" className="text-[var(--primary)] font-semibold">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;