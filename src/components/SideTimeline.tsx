import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const sections = ['home', 'about', 'rooms', 'testimonials', 'faq', 'contact'];

const SideTimeline = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const links = t('timelineNav.links', { returnObjects: true }) as string[];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      // Default to the first section if scrolled to the very top
      let newActiveSection = sections[0];
      
      for (const section of sections.slice().reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          newActiveSection = section;
          break;
        }
      }
      setActiveSection(newActiveSection);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    } else {
      // Fallback if section doesn't exist yet on page
      window.location.hash = id;
    }
  };

  return (
    <div className="fixed right-10 lg:right-12 xl:right-16 top-1/3 -translate-y-1/2 z-[60] hidden lg:flex flex-col py-8 pb-10">
      {/* Vertical Line placed absolutely to align with dots */}
      <div className="absolute right-[5px] top-12 bottom-12 w-[1px] bg-black/20 dark:bg-white/30"></div>

      <div className="flex flex-col space-y-8 relative">
        {sections.map((section, index) => {
          const isActive = activeSection === section;
          return (
            <div 
              key={section} 
              className="flex items-center justify-end group cursor-pointer"
              onClick={() => scrollTo(section)}
            >
              {/* Text Label */}
              <span 
                className={`mr-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  isActive 
                    ? 'text-[var(--color-gold)] opacity-100 translate-x-0' 
                    : 'text-white/80 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 group-hover:text-white'
                }`}
              >
                {links[index] || section}
              </span>

              {/* Dot */}
              <div 
                className={`relative flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 z-10 ${
                  isActive 
                    ? 'bg-[var(--color-gold)] shadow-[0_0_10px_var(--color-gold)] scale-125' 
                    : 'bg-white/60 group-hover:bg-white group-hover:scale-110'
                }`}
              >
                {/* Inner active dot center */}
                {isActive && (
                  <div className="absolute w-1.5 h-1.5 bg-[#111] rounded-full"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideTimeline;
