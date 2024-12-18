import React from 'react';
import { Wand2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.2] bg-grid-pattern"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
          Turn Your Imagination into Reality!
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Create stunning AI-generated images from your text descriptions instantly
        </p>
        <a
          href="#generate"
          className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-white text-indigo-600 
                   hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                   animate-float"
        >
          <Wand2 className="mr-2 h-5 w-5" />
          Start Generating
        </a>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white/30"
            style={{
              width: Math.random() * 20 + 'px',
              height: Math.random() * 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;