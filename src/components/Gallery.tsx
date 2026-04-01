import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn, View, Box } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import DomeGallery from './DomeGallery';
import ScrollAnimation from './ScrollAnimation';

const Gallery = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'normal' | 'dome'>('normal');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImg, setSelectedImg] = useState<{image: string; category: string; title: string} | null>(null);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(galleryData.map(item => item.category)))];

  const filteredImages = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section className="bg-gray-50/50 min-h-screen" id="gallery">
      {/* Dark Cinematic Header for Navbar compatibility */}
      <div className="relative pt-40 pb-20 bg-[#111] flex flex-col items-center justify-center px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-gold)] mb-6"
        >
          Khám phá / Explore
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-white font-semibold tracking-wide"
        >
          Thư Viện Ảnh
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-16 pb-24">
        {/* Controls Container */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 p-1.5 rounded-full">
            <button
              onClick={() => setViewMode('normal')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                viewMode === 'normal' ? 'bg-white shadow-md text-gray-800' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <View size={16} /> Grid
            </button>
            <button
              onClick={() => setViewMode('dome')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                viewMode === 'dome' ? 'bg-[#111] shadow-md text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Box size={16} /> Dome 3D
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-500 border whitespace-nowrap
                  ${activeCategory === category 
                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-white shadow-[0_4px_15px_rgba(198,168,124,0.3)]' 
                    : 'border-gray-200 text-gray-500 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, idx) => (
              <ScrollAnimation
                direction="up"
                viewport={{ amount: 0.05, once: true, margin: "0px 0px 50px 0px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.image + idx}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid rounded-sm shadow-sm"
                onClick={() => setSelectedImg(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-[1s]"
                  loading="lazy"
                />
                
                {/* Dark Overlay with Serif Text */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <ZoomIn className="text-[var(--color-gold)] mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500" size={36} strokeWidth={1} />
                  <h4 className="text-white font-serif text-xl sm:text-3xl tracking-wider text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                </div>
              </ScrollAnimation>
            ))}
          </AnimatePresence>
        </motion.div>

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
                  className="relative shadow-2xl"
                >
                  <img
                    src={selectedImg.image}
                    alt={selectedImg.title}
                    className="w-auto h-auto max-h-[75vh] object-contain"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, bottom: -20 }}
                  animate={{ opacity: 1, bottom: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-8 text-center"
                >
                  <h3 className="text-[var(--color-gold)] font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase">{selectedImg.title}</h3>
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
                images={filteredImages.map(img => ({ src: img.image, alt: img.title }))}
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
