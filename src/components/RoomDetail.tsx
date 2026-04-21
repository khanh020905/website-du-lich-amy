import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Maximize, Bed, Users, Bath, Star, ArrowLeft, Check, Coffee, Wifi, Monitor, X, Wind, Snowflake, Lock, Utensils, ChevronDown } from 'lucide-react';
import roomsData from '../data/roomsData.json';

const getAmenityIcon = (idx: number) => {
  switch (idx) {
    case 0: return <Monitor size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 1: return <Snowflake size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 2: return <Wifi size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 3: return <Wind size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 4: return <Lock size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 5: return <Coffee size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 6: return <Utensils size={24} className="text-[var(--color-gold)] shrink-0" />;
    case 7: return <Bath size={24} className="text-[var(--color-gold)] shrink-0" />;
    default: return <Check size={24} className="text-[var(--color-gold)] shrink-0" />;
  }
}

const CustomSelect = ({ options, value, onChange }: { options: number[], value: number, onChange: (val: number) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors text-sm text-gray-700 bg-gray-50/50 cursor-pointer"
      >
        <span>{value}</span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-sm shadow-2xl max-h-60 overflow-y-auto left-0 premium-scrollbar"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-gold)] ${value === option ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium' : 'text-gray-700'}`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const RoomDetail = () => {
  const { locale, roomId } = useParams();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [adultsCount, setAdultsCount] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roomId]);

  const roomIndex = roomsData.findIndex(r => r.id === roomId);
  
  if (roomIndex === -1) {
    return <Navigate to={`/${locale || 'vi'}`} replace />;
  }

  const roomData = roomsData[roomIndex];
  
  const roomItems = t('rooms.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string, highlights?: string[] }>;
  const exploreItems = t('explore.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string, highlights?: string[] }>;
  const allLocalizedItems = [...roomItems, ...exploreItems];
  
  const localizedInfo = allLocalizedItems[roomIndex];
  // Determine if it's a penthouse/superior to assign bathroom count gracefully (just simulate for now based on capacity)
  const bathroomCount = roomData.guestCount > 2 ? 2 : 1;


  const handleBookNow = () => {
    alert("Booking Engine Integration Coming Soon!");
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] w-full bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${roomData.cover}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-30 md:top-40 left-6 md:left-12 z-20">
          <Link 
            to={`/${locale || 'vi'}/rooms`} 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold bg-black/20 px-4 py-2 rounded shadow backdrop-blur-sm"
          >
            <ArrowLeft size={16} />
            {t('nav.links.0', { defaultValue: 'Back' })}
          </Link>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-white tracking-wide uppercase drop-shadow-lg"
            >
              {localizedInfo?.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl -mt-12 relative z-10">
        {/* OTA Booking Widget */}
        <div className="bg-white shadow-2xl rounded-sm p-6 md:p-8 flex flex-col gap-6 border border-gray-100">
          
          {/* Room Specs Row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <Maximize className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t('roomDetail.size')}</p>
                <p className="text-sm font-medium">{localizedInfo?.size}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <Bed className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t('roomDetail.beds')}</p>
                <p className="text-sm font-medium">{roomData.bedCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <Users className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t('roomDetail.guests')}</p>
                <p className="text-sm font-medium">{t('roomDetail.upTo')} {roomData.guestCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <Bath className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{t('roomDetail.bathrooms')}</p>
                <p className="text-sm font-medium">{bathroomCount}</p>
              </div>
            </div>
          </div>

          {/* Booking Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t('roomDetail.checkIn')}</label>
              <input type="date" className="p-3 border border-gray-200 rounded-sm w-full focus:outline-none focus:border-[var(--color-gold)] transition-colors text-sm text-gray-700 bg-gray-50/50" />
            </div>
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t('roomDetail.checkOut')}</label>
              <input type="date" className="p-3 border border-gray-200 rounded-sm w-full focus:outline-none focus:border-[var(--color-gold)] transition-colors text-sm text-gray-700 bg-gray-50/50" />
            </div>
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1.5">
              <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t('roomDetail.roomsCount')}</label>
              <CustomSelect options={[1,2,3,4,5]} value={roomsCount} onChange={setRoomsCount} />
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t('roomDetail.adults')}</label>
                <CustomSelect options={[1,2,3,4,5,6]} value={adultsCount} onChange={setAdultsCount} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t('roomDetail.children')}</label>
                <CustomSelect options={[0,1,2,3,4]} value={childrenCount} onChange={setChildrenCount} />
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 pt-6 border-t border-gray-100">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{t('roomDetail.totalPrice')}</p>
              <span className="text-3xl font-serif text-[#111] font-semibold">{roomData.price.toLocaleString('vi-VN')}</span>
              <span className="text-sm text-gray-500 ml-1">VNĐ / {t('rooms.perNight').replace('/ ', '')}</span>
            </div>
            <button 
              onClick={handleBookNow}
              className="w-full md:w-auto bg-[#111] hover:bg-[var(--color-gold)] text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold transition-colors rounded-sm"
            >
              {t('nav.bookNow', { defaultValue: 'Book Now' })}
            </button>
          </div>
        </div>

        {/* Content & Details */}
        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          <section>
            <h3 className="text-2xl font-serif text-[#111] font-semibold mb-6">{t('roomDetail.overview')}</h3>
            <div 
              className="text-gray-600 leading-relaxed text-lg mb-6 [&_strong]:font-semibold [&_strong]:text-[#111]"
              dangerouslySetInnerHTML={{ __html: localizedInfo?.desc || '' }}
            />
          </section>

          <section>
            <h3 className="text-2xl font-serif text-[#111] font-semibold mb-6">{t('roomDetail.amenities')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(t('roomDetail.fixedAmenities', { returnObjects: true }) as string[]).map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 px-4 py-3 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/30 transition-colors">
                  {getAmenityIcon(idx)}
                  <span className="text-gray-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Mini Grid */}
          <section>
            <h3 className="text-2xl font-serif text-[#111] font-semibold mb-6">{t('roomDetail.gallery')}</h3>
            <div className="grid grid-cols-2 gap-4">
              {roomData.galleries.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-sm overflow-hidden bg-gray-100 cursor-pointer ${idx === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-video'}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar / Options Moved to Bottom */}
          <div className="bg-[#111] text-white p-8 rounded-sm text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-xl font-semibold mb-2">{t('roomDetail.needAssistance')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {t('roomDetail.assistanceDesc')}
              </p>
            </div>
            <a href="tel:+842363" className="w-full md:w-auto shrink-0 border border-white/20 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] py-3 px-8 text-sm uppercase tracking-widest font-semibold transition-all text-center">
              {t('roomDetail.contactUs')}
            </a>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 bg-black/20 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Zoomed Gallery"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoomDetail;
