import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import ctaImg from '../assets/pdf_images/img_p6_24.jpeg';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 lg:py-24 overflow-hidden" id="contact">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt="Luxury Resort pool"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex justify-end">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          {/* Tag */}
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4">
            {t('cta.label')}
          </div>
          
          {/* Main Title */}
          <h2 
            className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-8"
            dangerouslySetInnerHTML={{ __html: t('cta.title') }}
          />
          
          {/* Description */}
          <p className="text-sm text-gray-300 mb-10 leading-loose tracking-wide font-light max-w-md">
            {t('cta.desc')}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-white px-10 py-4 text-xs tracking-widest font-medium transition-colors duration-300 shadow-md uppercase">
              {t('cta.startNow')}
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 text-white px-10 py-4 text-xs tracking-widest font-medium transition-colors duration-300 uppercase">
              {t('cta.learnMore')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
