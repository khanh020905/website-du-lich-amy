import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import RoomsCollection from './components/RoomsCollection';
import ExploreRooms from './components/ExploreRooms';
import VideoSection from './components/VideoSection';
import Accommodations from './components/Accommodations';
import Testimonials from './components/Testimonials';
import SideTimeline from './components/SideTimeline';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const Layout = () => {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && (locale === 'vi' || locale === 'en')) {
      i18n.changeLanguage(locale);
      document.documentElement.lang = locale;
    }
  }, [locale, i18n]);

  if (!locale || (locale !== 'vi' && locale !== 'en')) {
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
      <VideoSection />
      <Accommodations />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vi" replace />} />
      <Route path="/:locale" element={<Layout />} />
      <Route path="*" element={<Navigate to="/vi" replace />} />
    </Routes>
  );
}

export default App;
