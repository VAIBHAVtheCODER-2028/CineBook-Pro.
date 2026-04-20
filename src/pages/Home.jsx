import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Using placehold.co for reliable image rendering during the demo
    setMovies([
      { 
        id: "1", 
        title: "Interstellar", 
        genre: "Sci-Fi", 
        image: "https://placehold.co/600x900/020617/e50914?text=Interstellar" 
      },
      { 
        id: "2", 
        title: "The Dark Knight", 
        genre: "Action", 
        image: "https://placehold.co/600x900/020617/e50914?text=The+Dark+Knight" 
      },
      { 
        id: "3", 
        title: "Inception", 
        genre: "Sci-Fi", 
        image: "https://placehold.co/600x900/020617/e50914?text=Inception" 
      }
    ]);
  }, []);

  return (
    <div className="pt-24 px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">Now Showing</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the latest blockbusters with our premium glassmorphic booking experience.
        </p>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            onClick={() => navigate(`/booking/${movie.id}`)}
            className="glass-card rounded-3xl overflow-hidden cursor-pointer group"
          >
            <div className="relative h-[450px] overflow-hidden">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{movie.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{movie.genre}</p>
              <button className="btn-primary w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                Book Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;