import React from 'react';

const OurStory = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-3/4 right-1/5 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-2/5 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-red-500 text-sm sm:text-base font-semibold tracking-widest uppercase mb-6 font-inter">
            OUR STORY
          </h2>
        </div>

        {/* Story Content - Simple Paragraphs */}
        <div className="space-y-8 lg:space-y-12 text-center">

          {/* First Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-inter">
            Flex Fire Gym was born from a simple belief: fitness should be accessible, enjoyable, and transformative for everyone. 
            Our journey began with a vision to create more than just a gym - we wanted to build a community where people could 
            discover their strength, push their limits, and achieve their fitness goals in a supportive environment.
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-inter">
            What started as a passion project has grown into a state-of-the-art fitness facility equipped with premium equipment 
            and staffed by certified trainers who are genuinely invested in your success. We believe that every individual has 
            unique fitness needs, which is why we offer personalized training programs, diverse group classes, and comprehensive 
            wellness support to help you on your fitness journey.
          </p>

          {/* Third Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-inter">
            At Flex Fire Gym, we're not just about building stronger bodies - we're about building stronger communities. 
            Our members become part of a family that motivates, supports, and celebrates each other's achievements. 
            Whether you're taking your first step into fitness or you're a seasoned athlete, we're here to fuel your fire 
            and help you become the best version of yourself.
          </p>

        </div>
      </div>
    </section>
  );
};

export default OurStory;