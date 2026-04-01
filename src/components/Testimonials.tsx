import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/pdf_images/img_p5_18.jpeg'; // Wide
import img2 from '../assets/pdf_images/img_p6_23.jpeg'; // Square
import img3 from '../assets/pdf_images/img_p4_13.jpeg'; // Square
import img4 from '../assets/pdf_images/img_p6_24.jpeg'; // Wide

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = t('testimonials.reviews', { returnObjects: true }) as Array<{
    title: string;
    text: string;
    author: string;
  }>;

  const statsText = t('testimonials.statsText');
  const statsNum = t('testimonials.statsNum');
  const statsLabel = t('testimonials.statsLabel');
  
  const header = t('testimonials.header', { returnObjects: true }) as {
    title: string;
    subtitle: string;
  };

  return (
    <section className="py-24 bg-[#fafafa]" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-[#111] mb-4 font-semibold"
          >
            {header.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 font-sans tracking-wide text-sm md:text-base uppercase"
          >
            {header.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[340px]">
          
          {/* Row 1 - Col 1: Solid Dark Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 bg-[#111] rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-gold)]"></div>
            <div>
              <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest">{t('testimonials.label')}</span>
              <h3 className="text-white text-3xl font-serif mt-6 mb-4">{reviews?.[0]?.title}</h3>
              <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                "{reviews?.[0]?.text}"
              </p>
            </div>
            <p className="text-white font-semibold text-sm mt-6">— {reviews?.[0]?.author}</p>
          </motion.div>

          {/* Row 1 - Col 2 & 3: Wide Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img src={img1} alt="Luxury stay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
              <p className="text-white font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-4">
                "{reviews?.[1]?.text}"
              </p>
              <p className="text-[var(--color-gold)] font-medium text-sm md:text-base">— {reviews?.[1]?.author}</p>
            </div>
          </motion.div>

          {/* Row 2 - Col 1: Square Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg group"
          >
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img src={img2} alt="Guest" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
              <p className="text-white font-serif text-lg md:text-xl font-medium leading-snug mb-3">
                "{reviews?.[2]?.text}"
              </p>
              <p className="text-gray-300 font-medium text-sm">— {reviews?.[2]?.author}</p>
            </div>
          </motion.div>

          {/* Row 2 - Col 2: Solid Dark Gray Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 bg-[#222] rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t('testimonials.label')}</span>
              <p className="text-white font-serif text-xl md:text-2xl leading-snug mt-6 mb-4">
                {reviews?.[3]?.title}
              </p>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                "{reviews?.[3]?.text}"
              </p>
            </div>
            <p className="text-[var(--color-gold)] font-semibold text-sm mt-6">— {reviews?.[3]?.author}</p>
          </motion.div>

          {/* Row 2 - Col 3: Square Image Block */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img src={img3} alt="Enjoying view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
              <p className="text-white font-serif text-lg md:text-xl font-medium leading-snug mb-3">
                "{reviews?.[4]?.text}"
              </p>
              <p className="text-gray-300 font-medium text-sm">— {reviews?.[4]?.author}</p>
            </div>
          </motion.div>

          {/* Row 3 - Col 1 & 2: Wide Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img src={img4} alt="Luxury experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
              <p className="text-white font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-snug mb-4">
                "{reviews?.[5]?.text}"
              </p>
              <p className="text-[var(--color-gold)] font-medium text-sm md:text-base">— {reviews?.[5]?.author}</p>
            </div>
          </motion.div>

          {/* Row 3 - Col 3: Solid Gold Stats Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-1 bg-[var(--color-gold)] rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-lg relative overflow-hidden"
          >
            {/* Decorative subtle pattern or gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <span className="text-[#111] opacity-70 text-xs font-bold uppercase tracking-widest">{statsLabel}</span>
              <h3 className="text-[#111] text-6xl md:text-7xl font-sans font-semibold mt-4 mb-2 tracking-tighter">
                {statsNum}
              </h3>
              <p className="text-[#111] font-serif text-xl md:text-2xl leading-snug">
                {statsText}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
