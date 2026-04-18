import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import logoUrl from '../assets/logo-finalll.png';

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
            <div className="flex items-center gap-4 mb-6">
              {/* Crop out the black text from the original wide image to just show the logo symbol */}
              <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 overflow-hidden rounded-full shrink-0 flex items-center justify-center">
                 <img src={logoUrl} alt="Tan Phuong Nam Logo" className="h-full max-w-none w-auto object-cover object-left" />
              </div>
              <h2 className="flex flex-col justify-center text-white uppercase mt-1 whitespace-nowrap">
                <span className="text-lg md:text-xl lg:text-2xl font-serif tracking-[0.1em] lg:tracking-widest leading-none font-bold text-center lg:text-left">TAN PHUONG NAM</span>
                <span className="text-xs md:text-sm lg:text-[15px] font-serif tracking-[0.2em] leading-none mt-1 lg:mt-1.5 text-center lg:text-left">GALAXY HOTEL</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#B0B0B0] mb-8">
              Hoạt động trong lĩnh vực lưu trú và dịch vụ du lịch cao cấp, TPN Galaxy đặt mục tiêu trở thành nhà cung cấp các trải nghiệm nghỉ dưỡng 4 sao hàng đầu tại trung tâm Đà Nẵng.
            </p>
            <div className="flex flex-wrap items-center gap-4">
               {/* Fixed badget imitating the red Bộ Công Thương badge - now blue */}
               <div className="bg-blue-600 rounded text-white text-[10px] font-bold px-3 py-1 flex items-center shadow-lg">
                 <span className="mr-1 inline-block bg-white rounded-full w-3 h-3 text-blue-600 text-[8px] flex items-center justify-center pl-[2.5px] pt-[0px]">✔</span> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
               </div>
               {/* Facebook & Zalo badges */}
               <div className="bg-[#1877F2] text-white rounded flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-white hover:text-[#1877F2] transition-colors">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                 </svg>
               </div>
               <div className="bg-[#0068FF] text-white px-3 rounded flex items-center justify-center h-8 cursor-pointer hover:bg-white hover:text-[#0068FF] transition-colors">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 -my-2 mr-0.5">
                   <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z"/>
                 </svg>
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
            <h3 className="text-base font-bold text-white mb-6">Công ty TNHH Đầu tư và Tổng hợp Tân Phương Nam</h3>
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
