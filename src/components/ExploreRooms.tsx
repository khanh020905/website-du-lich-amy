import React from 'react';
import { motion } from 'framer-motion';
import { Maximize, Bed, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/pdf_images/img_p4_15.jpeg';
import img2 from '../assets/pdf_images/img_p4_13.jpeg';
import img3 from '../assets/pdf_images/img_p4_14.jpeg';
import img4 from '../assets/pdf_images/img_p5_17.jpeg';

const suitesImg = [
  {
    image: img1,
    price: 1800000,
    bedCount: 1,
    guestCount: 2
  },
  {
    image: img2,
    price: 2200000,
    bedCount: 1,
    guestCount: 2
  },
  {
    image: img3,
    price: 4500000,
    bedCount: 2,
    guestCount: 4
  }
];

const ExploreRooms = () => {
  const { t } = useTranslation();
  
  const exploreItems = t('explore.items', { returnObjects: true }) as Array<{ title: string, size: string }>;

  return (
    <section className="py-24 bg-gray-50 bg-opacity-50" id="suites">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 mb-4"
          >
            {t('explore.label')}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#111] font-semibold"
          >
            {t('explore.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {suitesImg.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`group cursor-pointer ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden mb-6 rounded-2xl">
                <div className={`bg-gray-200 overflow-hidden ${index === 2 ? 'aspect-[16/10] md:aspect-[21/9]' : 'aspect-[16/11]'}`}>
                  <img
                    src={suite.image}
                    alt={exploreItems[index]?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Price Ribbon */}
                <div className="absolute bottom-6 right-6 bg-white px-5 py-3 flex items-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-gray-500 text-xs tracking-wider mr-2 uppercase">{t('explore.from')}</span>
                  <span className="text-[var(--color-gold)] font-serif font-bold text-lg">${suite.price}</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6 pl-2 pr-2 hover:border-[var(--color-gold)] transition-colors duration-500 border-opacity-50">
                <h3 className="text-2xl font-serif font-semibold text-[#111] group-hover:text-[var(--color-gold)] transition-colors">
                  {exploreItems[index]?.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Maximize size={15} className="text-gray-400 stroke-[1.5px]" />
                    <span className="text-xs font-medium">{exploreItems[index]?.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed size={15} className="text-gray-400 stroke-[1.5px]" />
                    <span className="text-xs font-medium">{suite.bedCount} {t('rooms.bed')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={15} className="text-gray-400 stroke-[1.5px]" />
                    <span className="text-xs font-medium">{suite.guestCount} {t('rooms.guests')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreRooms;
