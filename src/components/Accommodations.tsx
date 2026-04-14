import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

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

interface AccommodationsProps {
  hideHeader?: boolean;
}

const Accommodations: React.FC<AccommodationsProps> = ({ hideHeader = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const { locale } = useParams();

  const accItems = t('accommodations.items', { returnObjects: true }) as Array<any>;
  const currentItem = accItems[activeIndex];
  const currentLang = (locale || 'vi') as 'vi' | 'en' | 'ko' | 'zh';
  const hours = currentItem?.hours || "24/7";

  const btnTextMap = {
    vi: "Xem chi tiết",
    en: "View Details",
    ko: "세부 사항",
    zh: "查看详情"
  };
  const btnText = btnTextMap[currentLang] || btnTextMap.vi;

  return (
    <section className={`pb-12 scroll-mt-20 ${hideHeader ? 'bg-transparent pt-12' : 'bg-white pt-24'}`} id="services">
      {/* Header */}
      {!hideHeader && (
        <div className="text-center mb-10 px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-[#111] mb-4"
          >
            {t('accommodations.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4"
          >
            {t('accommodations.desc')}
          </motion.p>
        </div>
      )}

      <div className="max-w-[1000px] mx-auto px-4 md:px-0">
        {/* Main Feature Container */}
        <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={accommodationsImages[activeIndex].image}
                alt={currentItem?.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Frosted Glass Bar anchored to the bottom edge */}
          <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md px-4 py-3 md:px-10 md:py-6 z-20 border-t border-white/10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-2 md:gap-10 text-center md:text-left"
              >
                <div className="md:flex-[2]">
                  <h3 className="text-xl md:text-3xl font-serif text-[var(--color-gold)] mb-1 md:mb-2 font-medium tracking-wide drop-shadow-md">
                    {currentItem?.title}
                  </h3>
                  <p className="text-gray-100 leading-snug md:leading-relaxed text-xs md:text-sm md:pr-6 font-light drop-shadow-sm line-clamp-2 md:line-clamp-none">
                    {currentItem?.desc}
                  </p>
                </div>
                
                <div className="md:flex-1 flex flex-col items-center md:items-end w-full md:w-auto mt-1 md:mt-0">
                  <p className="text-white/90 text-xs md:text-sm font-medium mb-2 md:mb-4 font-serif flex items-center gap-2 drop-shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] hidden md:block"></span>
                    {hours}
                  </p>
                  <Link to={`/${currentLang}/service/${activeIndex}`} className="w-full md:w-auto">
                    <button className="w-full md:w-auto border border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#111] transition-all duration-300 px-4 py-2 md:px-8 md:py-2.5 text-[10px] md:text-xs uppercase tracking-wider font-bold whitespace-nowrap backdrop-blur-sm rounded-sm">
                      {btnText}
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div 
          className="flex overflow-x-auto gap-3 md:gap-4 mt-4 md:mt-6 pb-4 snap-x scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {accommodationsImages.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative shrink-0 cursor-pointer w-[140px] sm:w-[180px] md:w-[220px] h-[80px] sm:h-[100px] md:h-[120px] overflow-hidden group shadow-sm transition-all duration-300 snap-start rounded-sm ${activeIndex === idx ? 'ring-2 ring-[#D4AF37] ring-offset-2' : ''}`}
            >
              <img 
                src={img.image} 
                alt={`Thumbnail ${idx}`} 
                className={`w-full h-full object-cover transition-transform duration-700 ${activeIndex === idx ? 'scale-110' : 'group-hover:scale-105'}`}
              />
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${activeIndex === idx ? 'opacity-0' : 'opacity-40 group-hover:opacity-20'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
