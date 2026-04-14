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
  { image: img5 }, // 4: Gym Mock
  { image: img6 }, // 5: Pool Mock
  { image: img7 }, // 6: Conference Mock
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
                flex: isActive ? (window.innerWidth >= 768 ? 6 : 6) : 1,
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
              
              {/* Overlay Gradient: Stronger on bottom to ensure mobile readability */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100' : 'bg-black/60 opacity-80 hover:opacity-60'}`} />

              {/* Title Text (Vertical when inactive on desktop) */}
              <AnimatePresence mode="wait">
                {!isActive && (
                  <motion.div
                    key={`inactive-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hidden md:flex absolute inset-0 items-end pb-10 pointer-events-none"
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
                    className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:px-8 md:py-6 md:bg-black/30 md:backdrop-blur-[12px] md:border-t md:border-white/10 gap-3 md:gap-8 z-20"
                  >
                    <div className="flex-1 md:pr-12 w-full">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[var(--color-gold)] font-medium tracking-wide drop-shadow-md mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-100 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-2 font-light drop-shadow-sm">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end w-full md:w-auto shrink-0 mt-1 md:mt-0">
                      <span className="hidden md:flex text-gray-200 font-serif text-sm items-center gap-2 drop-shadow-sm mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>
                        {item.hours || '24/7'}
                      </span>
                      <Link to={`/${currentLang}/service/${index}`}>
                        <button className="px-6 py-2.5 md:px-8 md:py-2.5 bg-transparent hover:bg-white/10 text-white transition-all duration-300 border border-white/40 hover:border-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">
                          {btnText}
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
