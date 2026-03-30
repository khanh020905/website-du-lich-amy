import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=3000&auto=format&fit=crop")' }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 w-full mx-auto flex flex-col items-center mt-10">
        <div className="flex flex-col items-center mt-[-10vh] md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="var(--color-gold)" color="var(--color-gold)" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
            ))}
            <span className="text-white text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] ml-1">(5.0)</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 md:gap-4 text-white text-[10px] sm:text-xs md:text-base tracking-[0.15em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] px-4 text-center leading-relaxed"
          >
            <span className="hidden md:block w-2 h-2 shrink-0 rounded-full bg-white opacity-80"></span>
            <span>{t('hero.subtitle')}</span>
            <span className="hidden md:block w-2 h-2 shrink-0 rounded-full bg-white opacity-80"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] text-white font-serif leading-[1.3] md:leading-[1.15] mb-0 md:mb-14 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] whitespace-normal md:whitespace-nowrap px-4 mx-auto max-w-[95%]"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
        </div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-[var(--color-gold)] hover:bg-[#fff] text-[#111] px-10 py-3.5 text-xs tracking-[0.2em] font-bold transition-colors duration-300 uppercase mt-20 md:mt-0"
        >
          {t('hero.cta')}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
