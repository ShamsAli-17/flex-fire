import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardsData = [
  { title: 'Certified Trainers', desc: 'Our trainers are certified professionals in fitness and nutrition.' },
  { title: 'Community Events', desc: 'Regular events to motivate and connect our gym members.' },
  { title: 'Advanced Equipment', desc: 'State-of-the-art machines and free weights, suitable for all levels.' },
  { title: 'Nutrition Guidance', desc: 'Meal plans, diet support, and expert advice for your goals.' },
  { title: 'Flexible Timings', desc: '24/7 access so you can train when it suits your schedule.' },
  { title: 'Success Stories', desc: 'Read transformation stories from real Flex Fire Gym members.' },
];

const CardShell = ({ children, position }) => {
  // position: 'left' | 'center' | 'right'
  const base = 'absolute top-1/2 -translate-y-1/2 will-change-transform';
  const sizes = 'w-[260px] sm:w-[300px] md:w-[320px]';
  const pos = {
    left: 'left-6 sm:left-10 md:left-14',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-6 sm:right-10 md:right-14'
  }[position];
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      className={`${base} ${sizes} ${pos}`}
    >
      {children}
    </motion.div>
  );
};

const CardFace = ({ active, title, desc }) => (
  <div className={`rounded-xl px-6 py-8 sm:px-8 sm:py-10 text-center shadow-2xl transition-all duration-300 ${active ? 'bg-white text-black scale-105' : 'bg-black text-white/90 scale-95'} }`}>
    <h3 className={`text-2xl font-extrabold mb-3 tracking-wider ${active ? 'text-black' : 'text-white'}`}>{title}</h3>
    <p className={`text-sm sm:text-base ${active ? 'text-black/80' : 'text-gray-300'}`}>{desc}</p>
  </div>
);

export default function WhyChooseUs_Focus() {
  const [center, setCenter] = useState(0);
  const n = cardsData.length;
  const left = (center - 1 + n) % n;
  const right = (center + 1) % n;

  const next = () => setCenter((c) => (c + 1) % n);
  const prev = () => setCenter((c) => (c - 1 + n) % n);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900/30 to-red-800 py-16 lg:py-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/5 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-2/5 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-10">Why Choose Us</h2>

        {/* Stage */}
        <div className="relative mx-auto max-w-5xl h-[310px] sm:h-[360px] md:h-[380px]">
          {/* Arrows */}
          <button onClick={prev} aria-label="Previous" className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 grid place-items-center w-11 h-11 rounded-full bg-black/85 text-white hover:bg-red-600 shadow-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.75 19.75L8.25 12.25L15.75 4.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 grid place-items-center w-11 h-11 rounded-full bg-black/85 text-white hover:bg-red-600 shadow-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.25 4.75L15.75 12.25L8.25 19.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {/* Three cards that morph between left/center/right using layout transitions */}
          <AnimatePresence initial={false}>
            <CardShell position="left" key={`left-${left}`}>
              <CardFace active={false} {...cardsData[left]} />
            </CardShell>

            <CardShell position="center" key={`center-${center}`}>
              <CardFace active={true} {...cardsData[center]} />
            </CardShell>

            <CardShell position="right" key={`right-${right}`}>
              <CardFace active={false} {...cardsData[right]} />
            </CardShell>
          </AnimatePresence>
        </div>

        {/* Mobile scroll list */}
        <div className="mt-10 sm:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2">
            {cardsData.map((c, i) => (
              <div key={c.title} className="snap-center">
                <div className={`w-[280px] rounded-xl px-6 py-8 text-center ${i===center?'bg-white text-black':'bg-black text-white'}`}>
                  <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-white/80">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 text-sm mt-4">Swipe to explore more</p>
        </div>
      </div>
    </section>
  );
}
