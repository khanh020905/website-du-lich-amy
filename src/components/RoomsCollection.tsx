import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Maximize, Bed, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import roomsData from '../data/roomsData.json';

const RoomsCollection = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  const { t } = useTranslation();
  const { locale } = useParams();
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const roomItems = t('rooms.items', { returnObjects: true }) as Array<{ title: string, size: string }>;
  const exploreItems = t('explore.items', { returnObjects: true }) as Array<{ title: string, size: string }>;
  const allLocalizedItems = [...roomItems, ...exploreItems];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const isGrid = hideTitle; // True for the RoomsPage

  return (
    <section className={`bg-white ${hideTitle ? 'pt-8 pb-24' : 'pt-8 pb-24 relative overflow-hidden'}`} id="rooms">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        {!hideTitle && (
          <div className="text-center mb-16 relative">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 mb-4"
            >
              {t('rooms.label')}
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#111] font-semibold"
            >
              {t('rooms.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              {t('rooms.desc')}
            </motion.p>
          </div>
        )}

        <div className="relative w-full group/slider">
          {/* Carousel Controls - Only visible when not grid */}
          {!hideTitle && (
            <div className="hidden lg:flex absolute top-[35%] -translate-y-1/2 left-[-3rem] right-[-3rem] justify-between pointer-events-none z-20">
              <button 
                onClick={scrollLeft}
                className="pointer-events-auto bg-white hover:bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] rounded-full w-14 h-14 flex items-center justify-center text-[#111] hover:text-[var(--color-gold)] transition-all duration-300"
              >
                <ChevronLeft size={28} strokeWidth={1.5} />
              </button>
              <button 
                onClick={scrollRight}
                className="pointer-events-auto bg-white hover:bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] rounded-full w-14 h-14 flex items-center justify-center text-[#111] hover:text-[var(--color-gold)] transition-all duration-300"
              >
                <ChevronRight size={28} strokeWidth={1.5} />
              </button>
            </div>
          )}

        <div 
          ref={sliderRef}
          className={
            isGrid 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "flex overflow-x-auto gap-6 sm:gap-8 pb-10 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12 xl:mx-0 xl:px-0"
          }
          style={!isGrid ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
        >
          {roomsData.map((roomData, idx) => {
            const item = allLocalizedItems[idx];
            
            return (
              <motion.div
                key={roomData.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group ${isGrid ? 'w-full' : 'w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[31%] shrink-0 snap-center lg:snap-start'}`}
              >
                <Link to={`/${locale || 'vi'}/room/${roomData.id}`} className="block h-full">
                  <div className="relative overflow-hidden mb-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                      <img
                        src={roomData.cover}
                        alt={item?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm font-serif shadow-lg">
                      <span className="text-[var(--color-gold)] font-bold">{roomData.price.toLocaleString('vi-VN')}</span> {t('rooms.perNight')}
                    </div>
                  </div>

                  <div className="pl-2">
                    <h3 className="text-2xl font-serif font-semibold text-[#111] mb-4 group-hover:text-[var(--color-gold)] transition-colors">
                      {item?.title}
                    </h3>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Maximize size={16} className="text-gray-400 stroke-[1.5px]" />
                        <span className="font-medium">{item?.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bed size={16} className="text-gray-400 stroke-[1.5px]" />
                        <span className="font-medium">{roomData.bedCount} {t('rooms.bed')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-gray-400 stroke-[1.5px]" />
                        <span className="font-medium">{roomData.guestCount} {t('rooms.guests')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsCollection;
