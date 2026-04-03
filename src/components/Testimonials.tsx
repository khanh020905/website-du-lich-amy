import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Dynamic Platforms Array to add visual diversity
const platforms = [
  {
    name: 'Agoda Reviews',
    renderLogo: () => (
      <div className="mb-10 flex flex-col items-center w-20 h-20 rounded-full bg-gray-100 shadow-inner relative justify-center">
        <span className="text-[40px] text-gray-500 font-bold -mt-3 ml-1 font-sans lowercase">a</span>
        <div className="flex space-x-1 absolute bottom-[18px]">
          <div className="w-[5px] h-[5px] rounded-full bg-[#E53935]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[#FFB300]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[#43A047]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[#8E24AA]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[#1E88E5]"></div>
        </div>
      </div>
    )
  },
  {
    name: 'Booking.com',
    renderLogo: () => (
      <div className="mb-10 flex flex-col items-center w-20 h-20 rounded-full bg-[#003B95] shadow-inner relative justify-center">
        <span className="text-[32px] text-white font-bold font-sans">B.</span>
      </div>
    )
  },
  {
    name: 'TripAdvisor',
    renderLogo: () => (
      <div className="mb-10 flex flex-col items-center w-20 h-20 rounded-full bg-[#34E0A1] shadow-inner relative justify-center">
        <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="9" cy="11" r="2.5" fill="black" />
          <circle cx="15" cy="11" r="2.5" fill="black" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 14.5A3.5 3.5 0 119 7.5a3.5 3.5 0 010 7zm6 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="white" />
        </svg>
      </div>
    )
  },
  {
    name: 'Google Reviews',
    renderLogo: () => (
      <div className="mb-10 flex flex-col items-center w-20 h-20 rounded-full bg-white border-2 border-gray-100 shadow-inner relative justify-center">
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
    )
  }
];

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = t('testimonials.reviews', { returnObjects: true }) as Array<{
    title: string;
    text: string;
    author: string;
  }>;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1200px]">
        {/* Drastically reduced the gap between the two main columns, and aligned to top */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-8 lg:pt-10">
          
          {/* Left Column (Stats) - Reduced right padding */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end text-center lg:text-right border-r-0 lg:border-r border-gray-100 lg:pr-8">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-10">
              {t('testimonials.header.title')}
            </span>
            <h2 className="text-3xl md:text-[40px] font-serif text-[#C4A052] mb-3 font-normal leading-tight">
              {t('testimonials.statsLabel')}
            </h2>
            <div className="text-3xl md:text-[38px] font-serif text-[#C4A052] mb-8 tracking-wide">
              {t('testimonials.statsNum')}
            </div>
            
            <div className="flex justify-center lg:justify-end space-x-2.5">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-[34px] h-[34px] rounded-full flex items-center justify-center shadow-sm ${i < 4 ? 'bg-[#C4A052]' : 'bg-gray-200'}`}
                >
                  <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Review Carousel) - Made it take 60% of width to bring it closer */}
          <div className="w-full lg:w-[60%] flex flex-col items-center text-center relative min-h-[350px] justify-center lg:pl-4">
            
            <div className="w-full relative overflow-hidden flex-grow flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-center"
                >
                  {/* Dynamic Logo based on active index */}
                  {platforms[activeIndex % platforms.length].renderLogo()}
                  
                  {/* Ruled Paper Container */}
                  <div className="w-full relative z-10 mt-6 md:mt-2">
                    
                    {/* Background Quote Mark Shifted to Left */}
                    <div className="absolute top-0 left-0 md:left-4 text-gray-100 font-serif text-[100px] md:text-[140px] leading-none opacity-70 -z-10 select-none">
                      &rdquo;
                    </div>

                    <p 
                      className="text-[#A58E62] font-serif text-[18px] md:text-[20px] text-center px-6 md:px-16"
                      style={{
                        lineHeight: '44px',
                        backgroundImage: 'linear-gradient(transparent 43px, #f3f4f6 43px)',
                        backgroundSize: '100% 44px',
                        borderTop: '1px solid #f3f4f6',
                        borderBottom: '1px solid #f3f4f6',
                        // Small vertical padding to help center the text visually within the 44px row
                        paddingTop: '8px',
                        paddingBottom: '10px',
                      }}
                    >
                      {reviews[activeIndex]?.text}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2.5 my-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4A052]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4A052]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4A052]"></div>
                  </div>

                  <h4 className="text-[22px] font-serif text-[#C4A052] mb-1.5 font-normal tracking-wide">
                    {reviews[activeIndex]?.author || 'Guest'}
                  </h4>
                  <p className="text-[13px] text-gray-400 font-sans tracking-wide">
                    {platforms[activeIndex % platforms.length].name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-[14px] mt-12 w-full">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 ${activeIndex === idx ? 'w-[10px] h-[10px] bg-[#C4A052] rounded-sm transform rotate-45' : 'w-[10px] h-[10px] bg-gray-200 rounded-full hover:bg-gray-300'}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
