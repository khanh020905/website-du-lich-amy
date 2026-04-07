import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wine, FileText, ChevronRight } from 'lucide-react';

const Culinary = () => {
  const { t } = useTranslation();
  const [activeMenuModal, setActiveMenuModal] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // High-quality placeholder images for fine dining
  const galleryImages = [
    'https://neworienthoteldanang.com/wp-content/uploads/2023/09/Bistecca-1.jpg',
    'https://neworienthoteldanang.com/wp-content/uploads/2023/09/Bistecca8.jpg',
    'https://neworienthoteldanang.com/wp-content/uploads/2023/09/Bistecca4.jpg',
    'https://neworienthoteldanang.com/wp-content/uploads/2023/09/dining7-1.jpg',
    'https://neworienthoteldanang.com/wp-content/uploads/2023/12/DLT_0101-scaled.jpg',
    'https://neworienthoteldanang.com/wp-content/uploads/2023/12/Bistecca-5-scaled.jpg',
    '/assets/luxury_gourmet.png'
  ];

  return (
    <>
      {/* Cinematic Header */}
      <div className="relative pt-40 pb-32 flex flex-col items-center justify-center px-4 overflow-hidden shadow-2xl min-h-[60vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: 'url("https://neworienthoteldanang.com/wp-content/uploads/2023/09/Bistecca-1.jpg")' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111]/90 via-[#111]/70 to-[#111]"></div>
        <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]"></div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-gold)] mb-6 text-center"
        >
          {t('culinary.label')}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 text-4xl md:text-6xl font-serif text-white font-semibold tracking-wide drop-shadow-2xl text-center"
        >
          {t('culinary.title')}
        </motion.h2>
      </div>

      {/* Main Content Area */}
      <div className="bg-white text-gray-800 py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Description Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="w-16 h-0.5 bg-[var(--color-gold)] mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-serif text-[#111] leading-tight">
              {t('culinary.exploreMenu')}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg font-light text-justify">
              {t('culinary.description')}
            </p>
            
            {/* Menu Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => setActiveMenuModal('main')}
                className="group relative flex items-center justify-between px-8 py-4 bg-[#111] text-white overflow-hidden transition-all hover:bg-[#222]"
              >
                <div className="absolute inset-0 w-0 bg-[var(--color-gold)] transition-all duration-500 ease-out group-hover:w-full opacity-10"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <FileText size={20} className="text-[var(--color-gold)]" />
                  <span className="font-semibold tracking-widest uppercase text-sm">{t('culinary.mainMenu')}</span>
                </div>
                <ChevronRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => setActiveMenuModal('beverage')}
                className="group relative flex items-center justify-between px-8 py-4 border border-[#111] text-[#111] overflow-hidden transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                <div className="absolute inset-0 w-0 bg-[var(--color-gold)] transition-all duration-500 ease-out group-hover:w-full opacity-5"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <Wine size={20} />
                  <span className="font-semibold tracking-widest uppercase text-sm">{t('culinary.beverageMenu')}</span>
                </div>
                <ChevronRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="pt-8">
               <button className="border-b-2 border-[var(--color-gold)] text-[#111] pb-1 font-bold tracking-widest uppercase text-sm hover:text-[var(--color-gold)] transition-colors">
                 {t('culinary.bookTable')}
               </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
              <img 
                src="https://neworienthoteldanang.com/wp-content/uploads/2023/09/Bistecca-1.jpg" 
                alt="Fine Dining" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-[var(--color-gold)] z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-[var(--color-gold)] z-[-1]"></div>
          </motion.div>
        
        </div>
      </div>

      {/* Image Gallery Grid - Masonry style fix */}
      <div className="bg-[#f9f9f9] py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          >
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index} 
                layoutId={`gallery-image-${index}`}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                onClick={() => setZoomedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Restaurant Gallery ${index + 1}`} 
                  className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white border border-white/50 px-4 py-2 uppercase text-[10px] tracking-widest backdrop-blur-sm">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Zoom Lightbox Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={zoomedImage}
              alt="Zoomed Gallery Image"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image itself
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury "Coming Soon" Modal */}
      <AnimatePresence>
        {activeMenuModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMenuModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#111] border border-[var(--color-gold)]/30 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Background Texture/Image for Modal */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/90 to-transparent"></div>

              {/* Close Button */}
              <button 
                onClick={() => setActiveMenuModal(null)}
                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-[var(--color-gold)] transition-colors p-2"
              >
                <X size={24} />
              </button>

              <div className="relative z-10 p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[400px]">
                <motion.div 
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-16 h-16 border border-[var(--color-gold)] rounded-full flex items-center justify-center mb-8"
                >
                  <div className="w-12 h-12 border border-[var(--color-gold)]/50 rounded-full flex items-center justify-center">
                    {activeMenuModal === 'main' ? <FileText size={20} className="text-[var(--color-gold)]" /> : <Wine size={20} className="text-[var(--color-gold)]" />}
                  </div>
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide">
                  {t('culinary.comingSoon')}
                </h3>
                
                <div className="w-12 h-0.5 bg-[var(--color-gold)] my-6"></div>
                
                <p className="text-gray-300 leading-relaxed font-light text-lg max-w-md">
                  {t('culinary.comingSoonDesc')}
                </p>
                
                <button 
                  onClick={() => setActiveMenuModal(null)}
                  className="mt-10 px-8 py-3 outline outline-1 outline-[var(--color-gold)] text-[var(--color-gold)] uppercase tracking-widest text-xs font-bold hover:bg-[var(--color-gold)] hover:text-[#111] transition-all duration-300"
                >
                  {t('culinary.close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Culinary;
