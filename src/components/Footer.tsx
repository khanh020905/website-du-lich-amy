import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = t('footer.links', { returnObjects: true }) as string[];

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden text-white pt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Main CTA Section (Inspired by the provided layout) */}
        <div className="flex flex-col items-center justify-center pt-4 pb-24 text-center">
          <h2 
            className="text-4xl md:text-6xl font-serif font-bold tracking-normal italic mb-6 max-w-3xl leading-tight text-white"
            dangerouslySetInnerHTML={{ __html: t('footer.title') }}
          />
          <p className="text-sm md:text-base text-gray-400 max-w-2xl text-center mb-10 font-sans leading-relaxed">
            {t('footer.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[var(--color-gold)] text-[#0A0A0A] px-8 py-3.5 rounded-2xl text-sm font-bold tracking-wide hover:bg-[var(--color-gold-hover)] transition-colors shadow-lg">
              {t('footer.bookNow')}
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-2xl text-sm font-bold tracking-wide hover:bg-white/10 transition-colors">
              {t('footer.pricing')}
            </button>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="flex flex-col items-center justify-center pt-8 pb-12">
          <h5 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">
            {t('footer.trustedBy')}
          </h5>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            <span className="text-sm md:text-base font-serif font-bold tracking-widest text-[var(--color-gold)]">MICHELIN</span>
            <span className="text-sm md:text-base font-serif font-bold tracking-widest text-white">FORBES</span>
            <span className="text-sm md:text-base font-serif font-bold tracking-widest text-[var(--color-gold)]">CONDE NAST</span>
            <span className="text-sm md:text-base font-serif font-bold tracking-widest text-white">TRIPADVISOR</span>
            <span className="text-sm md:text-base font-serif font-bold tracking-widest text-[var(--color-gold)]">LUXURY</span>
          </div>
        </div>
        
      </div>

      {/* Huge Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="text-[25vw] leading-none font-serif font-bold text-white/[0.03] tracking-tighter whitespace-nowrap">
          amytourist
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 pb-12 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-4">
          
          {/* Copyright */}
          <div 
            className="text-[10px] font-bold text-gray-500 tracking-widest leading-loose text-center lg:text-left uppercase"
            dangerouslySetInnerHTML={{ __html: t('footer.copyright').replace('2026', new Date().getFullYear().toString()) }}
          />

          {/* Center links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
             {footerLinks && footerLinks.map((link, idx) => (
                <a key={idx} href="#" className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
             ))}
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-8">
             <a href="#" className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
               <div className="bg-gray-400 rounded-sm transition-colors flex items-center justify-center leading-none px-1 py-0.5">
                 <span className="font-sans text-[10px] font-extrabold text-[#0A0A0A] lowercase">in</span>
               </div> 
               LINKEDIN
             </a>
             <a href="#" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
               <span className="text-sm pb-1 font-sans">𝕏</span> TWITTER
             </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
