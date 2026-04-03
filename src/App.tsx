import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import RoomsCollection from './components/RoomsCollection';
import ExploreRooms from './components/ExploreRooms';
import Accommodations from './components/Accommodations';
import Testimonials from './components/Testimonials';
import SideTimeline from './components/SideTimeline';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vi" replace />} />
      <Route path="/:locale" element={<Layout />} />
      <Route path="/:locale/gallery" element={<GalleryPage />} />
      <Route path="*" element={<Navigate to="/vi" replace />} />
    </Routes>
  );
}

export default App;
