import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#020617]">
      {/* Spinner with your Primary Red */}
      <div className="w-16 h-16 border-4 border-[#e50914] border-t-transparent rounded-full animate-spin mb-4"></div>
      
      <h2 className="text-xl font-bold tracking-widest text-white animate-pulse">
        CINEBOOK<span className="text-[#e50914]">PRO</span>
      </h2>
      <p className="text-gray-500 text-sm mt-2">Setting the stage...</p>
    </div>
  );
};

// CRITICAL: This is what the error is complaining about!
export default Loader;