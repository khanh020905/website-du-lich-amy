import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoUrl from '../assets/logo-finalll.png';

const LANGUAGES = [
  { code: 'vi', short: 'VI', full: 'Tiếng Việt' },
  { code: 'en', short: 'EN', full: 'English' },
  { code: 'ko', short: 'KO', full: '한국어' },
  { code: 'zh', short: 'ZH', full: '中文' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { locale } = useParams();

  useEffect(() => {
    let lastScrollValue = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Auto-hide logic for /gallery route
      if (location.pathname.includes('/gallery')) {
        if (currentScrollY > lastScrollValue && currentScrollY > 100) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }
      
      lastScrollValue = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navAnchors = ['rooms', 'culinary', 'services', 'offer', 'gallery'];
  const translatedLinks = t('nav.links', { returnObjects: true }) as string[];

  const switchLanguage = (lng: string) => {
    if (locale !== lng && locale) {
      const newPathname = location.pathname.replace(`/${locale}`, `/${lng}`);
      navigate(`${newPathname}${location.hash}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: '-100%' }}
      animate={{ y: isHidden ? '-100%' : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || isMobileMenuOpen ? 'bg-[#111] bg-opacity-95 py-3 lg:py-4 shadow-lg backdrop-blur-sm' : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-12 flex justify-between items-center relative w-full">
        {/* Logo */}
        <Link 
          to={`/${locale || 'vi'}`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="pointer-events-auto cursor-pointer flex items-center gap-3 lg:gap-4 shrink-0"
        >
          {/* Crop out the black text from the original wide image to just show the logo symbol */}
          <div className="h-14 w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 overflow-hidden rounded-full shrink-0 flex items-center justify-center">
            <img 
              src={logoUrl} 
              alt="Tan Phuong Nam Logo" 
              className="h-full max-w-none w-auto object-cover object-left" 
            />
          </div>
          <div className="flex flex-col justify-center mt-1 whitespace-nowrap">
            <span className="text-white text-base lg:text-lg xl:text-2xl font-serif tracking-widest leading-none font-bold text-center lg:text-left">TAN PHUONG NAM</span>
            <span className="text-white text-[10px] lg:text-xs xl:text-sm font-serif tracking-[0.2em] leading-none mt-1 lg:mt-1.5 text-center lg:text-left">GALAXY HOTEL</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center space-x-4 lg:space-x-5 xl:space-x-8">
          {navAnchors.map((anchor, index) => {
            const isGallery = anchor === 'gallery';
            const isRooms = anchor === 'rooms';
            const isCulinary = anchor === 'culinary';
            const isOffer = anchor === 'offer';
            const isServices = anchor === 'services';
            
            let targetPath = `/${locale}`;
            let targetHash = `#${anchor}`;
            
            if (isGallery) {
              targetPath = `/${locale}/gallery`;
              targetHash = '';
            } else if (isRooms) {
              targetPath = `/${locale}/rooms`;
              targetHash = '';
            } else if (isCulinary) {
              targetPath = `/${locale}/culinary`;
              targetHash = '';
            } else if (isOffer) {
              targetPath = `/${locale}/offer`;
              targetHash = '';
            } else if (isServices) {
              targetPath = `/${locale}/services`;
              targetHash = '';
            }
            
            return (
              <Link
                key={anchor}
                to={`${targetPath}${targetHash}`}
                onClick={(e) => {
                  if (!isGallery && !isRooms && !isCulinary && !isOffer && !isServices && location.pathname === targetPath) {
                    const el = document.getElementById(anchor);
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                      // Update URL without jump
                      window.history.pushState({}, '', `${targetPath}#${anchor}`);
                    }
                  }
                }}
                className="text-white text-xs lg:text-[13px] xl:text-sm font-semibold tracking-wider xl:tracking-[0.1em] hover:text-[var(--color-gold)] transition-colors duration-300 uppercase whitespace-nowrap"
              >
                {translatedLinks[index]}
              </Link>
            );
          })}
        </div>

        {/* Right Section: I18n & Button (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 shrink-0">
          {/* Language Switcher Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-[var(--color-gold)] text-xs xl:text-sm font-bold tracking-widest uppercase focus:outline-none py-2">
              <span>{locale?.toUpperCase() || 'VI'}</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#111]/95 backdrop-blur-md shadow-xl border border-white/10 rounded flex flex-col py-1 min-w-[150px]">
                {LANGUAGES.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`relative w-full text-left px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors group/item shrink-0 ${locale === lang.code ? 'text-[var(--color-gold)] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                  >
                    <span className="relative z-10 inline-block transition-transform duration-300 group-hover/item:translate-x-1">{lang.short}</span>
                    {/* Animated Full Name */}
                    <span className="absolute left-10 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 pointer-events-none text-white whitespace-nowrap capitalize text-[11px] font-medium tracking-normal">
                      - {lang.full}
                    </span>
                  </button>
                ))}
              </div>
            </div>
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
              {navAnchors.map((anchor, index) => {
                const isGallery = anchor === 'gallery';
                const isRooms = anchor === 'rooms';
                const isCulinary = anchor === 'culinary';
                const isOffer = anchor === 'offer';
                const isServices = anchor === 'services';
                
                let targetPath = `/${locale}`;
                let targetHash = `#${anchor}`;
                
                if (isGallery) {
                  targetPath = `/${locale}/gallery`;
                  targetHash = '';
                } else if (isRooms) {
                  targetPath = `/${locale}/rooms`;
                  targetHash = '';
                } else if (isCulinary) {
                  targetPath = `/${locale}/culinary`;
                  targetHash = '';
                } else if (isOffer) {
                  targetPath = `/${locale}/offer`;
                  targetHash = '';
                } else if (isServices) {
                  targetPath = `/${locale}/services`;
                  targetHash = '';
                }

                return (
                  <Link
                    key={anchor}
                    to={`${targetPath}${targetHash}`}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (!isGallery && !isRooms && !isCulinary && !isOffer && !isServices && location.pathname === targetPath) {
                        const el = document.getElementById(anchor);
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState({}, '', `${targetPath}#${anchor}`);
                        }
                      }
                    }}
                    className="text-white text-sm font-semibold tracking-widest hover:text-[var(--color-gold)] transition-colors duration-300 uppercase block"
                  >
                    {translatedLinks[index]}
                  </Link>
                );
              })}
              
              <div className="pt-5 mt-2 border-t border-white/10 flex flex-col space-y-6">
                <div className="flex flex-col space-y-3 mt-2">
                  <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Language</span>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded border transition-all ${locale === lang.code ? 'border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold)]/10' : 'border-white/10 text-gray-400 hover:text-white bg-white/5'}`}
                      >
                         <span className="font-bold tracking-widest uppercase text-xs">{lang.short}</span>
                         <span className="text-[10px] opacity-70 tracking-normal capitalize">({lang.full})</span>
                      </button>
                    ))}
                  </div>
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
