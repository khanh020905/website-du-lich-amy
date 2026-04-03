import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize, Bed, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/pdf_images/img_p2_5.jpeg';
import img2 from '../assets/pdf_images/img_p6_21.jpeg';
import img3 from '../assets/pdf_images/img_p6_20.jpeg';
import img4 from '../assets/pdf_images/img_p6_22.jpeg';
import img5 from '../assets/pdf_images/img_p5_18.jpeg';

const accommodationsImages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 }
];

const Accommodations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const accItems = t('accommodations.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string }>;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % accommodationsImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + accommodationsImages.length) % accommodationsImages.length);
  };

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    const len = accommodationsImages.length;
    if (offset < -Math.floor(len / 2)) {
      offset += len;
    } else if (offset > Math.floor(len / 2)) {
      offset -= len;
    }
    return offset;
  };

  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden">
      <div className="text-center mb-16 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4"
        >
          {t('accommodations.label')}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-[#111] font-semibold"
        >
          {t('accommodations.title')}
        </motion.h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1920px] mx-auto flex justify-center items-center h-[500px]">
        {accommodationsImages.map((room, i) => {
          const offset = getOffset(i);
          const isCenter = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;

          return (
            <motion.div
              key={i}
              className="absolute w-[85%] md:w-[60%] lg:w-[50%] h-[350px] md:h-[450px] shadow-2xl rounded-xl overflow-hidden cursor-pointer"
              animate={{
                x: isCenter ? "0%" : isLeft ? "-60%" : isRight ? "60%" : offset < 0 ? "-100%" : "100%",
                scale: isCenter ? 1 : 0.85,
                opacity: isCenter ? 1 : isLeft || isRight ? 0.4 : 0,
                zIndex: isCenter ? 20 : isLeft || isRight ? 10 : 0,
                filter: isCenter ? 'grayscale(0%) blur(0px)' : 'grayscale(100%) blur(2px)'
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => {
                if (isLeft) prevSlide();
                if (isRight) nextSlide();
              }}
              style={{ pointerEvents: Math.abs(offset) > 1 ? "none" : "auto" }}
            >
              <img 
                src={room.image} 
                alt={accItems[i]?.title} 
                className="w-full h-full object-cover"
              />
              {/* Overlay Content */}
              <motion.div 
                animate={{ opacity: isCenter ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end items-center pb-12 pointer-events-none"
              >
                <h3 className="text-white font-serif text-3xl mb-4 font-semibold text-center">{accItems[i]?.title}</h3>
                <p className="text-gray-200 text-center font-medium max-w-md px-6 leading-relaxed">
                  {accItems[i]?.desc}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-8 gap-3">
        {accommodationsImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentIndex === idx ? 'w-10 bg-[var(--color-gold)]' : 'w-6 bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-12 max-w-2xl mx-auto px-6">
        <p className="text-sm font-medium text-gray-600 mb-8 leading-loose tracking-wide">
          {t('accommodations.desc')}
        </p>
        <button className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-white px-10 py-4 text-xs tracking-widest font-medium transition-colors duration-300 shadow-md uppercase">
          {t('accommodations.cta')}
        </button>
      </div>
    </section>
  );
};

export default Accommodations;
