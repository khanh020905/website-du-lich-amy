import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Bed, Bath, CalendarDays, X, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

interface BookingRoomCardProps {
  room: any;
  index: number;
}

const BookingRoomCard: React.FC<BookingRoomCardProps> = ({ room, index }) => {
  const { locale } = useParams();
  const { t, i18n } = useTranslation();
  const [showInfo, setShowInfo] = useState(false);
  
  // Localized Info mapping
  const roomItems = t('rooms.items', { returnObjects: true }) as any[];
  const exploreItems = t('explore.items', { returnObjects: true }) as any[];
  const allLocalizedItems = Array.isArray(roomItems) && Array.isArray(exploreItems) ? [...roomItems, ...exploreItems] : [];
  const localizedInfo = allLocalizedItems[index] || {};

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = room.galleries && room.galleries.length > 0 ? room.galleries : [room.cover];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded border border-gray-200 overflow-hidden mb-6 flex flex-col cursor-pointer transition-shadow hover:shadow-lg"
        onClick={() => setShowInfo(true)}
      >
        <div className="flex flex-col md:flex-row">
          {/* Room Image (Left) */}
          <div className="md:w-[320px] relative shrink-0 overflow-hidden min-h-[220px]">
            <img 
              src={images[currentImgIndex]} 
              alt={room.id}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Arrow Overlays */}
            <div className={`absolute inset-0 flex items-center justify-between px-3 ${images.length <= 1 ? 'hidden' : ''}`}>
              <div 
                 className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-gray-700 shadow hover:bg-white transition-colors cursor-pointer"
                 onClick={prevImage}
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
              </div>
              <div 
                 className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-gray-700 shadow hover:bg-white transition-colors cursor-pointer"
                 onClick={nextImage}
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
          </div>

          {/* Room Details */}
          <div className="flex-1 p-6 flex flex-col">
            <h3 className="text-[20px] font-semibold text-gray-900 uppercase mb-4">
              {localizedInfo.title || room.id.replace(/-/g, ' ')}
            </h3>
            
            <div className="flex flex-wrap gap-5 mb-4 text-[14px] text-gray-800">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gray-600" />
                {t('roomDetail.guests', 'Sleeps')} {room.guestCount}
              </div>
              <div className="flex items-center gap-2">
                <Bed size={18} className="text-gray-600" />
                {room.bedCount} {t('booking.beds', 'beds')}
              </div>
              <div className="flex items-center gap-2">
                <Bath size={18} className="text-gray-600" />
                {t('roomDetail.bathrooms', '1 Bathroom')}
              </div>
            </div>

            <div className="flex flex-wrap mb-3 text-[14px] text-gray-600 leading-relaxed">
               <span className="flex items-center whitespace-nowrap">32m² <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">City view <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">Non-smoking <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">Telephone <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">Linen and Towels <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">Shower <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">Slippers <span className="text-gray-400 mx-1.5">•</span></span>
               <span className="flex items-center whitespace-nowrap">Cable/Satellite TV</span>
            </div>

            <p className="text-[14px] text-gray-600 mb-5 line-clamp-2">
              Wake up to views of Danang's stunning skyline from a Deluxe City View room. Designed with comfort in mind...
            </p>

            <div className="mt-auto pt-4">
               <button 
                 className="text-[14px] text-[#D4AF37] hover:text-[#B3932F] underline underline-offset-4 decoration-1 font-bold tracking-wide transition-colors"
                 onClick={(e) => { e.stopPropagation(); setShowInfo(true); }}
               >
                 {t('booking.moreInfo', 'View Details')}
               </button>
            </div>
          </div>
        </div>

        {/* Bottom Booking Status Area */}
        <div className="border-t border-gray-200 bg-[#F4F5F7] px-6 py-5" onClick={(e) => e.stopPropagation()}>
           <div className="flex flex-col items-center gap-4">
              <span className="text-[14px] text-gray-800">
                <span className="font-[600]">Tue, 21 Apr – Wed, 22 Apr</span> {t('booking.unavailable', 'are unavailable')}
              </span>
              <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 px-6 py-2 rounded text-[14px] font-bold hover:bg-gray-50 transition-colors shadow-sm focus:outline-none">
                <CalendarDays size={18} />
                {t('booking.findAvailableDates', 'Find available dates')}
              </button>
           </div>
        </div>
      </motion.div>

      {/* Information Modal */}
      <AnimatePresence>
        {showInfo && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
               onClick={() => setShowInfo(false)}
            />
            <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="fixed inset-0 z-[101] m-auto w-[90%] max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden"
            >
               <div className="flex justify-between items-center p-5 border-b border-gray-200">
                  <h2 className="text-xl font-bold uppercase text-gray-900 tracking-wide">{room.id.replace(/-/g, ' ')}</h2>
                  <button onClick={() => setShowInfo(false)} className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="overflow-y-auto flex-1 p-6 md:p-8">
                  <div className="w-full h-[300px] md:h-[450px] mb-8 rounded overflow-hidden relative group">
                     <img src={images[currentImgIndex]} alt={room.id} className="w-full h-full object-cover transition-opacity duration-300" />
                     
                     {/* Arrows for Modal */}
                     <div className={`absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity ${images.length <= 1 ? 'hidden' : ''}`}>
                        <button 
                           onClick={prevImage}
                           className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        >
                           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <button 
                           onClick={nextImage}
                           className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        >
                           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                     </div>

                     {/* Image Counter Badge */}
                     <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                        {currentImgIndex + 1} / {images.length}
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="md:col-span-2 space-y-6">
                        <div>
                           <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t('booking.description', 'Description')}</h3>
                           <div 
                              className="text-gray-600 leading-relaxed text-[15px] [&_strong]:font-semibold [&_strong]:text-gray-900"
                              dangerouslySetInnerHTML={{ __html: localizedInfo.desc || t('roomDetail.overviewDesc') }}
                           />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t('booking.amenities', 'Amenities & Features')}</h3>
                           <div className="grid grid-cols-2 gap-3 text-[14px] text-gray-700">
                              {(room.amenities || t('roomDetail.fixedAmenities', { returnObjects: true })).map((item: string, i: number) => (
                                 <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                    {item}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="bg-gray-50 p-6 rounded border border-gray-100 h-fit">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">{t('booking.roomDetails', 'Room Details')}</h3>
                        <div className="space-y-4 text-[14px]">
                           <div className="flex justify-between pb-3 border-b border-gray-200">
                              <span className="text-gray-500">{t('booking.size', 'Size')}</span>
                              <span className="font-semibold text-gray-900">32m²</span>
                           </div>
                           <div className="flex justify-between pb-3 border-b border-gray-200">
                              <span className="text-gray-500">{t('booking.occupancy', 'Occupancy')}</span>
                              <span className="font-semibold text-gray-900">{t('roomDetail.upTo', 'Up to')} {room.guestCount} {t('roomDetail.adults', 'adults')}</span>
                           </div>
                           <div className="flex justify-between pb-3 border-b border-gray-200">
                              <span className="text-gray-500">{t('booking.bedding', 'Bedding')}</span>
                              <span className="font-semibold text-gray-900">{room.bedCount} {t('booking.beds', 'beds')}</span>
                           </div>
                           <div className="flex justify-between pb-3 border-b border-gray-200">
                              <span className="text-gray-500">{t('booking.view', 'View')}</span>
                              <span className="font-semibold text-gray-900">City / Ocean</span>
                           </div>
                        </div>

                        <Link 
                           to={`/${locale}/room/${room.id}`}
                           className="mt-8 w-full bg-[#111] text-white py-3 px-4 rounded-sm font-bold tracking-widest uppercase text-[12px] flex items-center justify-center gap-2 hover:bg-[var(--color-gold)] transition-colors group"
                        >
                           {t('booking.seeMore', 'See more')}
                           <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingRoomCard;
