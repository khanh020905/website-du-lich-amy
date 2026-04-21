import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn, View, Box } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import DomeGallery from './DomeGallery';
import ScrollAnimation from './ScrollAnimation';

const Gallery = () => {
  const { t } = useTranslation();
  const rawCategories = Array.from(new Set(galleryData.map(item => item.category)));

  // Custom sort according to specific business rules
  // Custom sort according to specific business rules
  const categoryPriority = [
    'Lobby',
    'Coffee lounge',
    'Nhà hàng The South',
    'Spa & Wellness',
    'Gym & Fitness',
    'Rooftop Swimming pool',
    'Meeting room',
    'Room'
  ];

  // Force the tabs to perfectly match the user's priority order
  const categories = categoryPriority;
  
  const [viewMode, setViewMode] = useState<'normal' | 'dome'>('normal');
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');
  const [selectedImg, setSelectedImg] = useState<{image: string; category: string; title: string} | null>(null);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    let lastScrollValue = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollValue && currentScrollY > 100) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      lastScrollValue = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTitleCase = (text: string) => {
    return text.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const translateCategory = (cat: string) => {
    const translation = t(`gallery.filters.${cat}`, { defaultValue: cat });
    return formatTitleCase(translation);
  };

  // The Dome gallery relies on filteredImages. Let's just give it all images now that they are combined.
  const filteredImages = galleryData;

  const currentIndex = selectedImg ? galleryData.findIndex(img => img.image === selectedImg.image) : -1;

  const navigateImage = (direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex === -1) return;
    
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) newIndex = galleryData.length - 1;
    if (newIndex >= galleryData.length) newIndex = 0;
    
    setSelectedImg(galleryData[newIndex]);
  };

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const element = document.getElementById(`gallery-section-${cat}`);
    if (element) {
      // Dùng getBoundingClientRect() + window.scrollY để có toạ độ tuyệt đối so với toàn trang
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      const isScrollingDown = targetY > window.scrollY;
      
      // Tăng offset lên thêm 50px để chừa một khoảng trắng (breathing room) phía trên tiêu đề, 
      // tránh bề mặt chữ bị dính sát vào thành đổ bóng của Navbar
      const offset = isScrollingDown ? 130 : 230; 
      window.scrollTo({
        top: targetY - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen" id="gallery">
      {/* Dark Header Strip + Dropdown (Hyatt Style) */}
      <div className="relative pt-32 pb-0 flex flex-col items-center justify-center px-4 bg-black text-center z-30">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 text-4xl md:text-6xl font-serif text-white tracking-[0.2em] uppercase mb-12 mt-16 md:mt-18"
        >
          {t('gallery.title', 'BỘ SƯU TẬP')}
        </motion.h2>

            {/* Dome 3D Button - Sleek under the title */}
            <div className="mt-4 mb-10 flex justify-center w-full max-w-xs mx-auto relative z-10">
              <button
                  onClick={() => setViewMode('dome')}
                  className="w-full flex items-center justify-center gap-3 px-5 py-3 border border-[var(--color-gold)]/50 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black rounded-[4px]"
                >
                  <Box size={16} /> <span className="mt-[2px]">MỞ CHẾ ĐỘ DOME 3D</span>
              </button>
            </div>
      </div>

      {/* Sticky Tab Bar */}
      <div 
        className={`sticky z-40 w-full bg-black/95 backdrop-blur-md border-b-[6px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] pt-5 pb-4 -mt-[1px] transition-all duration-400 ease-out ${
           isNavbarHidden ? 'top-0' : 'top-[80px] lg:top-[90px]'
        }`}
      >
        {/* Pointer Arrow pointing to white section - Moved to sticky tabs */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white z-20"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto hidden-scrollbar gap-3 pb-2 snap-x">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className={`flex-none px-6 py-2.5 border rounded-[4px] text-xs md:text-sm uppercase tracking-widest font-medium transition-all duration-300 snap-center ${
                  activeCategory === cat 
                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                    : 'border-white/20 text-gray-300 hover:border-white/50 hover:text-white'
                }`}
              >
                {translateCategory(cat)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Light Content Section */}
      <div className="bg-white px-4 md:px-12 pt-24 pb-32 min-h-screen relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-24">
          
          {categories.map((category) => {
            const rawCategoryImages = galleryData.filter(item => item.category === category);
            if (rawCategoryImages.length === 0) {
              return (
                <div key={category} id={`gallery-section-${category}`} className="scroll-mt-32">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-serif text-black mb-12 font-bold"
                  >
                    {translateCategory(category)}
                  </motion.h3>
                  <div className="w-full h-64 flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-sm">
                    <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Đang cập nhật hình ảnh...</p>
                  </div>
                </div>
              );
            }

            // Automatically hide the last image if the total count is odd (to prevent gap issues without stretching)
            // Exception: If there is ONLY 1 image, we keep it.
            const categoryImages = rawCategoryImages.length > 1 && rawCategoryImages.length % 2 !== 0 
                ? rawCategoryImages.slice(0, -1) 
                : rawCategoryImages;

            return (
              <div key={category} id={`gallery-section-${category}`} className="scroll-mt-32">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-serif text-black mb-12 font-bold"
                >
                  {translateCategory(category)}
                </motion.h3>

                {/* Strict 2-Column Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {categoryImages.map((item, idx) => (
                      <ScrollAnimation
                        direction="up"
                        viewport={{ amount: 0.05, once: true, margin: "0px 0px 50px 0px" }}
                        key={item.image + idx}
                        className={`relative overflow-hidden group cursor-pointer w-full bg-gray-100 ${
                          categoryImages.length === 1 
                            ? 'md:col-span-2 aspect-[16/10] md:aspect-[21/9]' 
                            : 'aspect-[16/10]'
                        }`}
                        onClick={() => setSelectedImg(item)}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-[1.5s] group-hover:scale-[1.03] ease-out"
                          loading="lazy"
                        />
                      </ScrollAnimation>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-[#111]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
              onClick={() => setSelectedImg(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/50 hover:text-[var(--color-gold)] transition-colors p-2 z-[110]"
                onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              >
                <X size={40} strokeWidth={1} />
              </button>
              
              <div 
                className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: "spring", damping: 30 }}
                  className="relative shadow-2xl flex items-center justify-center w-full"
                >
                  {/* Left Arrow */}
                  <button
                    onClick={(e) => navigateImage('prev', e)}
                    className="absolute left-0 md:-left-16 p-4 text-white/50 hover:text-white transition-colors"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>

                  <img
                    src={selectedImg.image}
                    alt={selectedImg.title}
                    className="w-auto h-auto max-h-[85vh] object-contain select-none"
                    onClick={(e) => navigateImage('next', e)}
                  />

                  {/* Right Arrow */}
                  <button
                    onClick={(e) => navigateImage('next', e)}
                    className="absolute right-0 md:-right-16 p-4 text-white/50 hover:text-white transition-colors"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, bottom: -20 }}
                  animate={{ opacity: 1, bottom: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-white font-serif text-xl tracking-[0.2em]">{translateCategory(selectedImg.category)}</h3>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Fullscreen 3D Dome Overlay */}
      <AnimatePresence>
        {viewMode === 'dome' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[120] bg-[#0a0a0a]"
          >
            <button 
              onClick={() => setViewMode('normal')}
              className="absolute top-6 right-6 z-[130] text-gray-400 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full backdrop-blur-md transition-all shadow-xl"
            >
              <X size={32} />
            </button>
            <div className="w-full h-full relative">
              <DomeGallery
                images={filteredImages.map(img => ({ src: img.image, alt: translateCategory(img.title) }))}
                fit={0.8}
                minRadius={600}
                maxVerticalRotationDeg={0}
                segments={34}
                dragDampening={2}
                grayscale={false}
                overlayBlurColor="#0a0a0a"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
