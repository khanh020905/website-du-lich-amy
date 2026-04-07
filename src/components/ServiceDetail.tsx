import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, MapPin, Phone, Check, Users } from 'lucide-react';

import img1 from '../assets/reception.jpg';
import img2 from '../assets/restaurent.jpg';
import img3 from '../assets/spa.jpg';
import img4 from '../assets/bartender-bar.jpg';
import img5 from '../assets/gym_mock.png';
import img6 from '../assets/pool_mock.png';
import img7 from '../assets/conference_mock.png';

const accommodationsImages = [
  { image: img1 }, // 0: Reception
  { image: img2 }, // 1: Restaurant
  { image: img3 }, // 2: Spa
  { image: img4 }, // 3: Skybar
  { image: img5 }, // 4: Gym Mock
  { image: img6 }, // 5: Pool Mock
  { image: img7 }  // 6: Conference Mock
];

const ServiceDetail = () => {
  const { locale, serviceId } = useParams();
  const { t } = useTranslation();

  const id = parseInt(serviceId || "0", 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (isNaN(id) || id < 0 || id >= accommodationsImages.length) {
    return <Navigate to={`/${locale || 'vi'}`} replace />;
  }

  const accItems = t('accommodations.items', { returnObjects: true }) as Array<any>;
  const localizedInfo = accItems[id];
  const hours = localizedInfo?.hours || "24/7";
  const locationText = localizedInfo?.locationText || "Tan Phuong Nam Galaxy";
  const capacityText = localizedInfo?.capacityText;

  const bgImage = accommodationsImages[id].image;
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="bg-[#111] min-h-screen pb-24 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full bg-[#111] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')`, y: y1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/40 via-black/50 to-[#111]" />
        
        <div className="absolute top-10 md:top-40 left-4 md:left-12 z-20">
          <Link 
            to={`/${locale || 'vi'}/services`} 
            className="flex items-center gap-2 text-white/80 hover:text-[var(--color-gold)] transition-colors uppercase text-[10px] md:text-xs tracking-widest font-semibold bg-white/5 px-4 py-2 border border-white/10 rounded-sm backdrop-blur-md"
          >
            <ArrowLeft size={16} />
            {t('nav.links.0', { defaultValue: 'Back' })}
          </Link>
        </div>

        <div className="relative z-10 text-center px-4 -mt-20">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-gold)] mb-4 md:mb-6"
          >
            {t('accommodations.label')}
          </motion.h3>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif text-white tracking-wide uppercase drop-shadow-2xl"
          >
            {localizedInfo?.title}
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 max-w-6xl -mt-24 md:-mt-32 relative z-20">
        {/* Glassmorphism Specs Bar */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transform: 'translateZ(0)' }}
          className="bg-[#1a1a1a]/70 backdrop-blur-xl rounded-sm p-6 md:p-12 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8 items-start justify-between"
        >
          <div className="flex-[2]">
             <h2 className="text-2xl md:text-3xl font-serif text-[var(--color-gold)] font-semibold mb-4 md:mb-6 hidden md:block">
               {localizedInfo?.title}
             </h2>
             <p className="text-gray-300 leading-relaxed text-justify mb-8 md:pr-10 text-sm md:text-base font-light">
               {localizedInfo?.desc}
             </p>
             
             {localizedInfo?.features && localizedInfo.features.length > 0 && (
               <div className="mb-8 md:pr-10">
                 <h3 className="text-sm md:text-lg font-serif text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                   {locale === 'en' ? 'Highlights & Features' : locale === 'vi' ? 'Tiện ích & Đặc điểm' : 'Highlights'}
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {localizedInfo.features.map((feature: string, idx: number) => (
                     <div key={idx} className="flex items-start gap-3 group">
                       <Check size={16} className="text-[var(--color-gold)] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-light">{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>
             )}

             {localizedInfo?.schedules && localizedInfo.schedules.length > 0 && (
               <div className="md:pr-10">
                 <h3 className="text-sm md:text-lg font-serif text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                   {locale === 'en' ? 'Services Schedule' : locale === 'vi' ? 'Lịch trình Dịch vụ' : 'Schedule'}
                 </h3>
                 <div className="flex flex-col gap-3">
                   {localizedInfo.schedules.map((schedule: string, idx: number) => (
                     <div key={idx} className="flex items-center gap-4 bg-white/5 p-3 md:p-4 rounded-sm border border-white/5 hover:bg-white/10 transition-colors">
                       <Clock size={16} className="text-[var(--color-gold)] shrink-0" />
                       <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide">{schedule}</span>
                     </div>
                   ))}
                 </div>
               </div>
             )}
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 min-w-[280px]">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <Clock className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-1">
                  {locale === 'en' ? 'Time' : locale === 'vi' ? 'Giờ mở cửa' : 'Time'}
                </p>
                <p className="text-sm md:text-base font-medium text-gray-200">{hours}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <MapPin className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-1">
                  {locale === 'en' ? 'Location' : locale === 'vi' ? 'Vị Trí' : 'Location'}
                </p>
                <p className="text-sm md:text-base font-medium text-gray-200">{locationText}</p>
              </div>
            </div>

            {capacityText && (
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                  <Users className="text-[var(--color-gold)]" size={18} />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-1">
                    {locale === 'en' ? 'Capacity' : locale === 'vi' ? 'Sức chứa' : 'Capacity'}
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-200">{capacityText}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <Phone className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-1">
                  {locale === 'en' ? 'Contact' : locale === 'vi' ? 'Liên Hệ' : 'Contact'}
                </p>
                <p className="text-sm md:text-base font-medium text-gray-200">0236 3 668 886</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
