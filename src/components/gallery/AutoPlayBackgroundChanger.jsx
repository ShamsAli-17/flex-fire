// components/gallery/AutoPlayBackgroundChanger.jsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AutoPlayBackgroundChanger = ({ images, autoPlayInterval = 5000, className = "" }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isAutoPlay]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setIsAutoPlay(false);
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background Images with Sharp Quality */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            quality={100}                    // Highest quality
            priority={index === 0}          // Preload first image
            unoptimized={false}             // Keep optimization ON
            sizes="100vw"                   // Full viewport width
            style={{ objectFit: 'cover' }}  // Ensure proper covering
          />
        </div>
      ))}

      {/* Remove or reduce gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Content and Controls */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg">
          {images[currentImage].title}
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-center px-4 drop-shadow-md">
          {images[currentImage].description}
        </p>
        
        {/* High-quality Thumbnail Grid */}
        <div className="flex gap-3 mb-6 flex-wrap justify-center px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                currentImage === index 
                  ? 'ring-4 ring-white scale-110' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={100}                     // High quality for thumbnails
                sizes="(max-width: 768px) 64px, 80px"
                priority={index < 3}             // Preload first 3 thumbnails
              />
            </button>
          ))}
        </div>

        {/* Auto-play Control */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full text-sm transition-all duration-300 backdrop-blur-sm"
        >
          {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default AutoPlayBackgroundChanger;
