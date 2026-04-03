import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

// Create a custom marker icon to avoid the broken shadow issue in React + Leaflet default setups
const customIcon = new L.DivIcon({
  className: 'custom-map-marker',
  html: `<div style="background-color: #D4AF37; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

// Interceptor hook to dynamically control zooming
const MapScrollEnabler = () => {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.metaKey) map.scrollWheelZoom.enable();
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.metaKey) map.scrollWheelZoom.disable();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [map]);

  return null;
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  const footerLinks = t('footer.links', { returnObjects: true }) as string[];
  
  // Coordinates for 180 Bạch Đằng
  const hotelPosition: [number, number] = [16.0716, 108.2238];

  // Map Message State
  const [showMapMessage, setShowMapMessage] = useState(false);
  const mapMsgTimeout = useRef<number | null>(null);

  const isVi = i18n.language ? i18n.language.startsWith('vi') : true;

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden text-white pt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-24 text-left">
          
          {/* Cột 1: Thông tin liên hệ */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-gold)] mb-4 uppercase">
              TÂN PHƯƠNG NAM GALAXY HOTEL
            </h2>
            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="text-[var(--color-gold)] shrink-0 mt-1" size={20} />
                <span className="text-sm md:text-base leading-relaxed">
                  180 Bạch Đằng, Q. Hải Châu, Sơn Trà, Đà Nẵng
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[var(--color-gold)] shrink-0" size={20} />
                <span className="text-sm md:text-base">info@tanphuongnamgalaxy.com.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[var(--color-gold)] shrink-0" size={20} />
                <span className="text-sm md:text-base font-semibold">0236 3 668 886</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button className="flex items-center gap-2 bg-[var(--color-gold)] text-[#0A0A0A] px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide hover:bg-[var(--color-gold-hover)] transition-colors">
                  <MessageCircle size={16} /> CHAT BOX
                </button>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide hover:bg-white/10 transition-colors">
                  <MapPin size={16} /> GOOGLE MAP
                </button>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide hover:bg-white/10 transition-colors">
                  <MessageCircle size={16} /> ZALO
                </button>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg> FACEBOOK
                </button>
              </div>
            </div>
          </div>

          {/* Cột 2: Tiện ích & Khoảng cách */}
          <div className="flex flex-col gap-6 md:pl-16">
            <h3 className="text-lg md:text-xl font-serif font-semibold text-white mb-4 uppercase tracking-widest border-b border-white/10 pb-4">
              Vị trí đắc địa
            </h3>
            <div className="flex flex-col gap-5 text-gray-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)]" size={18} />
                  <span className="text-sm md:text-base font-medium">Cầu Sông Hàn</span>
                </div>
                <span className="text-sm font-bold text-[var(--color-gold)]">200m</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)]" size={18} />
                  <span className="text-sm md:text-base font-medium">Chợ Hàn</span>
                </div>
                <span className="text-sm font-bold text-[var(--color-gold)]">50m</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)]" size={18} />
                  <span className="text-sm md:text-base font-medium">Cầu Rồng</span>
                </div>
                <span className="text-sm font-bold text-[var(--color-gold)]">300m</span>
              </div>
              <div className="flex items-center justify-between border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)]" size={18} />
                  <span className="text-sm md:text-base font-medium">Biển Mỹ Khê</span>
                </div>
                <span className="text-sm font-bold text-[var(--color-gold)]">2 km</span>
              </div>
            </div>

            {/* Satellite Map Integration */}
            <div 
              className="mt-4 overflow-hidden rounded-xl h-[300px] w-full shadow-2xl relative z-10 border border-white/10"
              onWheel={(e) => {
                // If they don't hold ctrl or meta, gently prompt them
                if (!e.ctrlKey && !e.metaKey) {
                  setShowMapMessage(true);
                  if (mapMsgTimeout.current) window.clearTimeout(mapMsgTimeout.current);
                  mapMsgTimeout.current = window.setTimeout(() => setShowMapMessage(false), 2000);
                }
              }}
            >
              
              {/* Interaction Blocker/Prompt */}
              <div 
                className={`absolute inset-0 bg-[#0A0A0A]/60 flex items-center justify-center p-4 text-center pointer-events-none transition-opacity duration-300 z-[999] ${showMapMessage ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="text-white font-sans text-sm md:text-lg tracking-wide bg-black/40 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                  {isVi ? 'Dùng Ctrl + Cuộn chuột để phóng to bản đồ' : 'Use Ctrl + Scroll to zoom the map'}
                </div>
              </div>

              <MapContainer 
                center={hotelPosition} 
                zoom={14} 
                scrollWheelZoom={false} 
                attributionControl={false}
                className="h-full w-full"
                // Adding a z-index lower than absolute dropdowns to ensure stability
                style={{ zIndex: 0 }}
              >
                <MapScrollEnabler />
                
                {/* Google Maps Hybrid (Satellite with Street Details) */}
                <TileLayer
                  url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                />
                <Marker position={hotelPosition} icon={customIcon}>
                  <Popup>
                    <div className="text-center font-sans">
                      <div className="font-bold text-[#D4AF37] text-sm">TPN Galaxy</div>
                      <div className="text-xs text-gray-600 mt-1">180 Bạch Đằng</div>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            
          </div>

          
        </div>
        
      </div>

      {/* Huge Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="text-[25vw] leading-none font-serif font-bold text-white/[0.03] tracking-tighter whitespace-nowrap">
          tanphuongnam
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
