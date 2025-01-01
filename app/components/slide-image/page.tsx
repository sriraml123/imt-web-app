"use client"

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample background images - replace with your actual images
  const backgroundImages = [
    'https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?w=1200',
    'https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?w=1200',
    'https://images.pexels.com/photos/4144533/pexels-photo-4144533.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4541996/pexels-photo-4541996.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50" />

      {/* Fixed Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            India's Leading Institute for Software Training and Placements with Real-Time Internships.
          </h1>
          <h2 className="text-2xl mb-8">
            Elevate Your Software Skills with Our Job-Oriented Intensive Training and Internship Program!
          </h2>

          {/* Program Options */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            {['TRAINING', 'INTERNSHIP', 'PLACEMENTS', 'CORPORATE TRAINING'].map((program) => (
              <button
                key={program}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
              >
                {program}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;