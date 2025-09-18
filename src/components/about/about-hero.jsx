import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900/20 to-red-800 py-12 lg:py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/5 right-1/5 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-2/5 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

        {/* Centered Hero Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-none font-inter uppercase mt-8">
            ABOUT <span className="text-red-500">US</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Content - About Description */}
          <div className="order-1 lg:order-1">
            <h2 className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-6 font-inter">
              ABOUT US
            </h2>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl text-white mb-6 leading-tight font-inter font-light">
              All the <br />
              <span className="font-black text-red-500">Perks</span>
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-inter">
              Experience the ultimate fitness journey at Flex Fire Gym. 
              Our state-of-the-art facility offers premium equipment, 
              expert trainers, and a motivating environment to help you 
              achieve your fitness goals. Join our community and transform 
              your fitness journey today.
            </p>
          </div>

          {/* Right Content - Perks Grid */}
          <div className="order-2 lg:order-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
              <div className="space-y-6">

                {/* First row - 2 items */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3 p-4 rounded-lg bg-white/5">
                    <h4 className="text-white text-lg font-semibold font-inter">
                      Premium Equipment
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-inter">
                      Top-quality machines and free weights for all fitness levels and training styles.
                    </p>
                  </div>

                  <div className="space-y-3 p-4 rounded-lg bg-white/5">
                    <h4 className="text-white text-lg font-semibold font-inter">
                      Personal Training
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-inter">
                      Expert trainers provide personalized workout plans and one-on-one guidance.
                    </p>
                  </div>
                </div>

                {/* Second row - 2 items */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3 p-4 rounded-lg bg-white/5">
                    <h4 className="text-white text-lg font-semibold font-inter">
                      Group Classes
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-inter">
                      Dynamic group fitness classes including HIIT, yoga, and strength training.
                    </p>
                  </div>

                  <div className="space-y-3 p-4 rounded-lg bg-white/5">
                    <h4 className="text-white text-lg font-semibold font-inter">
                      Member Rewards
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-inter">
                      Exclusive member benefits, discounts, and rewards for consistent attendance.
                    </p>
                  </div>
                </div>

                {/* Third row - 1 item full width */}
                <div className="p-4 rounded-lg bg-white/5 text-center space-y-3">
                  <h4 className="text-white text-lg font-semibold font-inter">
                    Nutrition Support
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-inter">
                    Professional nutrition guidance and healthy meal planning assistance.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;