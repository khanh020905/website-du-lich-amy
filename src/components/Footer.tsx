import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import logoUrl from '../assets/logo-finalll.png';
import bctLogo from '../assets/logo-btc-final.png';

// Create a custom marker icon containing the TPN Galaxy logo
const customIcon = new L.DivIcon({
  className: 'custom-map-marker',
  html: `<div style="background-color: white; border-radius: 50%; border: 2px solid #D4AF37; box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; width: 50px; height: 50px;"><img src="${logoUrl}" style="width: 42px; height: 42px; object-fit: contain; pointer-events: none; border-radius: 50%;" alt="TPN Galaxy" /></div>`,
  iconSize: [50, 50],
  iconAnchor: [25, 25],
  popupAnchor: [0, -25],
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

const LocationMarker = ({ position, icon }: { position: [number, number], icon: any }) => {
  const map = useMap();
  return (
    <Marker 
      position={position} 
      icon={icon}
      eventHandlers={{
        click: () => {
          map.flyTo(position, 18, { duration: 1.5 });
        }
      }}
    >
      <Popup>
        <div className="text-center font-sans">
          <div className="font-bold text-[#D4AF37] text-sm">TPN Galaxy</div>
          <div className="text-xs text-gray-600 mt-1">180 Bạch Đằng</div>
        </div>
      </Popup>
    </Marker>
  );
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
    <footer className="bg-[#1A1A1A] relative text-gray-300 pt-12 pb-0 font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        


        {/* 3 Columns Layout (LAMY HOUSE style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Cột 1: Logo & Giới thiệu */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:items-center lg:text-center">
            <div className="flex flex-col items-center gap-4 mb-6">
              {/* Crop out the black text from the original wide image to just show the logo symbol */}
              <div className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 overflow-hidden rounded-full shrink-0 flex items-center justify-center">
                 <img src={logoUrl} alt="Tan Phuong Nam Logo" className="h-full max-w-none w-auto object-cover object-left" />
              </div>
              <h2 className="flex flex-col justify-center text-white uppercase mt-1 whitespace-nowrap">
                <span className="text-lg md:text-xl lg:text-2xl font-serif tracking-[0.1em] lg:tracking-widest leading-none font-bold text-center">TAN PHUONG NAM</span>
                <span className="text-xs md:text-sm lg:text-[15px] font-serif tracking-[0.2em] leading-none mt-1 lg:mt-1.5 text-center">GALAXY HOTEL</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#B0B0B0] mb-8">
              Hoạt động trong lĩnh vực lưu trú và dịch vụ du lịch cao cấp, TPN Galaxy đặt mục tiêu trở thành nhà cung cấp các trải nghiệm nghỉ dưỡng 4 sao hàng đầu tại trung tâm Đà Nẵng.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-4 opacity-70">
               {/* Facebook */}
               <a href="https://www.facebook.com/share/1CR7rVXhSa/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                 </svg>
               </a>
               {/* Instagram */}
               <a href="https://www.instagram.com/tanphuongnamgalaxyhoteldanang?igsh=c2N4bmUwaGE0YzV1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer">
                 <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-[20px] h-[20px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
               {/* Twitter */}
               <a href="#" className="hover:text-white transition-colors cursor-pointer">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]">
                   <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                 </svg>
               </a>
               {/* TikTok */}
               <a href="#" className="hover:text-white transition-colors cursor-pointer flex items-center">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] mt-[1px]">
                   <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                 </svg>
               </a>
               {/* Linkedin */}
               <a href="#" className="hover:text-white transition-colors cursor-pointer">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                 </svg>
               </a>
            </div>
          </div>

          {/* Cột 2: Thông tin công ty */}
          <div className="flex flex-col pt-1 md:pl-8">
            <h3 className="text-base font-bold text-white mb-6">Công ty TNHH Đầu tư Tổng hợp Tân Phương Nam</h3>
            <div className="flex flex-col gap-5 text-sm text-[#B0B0B0]">
               <div className="flex items-start gap-4">
                 <MapPin className="text-[var(--color-gold)] shrink-0 mt-0.5" size={18} />
                 <span>180 Bạch Đằng, phường Hải Châu, quận Hải Châu, Đà Nẵng, Vietnam</span>
               </div>
               <div className="flex items-center gap-4">
                 <Phone className="text-[var(--color-gold)] shrink-0" size={18} />
                 <span className="text-[var(--color-gold)] font-bold">0236 3 668 886 <span className="text-[#B0B0B0] font-normal mx-1">-</span> 0236 3 668 886</span>
               </div>
               <div className="flex items-center gap-4">
                 <Mail className="text-[var(--color-gold)] shrink-0" size={18} />
                 <span>info@tanphuongnamgalaxy.com.vn</span>
               </div>
            </div>
          </div>

          {/* Cột 3: Vị trí đắc địa */}
          <div className="flex flex-col pt-1 pr-14 md:pr-20 lg:pr-24">
            <h3 className="text-base font-bold text-white mb-6 uppercase">Vị trí đắc địa</h3>
            <div className="flex flex-col gap-5 text-sm text-[#B0B0B0]">
              
              <div className="flex items-center justify-between border-b border-[#333333] pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)] shrink-0" size={16} />
                  <span className="font-medium">Cầu Sông Hàn</span>
                </div>
                <span className="font-bold text-[var(--color-gold)]">200m</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-[#333333] pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)] shrink-0" size={16} />
                  <span className="font-medium">Chợ Hàn</span>
                </div>
                <span className="font-bold text-[var(--color-gold)]">50m</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-[#333333] pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)] shrink-0" size={16} />
                  <span className="font-medium">Cầu Rồng</span>
                </div>
                <span className="font-bold text-[var(--color-gold)]">300m</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-[#333333] pb-4">
                <div className="flex items-center gap-3">
                  <Navigation className="text-[var(--color-gold)] shrink-0" size={16} />
                  <span className="font-medium">Biển Mỹ Khê</span>
                </div>
                <span className="font-bold text-[var(--color-gold)]">2 km</span>
              </div>

            </div>
          </div>

        </div>

        {/* MAP SECTION DEDICATED (Option 2) */}
        <div 
          className="mt-4 overflow-hidden rounded-xl h-[200px] w-full shadow-2xl relative z-10 border border-[#333333] mb-8"
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
            <LocationMarker position={hotelPosition} icon={customIcon} />
          </MapContainer>
        </div>

        {/* BỘ CÔNG THƯƠNG BADGE BELOW MAP */}
        <div className="flex justify-start mb-8 relative z-10 w-full px-2">
           <a href="http://online.gov.vn/" target="_blank" rel="noreferrer" className="block hover:opacity-90 transition-opacity">
            <img src={bctLogo} alt="Đã thông báo Bộ Công Thương" className="h-[70px] md:h-[140px] w-auto drop-shadow-md" />
           </a>
        </div>
      </div>
      
      {/* Bottom Copy Right bar */}
      <div className="bg-[#111111] py-5 border-t border-[#333333]/50">
         <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col justify-center items-center md:items-start text-xs text-[#808080]">
            <p>© Bản quyền thuộc về <span className="font-bold text-[var(--color-gold)]">Duo Tech Company</span> | Cung cấp bởi Duo Tech</p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
