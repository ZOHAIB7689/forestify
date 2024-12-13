'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 via-green-500 to-green-700 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-96 h-96 bg-green-400 opacity-30 rounded-full animate-pulse blur-3xl absolute top-10 left-10"></div>
        <div className="w-72 h-72 bg-green-600 opacity-30 rounded-full animate-pulse blur-3xl absolute bottom-20 right-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 animate-fadeIn">
          "Plant Today, <br /> Protect Tomorrow"
        </h1>
        <p className="text-lg sm:text-2xl mb-8 animate-slideIn">
          Join our mission to grow a greener, healthier planet. Together, we can create a sustainable future.
        </p>
        <a
          href="#donate"
          className="px-8 py-4 bg-lime-500 text-black font-semibold rounded-lg shadow-lg hover:bg-lime-600 transition-transform transform hover:scale-105"
        >
          Donate Now 🌱
        </a>
      </div>
    </section>
  );
};

export default Hero;
