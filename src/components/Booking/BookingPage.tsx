import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BookingSearchForm from './BookingSearchForm';
import BookingRoomCard from './BookingRoomCard';
import BookingSummarySidebar from './BookingSummarySidebar';
import roomsData from '../../data/roomsData.json';

const BookingPage = () => {
  const { locale } = useParams();
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
  }, [locale, i18n]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      
      {/* Hero Banner Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/gallery/SẢNH LỄ TÂN/reception.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-20 px-4">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-white text-3xl md:text-5xl font-serif font-bold tracking-widest text-shadow-lg"
           >
             TAN PHUONG NAM GALAXY HOTEL
           </motion.h1>
            <div className="flex gap-4 mt-6 text-[10px] md:text-xs text-white uppercase tracking-[0.4em] font-medium border-b border-white/30 pb-2">
              <span>{t('roomDetail.availability', 'Availability')}</span>
              <span className="opacity-40">{t('timelineNav.links.1', 'About')}</span>
              <span className="opacity-40">{t('footer.links.3', 'Contact')}</span>
              <span className="opacity-40">{t('footer.links.1', 'Policies')}</span>
            </div>
        </div>
      </div>

      {/* Main Booking Content */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pb-32">
        
        {/* Floating Search Bar */}
        <BookingSearchForm />

        <div className="mt-12 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Room Results */}
          <div className="flex-1 w-full">
             <div className="mb-8 border-b border-gray-200 pb-4 flex justify-between items-center">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest flex items-center gap-3">
                   <span className="w-8 h-[2px] bg-[#D4AF37]"></span>
                   {roomsData.length} {t('booking.availableRooms', 'Room Types Available')}
                </h2>
                <div className="text-[11px] text-gray-400 font-bold tracking-widest uppercase">
                   {t('booking.currency', 'Currency')}: VND
                </div>
             </div>

            {roomsData.map((room, idx) => (
              <BookingRoomCard key={room.id} room={room} index={idx} />
            ))}
          </div>

          {/* Right Column: Dynamic summary sidebar */}
          <div className="w-full lg:w-[380px] shrink-0">
             <BookingSummarySidebar />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
