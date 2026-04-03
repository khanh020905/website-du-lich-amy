import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import img1 from '../assets/reception.jpg';
import img2 from '../assets/restaurent.jpg';
import img3 from '../assets/spa.jpg';
import img4 from '../assets/bartender-bar.jpg';

const accommodationsImages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 }
];

const Accommodations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const { locale } = useParams();

  const accItems = t('accommodations.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string }>;
  
  // Real-world dummy hours mapped for each service sequentially (Lobby, Restaurant, Spa, Skybar)
  const openingHoursMap = [
    { vi: "Thời gian mở cửa: 24/7", en: "Opening Hours: 24/7", ko: "영업 시간: 연중무휴", zh: "营业时间：24/7" },
    { vi: "Thời gian mở cửa: 06:00 đến 22:00", en: "Opening Hours: 06:00 to 22:00", ko: "영업 시간: 06:00 - 22:00", zh: "营业时间：06:00 至 22:00" },
    { vi: "Thời gian mở cửa: 09:00 đến 21:00", en: "Opening Hours: 09:00 to 21:00", ko: "영업 시간: 09:00 - 21:00", zh: "营业时间：09:00 至 21:00" },
    { vi: "Thời gian mở cửa: 16:00 đến 00:00", en: "Opening Hours: 16:00 to 00:00", ko: "영업 시간: 16:00 - 00:00", zh: "营业时间：16:00 至 00:00" },
  ];

  const currentItem = accItems[activeIndex];
  const currentLang = (locale || 'vi') as 'vi' | 'en' | 'ko' | 'zh';
  const hours = openingHoursMap[activeIndex][currentLang] || openingHoursMap[activeIndex].vi;

  const btnTextMap = {
    vi: "Xem chi tiết",
    en: "View Details",
    ko: "세부 사항",
    zh: "查看详情"
  };
  const btnText = btnTextMap[currentLang] || btnTextMap.vi;

  return (
    <section className="pt-24 pb-12 bg-white scroll-mt-20" id="services">
      {/* Header */}
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

          {/* Floating Info Box on the left */}
          <div className="absolute top-[10%] left-0 md:top-1/2 md:-translate-y-1/2 md:left-8 lg:left-12 bg-white p-6 md:p-10 max-w-[90%] md:max-w-[420px] shadow-xl z-20 mx-4 md:mx-0 border-[3px] border-[#D4AF37]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-3 md:mb-5 font-normal tracking-wide">
                  {currentItem?.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm text-justify">
                  {currentItem?.desc}
                </p>
                <p className="text-[#D4AF37] text-sm font-medium mb-6 md:mb-8 font-serif">
                  {hours}
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link to={`/${currentLang}/service/${activeIndex}`}>
                    <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 px-8 py-2 text-xs uppercase tracking-wider font-medium w-full md:w-auto">
                      {btnText}
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mt-2 md:mt-4">
          {accommodationsImages.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative cursor-pointer w-[22%] sm:w-40 md:w-[220px] h-16 sm:h-24 md:h-[110px] overflow-hidden group shadow-sm transition-all duration-300 ${activeIndex === idx ? 'ring-2 ring-[#D4AF37] ring-offset-2' : ''}`}
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
