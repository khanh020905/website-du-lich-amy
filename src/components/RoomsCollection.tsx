import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, Bed, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/pdf_images/img_p3_9.jpeg';
import img2 from '../assets/pdf_images/img_p3_10.jpeg';
import img3 from '../assets/pdf_images/img_p3_11.jpeg';

const roomsImgs = [
  {
    image: img1,
    price: 1500000,
    guestCount: 2,
    bedCount: 1,
  },
  {
    image: img2,
    price: 1800000,
    guestCount: 2,
    bedCount: 2,
  },
  {
    image: img3,
    price: 1800000,
    guestCount: 2,
    bedCount: 1,
  },
  {
    image: img1,
    price: 2500000,
    guestCount: 3,
    bedCount: 2,
  },
  {
    image: img2,
    price: 3500000,
    guestCount: 4,
    bedCount: 2,
  }
];

const RoomsCollection = () => {
  const { t } = useTranslation();
  const [itemsOrder, setItemsOrder] = useState([0, 1, 2, 3, 4]);
  
  const roomItems = t('rooms.items', { returnObjects: true }) as Array<{ title: string, size: string }>;

  const handleNext = () => {
    setItemsOrder(prev => {
      const arr = [...prev];
      const first = arr.shift()!;
      arr.push(first);
      return arr;
    });
  };

  const handlePrev = () => {
    setItemsOrder(prev => {
      const arr = [...prev];
      const last = arr.pop()!;
      arr.unshift(last);
      return arr;
    });
  };

  return (
    <section className="pt-8 pb-24 bg-white" id="rooms">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
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
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-20px] top-[35%] transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-gray-800 hover:text-[var(--color-gold)] hover:-translate-x-1 transition-all"
          >
            <ChevronLeft size={20} className="stroke-[2px]" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-[-20px] top-[35%] transform -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-gray-800 hover:text-[var(--color-gold)] hover:translate-x-1 transition-all"
          >
            <ChevronRight size={20} className="stroke-[2px]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {itemsOrder.slice(0, 3).map((idx) => {
                const room = roomsImgs[idx];
                const item = roomItems[idx];
                return (
                  <motion.div
                    layout
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden mb-6 rounded-2xl">
                      <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                        <img
                          src={room.image}
                          alt={item?.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm font-serif shadow-lg">
                        <span className="text-[var(--color-gold)] font-bold">${room.price}</span> {t('rooms.perNight')}
                      </div>
                    </div>

                    <div className="pl-2">
                      <h3 className="text-2xl font-serif font-semibold text-[#111] mb-4 group-hover:text-[var(--color-gold)] transition-colors">
                        {item?.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Maximize size={16} className="text-gray-400 stroke-[1.5px]" />
                          <span className="font-medium">{item?.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed size={16} className="text-gray-400 stroke-[1.5px]" />
                          <span className="font-medium">{room.bedCount} {t('rooms.bed')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-400 stroke-[1.5px]" />
                          <span className="font-medium">{room.guestCount} {t('rooms.guests')}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12 gap-2">
            {roomsImgs.map((_, idx) => (
              <button 
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${itemsOrder[1] === idx ? 'bg-[var(--color-gold)] scale-125' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsCollection;
