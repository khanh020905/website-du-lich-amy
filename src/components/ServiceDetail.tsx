import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, MapPin, Phone } from 'lucide-react';

import img1 from '../assets/reception.jpg';
import img2 from '../assets/restaurent.jpg';
import img3 from '../assets/spa.jpg';
import img4 from '../assets/bartender-bar.jpg';

const accommodationsImages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 }
];

const openingHoursMap = [
  { vi: "24/7", en: "24/7", ko: "연중무휴", zh: "24/7" },
  { vi: "06:00 đến 22:00", en: "06:00 to 22:00", ko: "06:00 - 22:00", zh: "06:00 至 22:00" },
  { vi: "09:00 đến 21:00", en: "09:00 to 21:00", ko: "09:00 - 21:00", zh: "09:00 至 21:00" },
  { vi: "16:00 đến 00:00", en: "16:00 to 00:00", ko: "16:00 - 00:00", zh: "16:00 至 00:00" },
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

  const accItems = t('accommodations.items', { returnObjects: true }) as Array<{ title: string, size: string, desc: string }>;
  const localizedInfo = accItems[id];
  const currentLang = (locale || 'vi') as 'vi' | 'en' | 'ko' | 'zh';
  const hours = openingHoursMap[id][currentLang] || openingHoursMap[id].vi;

  const bgImage = accommodationsImages[id].image;

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[55vh] md:h-[65vh] w-full bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute top-32 md:top-40 left-6 md:left-12 z-20">
          <Link 
            to={`/${locale || 'vi'}/`} 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase text-xs tracking-widest font-semibold bg-black/20 px-4 py-2 rounded shadow backdrop-blur-sm"
          >
            <ArrowLeft size={16} />
            {t('nav.links.0', { defaultValue: 'Back' })}
          </Link>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="text-center">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-gold)] mb-4"
            >
              {t('accommodations.label')}
            </motion.h3>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white tracking-wide uppercase drop-shadow-lg"
            >
              {localizedInfo?.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl -mt-12 relative z-10">
        {/* Specs Bar */}
        <div className="bg-white shadow-xl rounded-sm p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex-1">
             <h2 className="text-2xl font-serif text-[#111] font-semibold mb-4 hidden md:block">
               {localizedInfo?.title}
             </h2>
             <p className="text-gray-600 leading-relaxed text-justify">
               {localizedInfo?.desc}
             </p>
          </div>
          
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-10 min-w-[250px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <Clock className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Time</p>
                <p className="text-sm font-medium">{hours}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <MapPin className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Location</p>
                <p className="text-sm font-medium">Tan Phuong Nam Galaxy</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <Phone className="text-[var(--color-gold)]" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Contact</p>
                <p className="text-sm font-medium">0236 3 668 886</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
