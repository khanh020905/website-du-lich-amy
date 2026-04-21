import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import img1 from '../assets/reception.jpg';
import img2 from '../assets/restaurent.jpg';
import img3 from '../assets/spa.jpg';
import img4 from '../assets/bartender-bar.jpg';
import img5 from '../assets/gym_mock.png';
import img6 from '../assets/pool.jpg';
import img7 from '../assets/conference_mock.png';
import img8 from '../assets/coffee_lounge.jpg';

const accommodationsImages = [
  { image: img1 }, // 0: Reception
  { image: img2 }, // 1: Restaurant
  { image: img3 }, // 2: Spa
  { image: img4 }, // 3: Skybar
  { image: img5 }, // 4: Gym
  { image: img6 }, // 5: Pool
  { image: img7 }, // 6: Conference
  { image: img8 }  // 7: Coffee Lounge
];

const ServicesOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const { locale } = useParams();

  const currentLang = (locale || 'vi') as 'vi' | 'en' | 'ko' | 'zh';
  const accItems = t('accommodations.items', { returnObjects: true }) as Array<any>;

  const btnTextMap = {
    vi: "XEM CHI TIẾT",
    en: "VIEW DETAILS",
    ko: "상세 보기",
    zh: "查看详情"
  };
  const btnText = btnTextMap[currentLang] || btnTextMap.vi;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-10 md:py-24">
      
      {/* MOBILE DESIGN: Stacked Image Cards (Clean & Modern) */}
      <div className="lg:hidden flex flex-col gap-12">
        {accItems.map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            key={idx} 
            className="flex flex-col gap-5 group"
          >
            <Link to={`/${currentLang}/service/${idx}`} className="block w-full aspect-[4/3] relative overflow-hidden rounded-sm">
              <img 
                src={accommodationsImages[idx].image} 
                alt={item.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </Link>
            <div>
              <h3 className="text-2xl text-white font-serif tracking-wide">{item.title}</h3>
              <p className="text-sm font-sans mt-3 text-gray-400 line-clamp-3 leading-relaxed font-light">{item.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">{item.hours || '24/7'}</span>
                <Link to={`/${currentLang}/service/${idx}`} className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase flex items-center gap-1 hover:text-white transition-colors">
                  {btnText} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP DESIGN: Elegant Sidebar + Grand Viewport */}
      <div className="hidden lg:flex w-full min-h-[650px] h-[75vh] gap-12 xl:gap-20 items-stretch">
        
        {/* LEFT COLUMN: Vertical Navigation Menu */}
        <div className="w-[35%] flex flex-col justify-center gap-2 pr-6 border-r border-[#333]">
          {accItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`py-5 relative flex items-center gap-6 cursor-pointer transition-all duration-500 group ${isActive ? 'pl-8' : 'pl-0 hover:pl-3'}`}
              >
                {/* Gold Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="serviceActiveLine"
                    className="absolute left-0 w-1.5 h-[60%] bg-[#D4AF37] rounded-r-sm"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                
                <span className={`font-serif text-sm tracking-widest transition-colors duration-500 ${isActive ? 'text-[#D4AF37]' : 'text-gray-600 group-hover:text-gray-400'}`}>
                  0{idx + 1}.
                </span>
                
                <h3 className={`text-xl xl:text-2xl font-serif tracking-wider transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Grand Image Display */}
        <div className="w-[65%] h-full relative overflow-hidden rounded-sm bg-[#111]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(5px)' }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={accommodationsImages[activeIndex].image} 
                alt={accItems[activeIndex].title}
                className="w-full h-full object-cover"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Content Box over the image */}
          <div className="absolute bottom-0 left-0 w-full p-10 xl:p-14 z-10 flex flex-col items-start pb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex gap-4 items-center mb-4">
                  <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase rounded-sm border border-[#D4AF37]/40 backdrop-blur-sm">
                    {accItems[activeIndex].hours || '24/7'}
                  </span>
                </div>
                
                <h2 className="text-4xl xl:text-5xl text-white font-serif mb-5 drop-shadow-xl text-shadow-sm">
                  {accItems[activeIndex].title}
                </h2>
                
                <p className="text-gray-200 text-sm xl:text-base leading-relaxed max-w-2xl mb-8 line-clamp-3 font-light drop-shadow-md">
                  {accItems[activeIndex].desc}
                </p>
                
                <Link to={`/${currentLang}/service/${activeIndex}`}>
                  <button className="flex items-center gap-3 px-8 py-3.5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 rounded-sm group">
                    {btnText} 
                    <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesOverview;
