import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { locale } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navAnchors = ['culinary', 'meeting', 'spa', 'offer', 'gallery'];
  const translatedLinks = t('nav.links', { returnObjects: true }) as string[];

  const switchLanguage = (lng: string) => {
    if (locale !== lng) {
      navigate(`/${lng}${location.hash}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen ? 'bg-[#111] bg-opacity-95 py-4 shadow-lg backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-12 flex justify-between items-center relative w-full">
        {/* Logo */}
        <div className="pointer-events-auto cursor-pointer shrink-0">
          <img 
            src="/tpn-logo.png" 
            alt="Tan Phuong Nam Logo" 
            className="h-16 lg:h-24 w-auto object-contain" 
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-8 flex-1 px-4">
          {navAnchors.map((anchor, index) => (
            <Link
              key={anchor}
              to={anchor === 'gallery' ? `/${locale}/gallery` : `/${locale}#${anchor}`}
              className="text-white text-[11px] lg:text-xs xl:text-sm font-semibold tracking-[0.1em] xl:tracking-widest hover:text-[var(--color-gold)] transition-colors duration-300 uppercase whitespace-nowrap"
            >
              {translatedLinks[index]}
            </Link>
          ))}
        </div>

        {/* Right Section: I18n & Button (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center space-x-1.5 xl:space-x-2 text-xs xl:text-sm font-bold tracking-widest uppercase">
            <button 
              onClick={() => switchLanguage('vi')}
              className={`transition-colors py-1 ${locale === 'vi' ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-white'}`}
            >
              VI
            </button>
            <span className="text-white/30">/</span>
            <button 
              onClick={() => switchLanguage('en')}
              className={`transition-colors py-1 ${locale === 'en' ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <button className="border border-white/50 text-white px-4 xl:px-7 py-2 xl:py-2.5 text-[11px] lg:text-xs xl:text-sm font-semibold tracking-widest hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300 uppercase whitespace-nowrap">
            {t('nav.bookNow')}
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[var(--color-gold)] transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#111] bg-opacity-95 backdrop-blur-md shadow-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">
              {navAnchors.map((anchor, index) => (
                <Link
                  key={anchor}
                  to={anchor === 'gallery' ? `/${locale}/gallery` : `/${locale}#${anchor}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-sm font-semibold tracking-widest hover:text-[var(--color-gold)] transition-colors duration-300 uppercase block"
                >
                  {translatedLinks[index]}
                </Link>
              ))}
              
              <div className="pt-5 mt-2 border-t border-white/10 flex flex-col space-y-6">
                <div className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase">
                  <span className="text-gray-500 mr-2 text-xs">Language:</span>
                  <button 
                    onClick={() => switchLanguage('vi')}
                    className={`transition-colors py-1 ${locale === 'vi' ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-white'}`}
                  >
                    VI
                  </button>
                  <span className="text-white/30">/</span>
                  <button 
                    onClick={() => switchLanguage('en')}
                    className={`transition-colors py-1 ${locale === 'en' ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-white'}`}
                  >
                    EN
                  </button>
                </div>
                
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-gold)] w-full py-3 text-sm font-semibold tracking-widest hover:bg-[var(--color-gold)] hover:text-[#111] transition-all duration-300 uppercase block text-center"
                >
                  {t('nav.bookNow')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
