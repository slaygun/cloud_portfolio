import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Hero Image */}
      <img
        src="/hero.png"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="absolute text-white text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Your Hero Title</h1>
        <p className="text-lg md:text-xl lg:text-2xl">Your Hero Subtitle or Description</p>
      </div>
    </div>
  );
};

export default Hero;
