// // components/BackgroundImageChanger.jsx
// import { useState } from 'react';
// import Image from 'next/image';

// const BackgroundImageChanger = ({ images, className = "" }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   return (
//     <div className={`relative w-full h-screen overflow-hidden ${className}`}>
//       {/* Main Background Image */}
//       <div className="absolute inset-0 transition-all duration-700 ease-in-out">
//         <Image
//           src={images[currentImage].src}
//           alt={images[currentImage].alt}
//           fill
//           className="object-cover"
//           quality={90}
//           priority
//         />
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Content Overlay */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//         <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
//           {images[currentImage].title}
//         </h2>
//         <p className="text-lg md:text-xl mb-8 max-w-2xl text-center px-4">
//           {images[currentImage].description}
//         </p>

//         {/* Thumbnail Navigation */}
//         <div className="flex flex-wrap gap-4 justify-center px-4 max-w-4xl">
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImage(index)}
//               className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-4 transition-all duration-300 hover:scale-105 ${
//                 currentImage === index 
//                   ? 'border-white shadow-lg' 
//                   : 'border-transparent hover:border-white/50'
//               }`}
//             >
//               <Image
//                 src={image.thumbnail || image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 80px, 96px"
//               />
//               {/* Active indicator */}
//               {currentImage === index && (
//                 <div className="absolute inset-0 bg-white/20"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Navigation Dots (Alternative) */}
//         <div className="flex gap-2 mt-6">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImage(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentImage === index 
//                   ? 'bg-white scale-125' 
//                   : 'bg-white/50 hover:bg-white/75'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Previous/Next Arrows */}
//       <button
//         onClick={() => setCurrentImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
      
//       <button
//         onClick={() => setCurrentImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default BackgroundImageChanger;
