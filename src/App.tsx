import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import RoomsCollection from './components/RoomsCollection';
import ExploreRooms from './components/ExploreRooms';
import Accommodations from './components/Accommodations';
import ServicesOverview from './components/ServicesOverview';
import Testimonials from './components/Testimonials';
import SideTimeline from './components/SideTimeline';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

import RoomDetail from './components/RoomDetail';
import ServiceDetail from './components/ServiceDetail';
import Culinary from './components/Culinary';
import Offers from './components/Offers';
import BookingPage from './components/Booking/BookingPage';

const Layout = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <SideTimeline />
      <Hero />
      <Introduction />
      <RoomsCollection />
      <ExploreRooms />
      <Accommodations />
      <Testimonials />
      <Footer />
    </div>
  );
};

const GalleryPage = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi/gallery" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
};

const RoomDetailPage = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <RoomDetail />
      <Footer />
    </div>
  );
};

const ServiceDetailPage = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <ServiceDetail />
      <Footer />
    </div>
  );
};

const RoomsPage = () => {
  const { locale } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-[#111]">
      <Navbar />

      {/* Dark Cinematic Header specifically for Rooms standalone container */}
      <div className="relative pt-40 pb-20 flex flex-col items-center justify-center px-4 overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: 'url("/gallery/MẶT NGOÀI KHÁCH SẠN/tn1.jpg")' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111]/90 via-[#111]/80 to-[#111]"></div>
        <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[4px]"></div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-gold)] mb-6"
        >
          {t('rooms.label')}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 text-4xl md:text-6xl font-serif text-white font-semibold tracking-wide shadow-black drop-shadow-xl"
        >
          {t('rooms.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-6 text-gray-300/90 max-w-3xl text-center text-lg leading-relaxed drop-shadow-md"
        >
          {t('rooms.desc')}
        </motion.p>
      </div>

      <div className="bg-white pb-16">
        <RoomsCollection hideTitle={true} />
        <ExploreRooms />
      </div>
      <Footer />
    </div>
  );
};

const CulinaryPage = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-[#111]">
      <Navbar />
      <Culinary />
      <Footer />
    </div>
  );
};

const OffersPage = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      <Offers />
      <Footer />
    </div>
  );
};

const ServicesPage = () => {
  const { locale } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (locale && ['vi', 'en', 'ko', 'zh'].includes(locale)) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
    window.scrollTo(0, 0);
  }, [locale, i18n]);

  if (!locale || !['vi', 'en', 'ko', 'zh'].includes(locale)) {
    return <Navigate to="/vi/services" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-[#111]">
      <Navbar />
      
      {/* Dark Cinematic Header specifically for Services standalone container */}
      <div className="relative pt-40 pb-20 flex flex-col items-center justify-center px-4 overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: 'url("/assets/spa.jpg")' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111]/90 via-[#111]/80 to-[#111]"></div>
        <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[4px]"></div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-gold)] mb-6 text-center"
        >
          {t('accommodations.label')}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 text-4xl md:text-6xl font-serif text-white font-semibold tracking-wide shadow-black drop-shadow-xl text-center"
        >
          {t('accommodations.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-6 text-gray-300/90 max-w-3xl text-center text-lg leading-relaxed drop-shadow-md"
        >
          {t('accommodations.desc')}
        </motion.p>
      </div>

      <div className="bg-[#111] pb-16 pt-8">
        <ServicesOverview />
      </div>
      <Footer />
    </div>
  );
};

import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/vi" replace />} />
        <Route path="/:locale" element={<Layout />} />
        <Route path="/:locale/gallery" element={<GalleryPage />} />
        <Route path="/:locale/rooms" element={<RoomsPage />} />
        <Route path="/:locale/culinary" element={<CulinaryPage />} />
        <Route path="/:locale/offer" element={<OffersPage />} />
        <Route path="/:locale/services" element={<ServicesPage />} />
        <Route path="/:locale/book" element={<BookingPage />} />
        <Route path="/:locale/room/:roomId" element={<RoomDetailPage />} />
        <Route path="/:locale/service/:serviceId" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/vi" replace />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
