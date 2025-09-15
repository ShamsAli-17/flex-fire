'use client'

import Image from 'next/image'
import { Play, Star, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero.png"
          alt="FlexFire Gym interior with modern equipment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-red-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Enhanced Content with Fluid Typography */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Social Proof with Animation */}
        <div className="flex items-center justify-center space-x-1 mb-6 animate-fade-in">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
          ))}
          <span className="ml-3 text-xs sm:text-sm text-gray-200 font-medium tracking-wide">
            Rated 4.9/5 by 2000+ athletes
          </span>
        </div>
        
        {/* Gym Branding */}
        <div className="mb-4">
          <span className="inline-block text-red-500 font-bold text-sm sm:text-base tracking-[0.2em] uppercase mb-2">
            FlexFire Gym
          </span>
        </div>
        
        {/* Fluid Typography Hero Heading */}
        <h1 className="font-display font-black leading-[0.85] mb-6 sm:mb-8 tracking-tight">
          <span className="block text-[clamp(2.5rem,8vw,5.5rem)] text-white">
            IGNITE YOUR
          </span>
          <span className="block text-[clamp(3rem,10vw,7rem)] text-red-500 animate-pulse">
            POTENTIAL
          </span>
          <span className="block text-[clamp(2rem,6vw,4rem)] text-gray-200 font-semibold">
            Transform Today
          </span>
        </h1>
        
        {/* Enhanced Description */}
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Join FlexFire Gym and experience <span className="text-red-400 font-semibold">elite training</span>, 
          cutting-edge equipment, and a <span className="text-red-400 font-semibold">community of champions </span> 
          that will push you beyond your limits.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-500/25 w-full sm:w-auto">
            <span className="flex items-center justify-center space-x-2">
              <span>START YOUR TRANSFORMATION</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
          
          <button className="group flex items-center space-x-3 text-white hover:text-red-400 transition-all duration-300 w-full sm:w-auto justify-center">
            <div className="bg-white/10 group-hover:bg-red-600 rounded-full p-4 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
              <Play className="h-6 w-6 ml-1" />
            </div>
            <span className="font-semibold text-base sm:text-lg">Our Success Stories</span>
          </button>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-[clamp(2rem,5vw,3.5rem)] font-black text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              2000+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">
              Active Members
            </div>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-[clamp(2rem,5vw,3.5rem)] font-black text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">
              Elite Trainers
            </div>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 sm:col-span-1 col-span-1">
            <div className="text-[clamp(2rem,5vw,3.5rem)] font-black text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">
              Access Available
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-red-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
}