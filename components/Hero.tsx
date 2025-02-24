"use client"

import React from 'react';

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-[800px]">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" 
             style={{ backgroundImage: "url('/hero.png')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative flex items-center h-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Connecting Benue`s Global Family, Empowering Local Growth
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Join our network of diaspora members making a difference through investments, 
              knowledge sharing, and cultural preservation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-green-700 rounded-lg text-white font-medium hover:bg-green-800 transition">
                Register Now
              </button>
              <button className="px-8 py-3 bg-white rounded-lg text-green-700 font-medium hover:bg-gray-100 transition">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
