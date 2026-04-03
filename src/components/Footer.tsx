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
    <footer className="bg-[#1A1A1A] relative text-gray-300 pt-12 pb-0 font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Top Navbar */}
        <div className="border-b border-[#333333] pb-8 mb-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide text-[#EAEAEA]">
             {/* Using the nav translation items as our top bar */}
             <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Trang chủ</a>
             <a href="#about" className="hover:text-[var(--color-gold)] transition-colors">Giới thiệu</a>
             <a href="#rooms" className="hover:text-[var(--color-gold)] transition-colors">Hạng Phòng</a>
             <a href="#suites" className="hover:text-[var(--color-gold)] transition-colors">Suites</a>
             <a href="#services" className="hover:text-[var(--color-gold)] transition-colors">Dịch vụ & Tiện ích</a>
             <a href="#testimonials" className="hover:text-[var(--color-gold)] transition-colors">Khách hàng Đánh giá</a>
             <a href="#gallery" className="hover:text-[var(--color-gold)] transition-colors">Thư viện Ảnh</a>
          </div>
        </div>

        {/* 3 Columns Layout (LAMY HOUSE style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Cột 1: Logo & Giới thiệu */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              {/* Fake geometric logo inspired by the reference */}
              <div className="text-[var(--color-gold)]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83z" />
                   <path d="M12 10.5l-3.5 5h7l-3.5-5z" />
                </svg>
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-black text-white tracking-widest uppercase">
                TÂN PHƯƠNG NAM<span className="text-[var(--color-gold)] font-serif italic font-normal ml-1.5 md:ml-2">Galaxy</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#B0B0B0] mb-8">
              Hoạt động trong lĩnh vực lưu trú và dịch vụ du lịch cao cấp, TPN Galaxy đặt mục tiêu trở thành nhà cung cấp các trải nghiệm nghỉ dưỡng 4 sao hàng đầu tại trung tâm Đà Nẵng.
            </p>
            <div className="flex flex-wrap items-center gap-4">
               {/* Fixed badget imitating the red Bộ Công Thương badge */}
               <div className="bg-red-600 rounded text-white text-[10px] font-bold px-3 py-1 flex items-center shadow-lg">
                 <span className="mr-1 inline-block bg-white rounded-full w-3 h-3 text-red-600 text-[8px] flex items-center justify-center">✔</span> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
               </div>
               {/* Facebook & Zalo badges */}
               <div className="bg-[#1877F2] text-white p-1.5 rounded flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-white hover:text-[#1877F2] transition-colors">
                 <span className="text-lg font-bold font-serif -mt-1 leading-none">f</span>
               </div>
               <div className="bg-[#0068FF] text-white p-1.5 px-3 rounded flex items-center justify-center h-8 cursor-pointer hover:bg-white hover:text-[#0068FF] transition-colors">
                 <span className="text-xs font-bold">Zalo</span>
               </div>
               {i18n.language !== 'vi' && (
                 <div className="bg-green-500 text-white p-1.5 px-3 rounded flex items-center justify-center h-8 cursor-pointer hover:bg-white hover:text-green-500 transition-colors">
                   <span className="text-xs font-bold">Line</span>
                 </div>
               )}
            </div>
          </div>

          {/* Cột 2: Thông tin công ty */}
          <div className="flex flex-col pt-1 md:pl-8">
            <h3 className="text-base font-bold text-white mb-6">Công ty cổ phần Khách sạn TPN Galaxy</h3>
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
