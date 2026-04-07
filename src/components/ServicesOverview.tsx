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
import img6 from '../assets/pool_mock.png';
import img7 from '../assets/conference_mock.png';

const accommodationsImages = [
  { image: img1 }, // 0: Reception
  { image: img2 }, // 1: Restaurant
  { image: img3 }, // 2: Spa
  { image: img4 }, // 3: Skybar
  { image: img5 }, // 4: Gym Mock
  { image: img6 }, // 5: Pool Mock
  { image: img7 }  // 6: Conference Mock
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
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-0 py-10 md:py-16">
      <div className="flex flex-col md:flex-row w-full h-[85vh] md:h-[75vh] gap-2 md:gap-1 overflow-hidden">
        {accItems.map((item, index) => {
          const isActive = activeIndex === index;
          
          return (
            <motion.div
              layout
              key={index}
              onClick={() => setActiveIndex(index)}
              onHoverStart={() => {
                // Only trigger hover on desktop
                if (window.innerWidth >= 768) {
                  setActiveIndex(index);
                }
              }}
              initial={false}
              animate={{ 
                flex: isActive ? (window.innerWidth >= 768 ? 6 : 4) : 1,
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className={`relative overflow-hidden cursor-pointer rounded-sm md:rounded-none ${isActive ? 'shadow-2xl z-10' : 'z-0'}`}
            >
              {/* Background Image */}
              <motion.img
                animate={{ scale: isActive ? 1.05 : 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={accommodationsImages[index].image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: isActive ? 'none' : 'grayscale(30%)' }}
              />
              
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100' : 'bg-black/60 opacity-80 hover:opacity-60'}`} />

              {/* Title Text (Vertical when inactive on desktop) */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
                <AnimatePresence mode="wait">
                  {!isActive && (
                    <motion.div
                      key={`inactive-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="hidden md:flex h-full items-end pb-10"
                    >
                      <h3 className="text-white text-sm lg:text-lg font-serif font-medium tracking-widest whitespace-nowrap transform -rotate-90 origin-bottom-left absolute bottom-10 left-6">
                        {item.title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Active Content */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={`active-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col gap-3 md:gap-4 w-full md:w-[70%] max-w-xl"
                    >
                      <h3 className="text-2xl md:text-5xl font-serif text-[var(--color-gold)] font-medium tracking-wide drop-shadow-md">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-2 md:line-clamp-3 font-light drop-shadow-sm">
                        {item.desc}
                      </p>

                      <div className="mt-2 md:mt-4">
                        <Link to={`/${currentLang}/service/${index}`}>
                          <button className="flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-3 bg-white/10 hover:bg-[var(--color-gold)] text-white hover:text-[#111] transition-all duration-300 border border-white/30 hover:border-[var(--color-gold)] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-sm backdrop-blur-md group">
                            {btnText}
                            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Only: Show collapsed title when inactive */}
              <div className={`md:hidden absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <h3 className="text-white text-sm font-serif font-medium tracking-widest text-center">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesOverview;
