import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30"></div>

      {/* Play Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-20"
      >
        <button className="w-24 h-24 rounded-full border border-white/40 flex items-center justify-center group hover:border-white hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play size={24} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default VideoSection;
