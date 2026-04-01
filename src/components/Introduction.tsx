import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence
} from "framer-motion";
import { Sun, ArrowRightCircle, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

import poolImg from '../assets/pdf_images/img_p6_20.jpeg';
import restaurantImg from '../assets/pdf_images/img_p2_5.jpeg';
import gymImg from '../assets/pdf_images/img_p6_21.jpeg';
import spaImg from '../assets/pdf_images/img_p6_22.jpeg';

const amenitiesImgs = [poolImg, restaurantImg, gymImg, spaImg];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const Introduction = () => {
  const { t } = useTranslation();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const amenities = t('intro.amenities', { returnObjects: true }) as Array<{ name: string }>;
  
  const stats = t('intro.stats', { returnObjects: true }) as Array<{
    value: number;
    suffix: string;
    sign: string;
    icon?: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* About Us Top Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24">
          <div className="md:w-[20%]">
            <div className="flex items-center gap-2 text-sm md:text-base uppercase tracking-widest font-bold text-gray-800">
              <Sun size={16} className="text-gray-600 fill-current" />
              <span>{t('intro.aboutUs')}</span>
            </div>
          </div>

          <div className="md:w-[80%] max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-[28px] md:leading-[1.4] text-gray-400 font-sans tracking-tight inline mr-2"
            >
              {t('intro.highlight')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-[28px] md:leading-[1.4] text-[#111] font-sans tracking-tight inline"
            >
              {t('intro.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#111] border-b-2 border-[#111] pb-1 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
              >
                {t('intro.knowMore')}
                <ArrowRightCircle size={16} className="bg-white rounded-full" />
              </a>
            </motion.div>

            {/* Interactive Amenities Hover */}
            <div className="mt-16 border-t border-gray-200 overflow-hidden md:overflow-visible">
              {amenities && amenities.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col justify-center w-full border-b border-gray-200 py-6 md:py-8 cursor-pointer transition-all duration-300 ${hoverIndex === index ? 'z-50' : 'z-10'}`}
                  onMouseEnter={() => window.innerWidth >= 768 && setHoverIndex(index)}
                  onMouseLeave={() => window.innerWidth >= 768 && setHoverIndex(null)}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setHoverIndex(hoverIndex === index ? null : index);
                    }
                  }}
                >
                  <div className="flex justify-between items-center w-full relative z-10">
                    <h4 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 relative ${hoverIndex === index ? 'text-[var(--color-gold)]' : 'text-gray-300'}`}>
                      {item.name}
                    </h4>
                    <span className={`transition-colors duration-500 relative hidden md:block ${hoverIndex === index ? 'text-[var(--color-gold)]' : 'text-gray-300'}`}>
                      <ArrowRightCircle size={32} strokeWidth={1} />
                    </span>
                  </div>
                  
                  {/* Desktop Hover Image */}
                  <AnimatePresence>
                    {hoverIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5, x: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5, x: -20 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute right-[10%] top-1/2 -translate-y-1/2 z-30 pointer-events-none origin-center hidden md:block"
                      >
                        <img 
                          src={amenitiesImgs[index]} 
                          alt={item.name} 
                          className="w-72 h-48 object-cover shadow-2xl rounded-lg"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile Accordion Image */}
                  <AnimatePresence>
                    {hoverIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="w-full md:hidden overflow-hidden origin-top"
                      >
                        <img 
                          src={amenitiesImgs[index]} 
                          alt={item.name} 
                          className="w-full h-48 sm:h-64 object-cover shadow-lg rounded-lg"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* By The Number */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm md:text-base uppercase tracking-widest font-bold text-gray-800">
            <Sun size={16} className="text-gray-600 fill-current" />
            <span>{t('intro.byTheNumber')}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats && stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + (i * 0.2) }}
              className="bg-[#f9f9f9] rounded-2xl p-10 flex flex-col justify-start h-full min-h-[320px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="text-7xl md:text-[5.5rem] font-sans text-[#222] font-semibold mb-12 flex items-center tracking-tighter leading-none">
                <AnimatedNumber value={stat.value} />{stat.suffix}
                {stat.icon === 'star' && (
                  <Star size={48} strokeWidth={1} className="ml-3 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                )}
                <span className="text-4xl text-[var(--color-gold)] font-sans ml-2 font-medium self-start mt-3">
                  {stat.sign}
                </span>
              </div>
              <div>
                <h5 className="text-xl md:text-2xl font-serif text-[#111] mb-3 font-semibold">
                  {stat.title}
                </h5>
                <p className="text-[13px] md:text-sm text-gray-500 font-medium leading-[1.7]">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
