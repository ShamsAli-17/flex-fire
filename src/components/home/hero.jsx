'use client'

import { Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-gray-300">Rated 4.9/5 by 2000+ members</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
          Transform Your
          <span className="text-red-600 block">Body & Mind</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join PowerFit Gym and experience world-class training, cutting-edge equipment, 
          and a community that will push you to achieve your fitness goals.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
          
          <button className="flex items-center space-x-2 text-white hover:text-red-600 transition-colors duration-200">
            <div className="bg-white/20 hover:bg-red-600 rounded-full p-3 transition-all duration-200">
              <Play className="h-6 w-6 ml-1" />
            </div>
            <span className="font-medium">Watch Our Story</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold text-red-600">2000+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">15+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Expert Trainers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Open Access</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
}