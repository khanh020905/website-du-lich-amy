import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Maximize, Bed, Users, Bath, Star, ArrowLeft, Check, Coffee, Wifi, Monitor } from 'lucide-react';
import roomsData from '../data/roomsData.json';

const RoomDetail = () => {
  const { locale, roomId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roomId]);

  const roomIndex = roomsData.findIndex(r => r.id === roomId);
  
  if (roomIndex === -1) {
    return <Navigate to={`/${locale || 'vi'}`} replace />;
  }

  const roomData = roomsData[roomIndex];
  
  const roomItems = t('rooms.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string }>;
  const exploreItems = t('explore.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string }>;
  const allLocalizedItems = [...roomItems, ...exploreItems];
  
  const localizedInfo = allLocalizedItems[roomIndex];
  // Determine if it's a penthouse/superior to assign bathroom count gracefully (just simulate for now based on capacity)
  const bathroomCount = roomData.guestCount > 2 ? 2 : 1;

  // Retrieve localized reviews (fallback to English if not found, though we have all 4)
  const langKey = (locale || 'vi') as keyof typeof roomData.reviews;
  const reviews = roomData.reviews[langKey] || roomData.reviews['en'];

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
        {/* Specs Bar */}
        <div className="bg-white shadow-xl rounded-sm p-6 md:p-10 flex flex-wrap items-center justify-between gap-6 md:gap-10 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <Maximize className="text-[var(--color-gold)]" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Size</p>
              <p className="text-sm md:text-base font-medium">{localizedInfo?.size}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <Bed className="text-[var(--color-gold)]" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Beds</p>
              <p className="text-sm md:text-base font-medium">{roomData.bedCount}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <Users className="text-[var(--color-gold)]" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Guests</p>
              <p className="text-sm md:text-base font-medium">Up to {roomData.guestCount}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
              <Bath className="text-[var(--color-gold)]" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Bathrooms</p>
              <p className="text-sm md:text-base font-medium">{bathroomCount}</p>
            </div>
          </div>

          <div className="w-full md:w-auto mt-4 md:mt-0 lg:ml-auto">
            <div className="text-center md:text-right mb-3">
              <span className="text-2xl md:text-3xl font-serif text-[#111] font-semibold">{roomData.price.toLocaleString('vi-VN')}</span>
              <span className="text-sm text-gray-500 ml-1">VNĐ {t('rooms.perNight')}</span>
            </div>
            <button 
              onClick={handleBookNow}
              className="w-full md:w-auto bg-[#111] hover:bg-[var(--color-gold)] text-white px-8 py-3.5 text-sm uppercase tracking-widest font-semibold transition-colors rounded-sm"
            >
              {t('nav.bookNow', { defaultValue: 'Book Now' })}
            </button>
          </div>
        </div>

        {/* Content & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-serif text-[#111] font-semibold mb-6">Room Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {localizedInfo?.desc}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Step into an oasis of comfort and prestige. Our perfectly curated space perfectly blends modern luxury with elegant aesthetics, ensuring a profound hospitality experience tailored entirely to your desires. Welcome to Tan Phuong Nam Galaxy, where dreams meet reality.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#111] font-semibold mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {roomData.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={16} className="text-[var(--color-gold)]" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
                {/* Simulated standard amenities */}
                <div className="flex items-center gap-3">
                  <Monitor size={16} className="text-[var(--color-gold)]" />
                  <span className="text-gray-700 font-medium text-sm">Smart TV</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee size={16} className="text-[var(--color-gold)]" />
                  <span className="text-gray-700 font-medium text-sm">Minibar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi size={16} className="text-[var(--color-gold)]" />
                  <span className="text-gray-700 font-medium text-sm">High-Speed WiFi</span>
                </div>
              </div>
            </section>

            {/* Gallery Mini Grid */}
            <section>
              <h3 className="text-2xl font-serif text-[#111] font-semibold mb-6">Room Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {roomData.galleries.map((img, idx) => (
                  <div key={idx} className={`rounded-sm overflow-hidden bg-gray-100 ${idx === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Reviews */}
          <div className="space-y-8">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
              <h4 className="font-serif text-xl font-semibold mb-6 text-[#111]">Guest Reviews</h4>
              <div className="space-y-8">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold text-gray-800">{rev.name}</h5>
                      <div className="flex items-center gap-1 bg-[#111] text-[var(--color-gold)] px-2 py-1 rounded-sm">
                        <span className="text-xs font-bold leading-none">{rev.score}</span>
                        <Star size={10} fill="currentColor" />
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic leading-relaxed">"{rev.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] text-white p-8 rounded-sm">
              <h4 className="font-serif text-xl font-semibold mb-3">Need Assistance?</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Our reservations team is available 24/7 to help you tailor your perfect stay.
              </p>
              <a href="tel:+842363" className="block text-center border border-white/20 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] py-3 px-4 text-sm uppercase tracking-widest font-semibold transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
