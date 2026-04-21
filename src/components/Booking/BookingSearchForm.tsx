import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, Tag, Plus, Minus, Trash2 } from 'lucide-react';

const BookingSearchForm = () => {
  const { t, i18n } = useTranslation();
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  
  // Date State
  const [startDate, setStartDate] = useState<Date | null>(new Date(2026, 3, 26));
  const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 3, 29));
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  
  // Guest State
  const [roomConfigs, setRoomConfigs] = useState([{ id: 1, adults: 2 }]);
  const totalRooms = roomConfigs.length;
  const totalAdults = roomConfigs.reduce((sum, room) => sum + room.adults, 0);

  const addRoom = () => {
    const nextId = roomConfigs.length > 0 ? Math.max(...roomConfigs.map(r => r.id)) + 1 : 1;
    setRoomConfigs([...roomConfigs, { id: nextId, adults: 2 }]);
  };

  const updateRoomAdults = (id: number, delta: number) => {
    setRoomConfigs(roomConfigs.map(r => 
      r.id === id ? { ...r, adults: Math.max(1, r.adults + delta) } : r
    ));
  };

  const removeRoom = (id: number) => {
    if (roomConfigs.length > 1) {
       setRoomConfigs(roomConfigs.filter(r => r.id !== id));
    }
  };
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
        setIsGuestOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDateLabel = () => {
    const locale = i18n.language === 'vi' ? 'vi-VN' : 
                   i18n.language === 'ko' ? 'ko-KR' : 
                   i18n.language === 'zh' ? 'zh-CN' : 'en-GB';
    
    if (startDate && endDate) {
       const sStr = startDate.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' });
       const eStr = endDate.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' });
       return `${sStr} \u2192 ${eStr}`;
    } else if (startDate) {
       const sStr = startDate.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' });
       return `${sStr} \u2192 ${t('booking.checkout', 'Checkout')}`;
    }
    return t('booking.selectDates', 'Select Dates');
  }

  const getMonthYear = (year: number, month: number) => {
    const date = new Date(year, month);
    const locale = i18n.language === 'vi' ? 'vi-VN' : 
                   i18n.language === 'ko' ? 'ko-KR' : 
                   i18n.language === 'zh' ? 'zh-CN' : 'en-GB';
    return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  }

  const renderCalendarMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    
    // Mock today (matching user screenshot)
    const today = new Date(2026, 3, 21); 
    
    // Padding
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="opacity-0"></div>);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const curDate = new Date(year, month, i);
      const isPast = curDate < today;
      const isToday = curDate.getTime() === today.getTime();
      
      const isStart = startDate && curDate.getTime() === startDate.getTime();
      const isEnd = endDate && curDate.getTime() === endDate.getTime();
      
      const isHoverRange = startDate && !endDate && hoverDate && curDate > startDate && curDate <= hoverDate;
      const isSelectedRange = startDate && endDate && curDate > startDate && curDate < endDate;
      const isRange = isHoverRange || isSelectedRange;
      
      let baseClass = "flex items-center justify-center py-2 h-9 cursor-pointer relative z-10 transition-colors text-[14px] font-bold ";
      let wrapperClass = "relative "; // to handle background connection without gaps
      
      if (isPast) {
        baseClass += "text-[#B0BCC5] line-through cursor-not-allowed ";
      } else if (isStart) {
        baseClass += "bg-[#D4AF37] text-white rounded ";
        if (endDate || hoverDate) {
           wrapperClass += "bg-[#D4AF37]/20 rounded-l ";
           baseClass += "rounded-r-none ";
        }
      } else if (isEnd) {
        baseClass += "bg-[#D4AF37] text-white rounded rounded-l-none ";
        wrapperClass += "bg-[#D4AF37]/20 rounded-r ";
      } else if (isRange) {
        baseClass += "text-gray-900 ";
        wrapperClass += "bg-[#D4AF37]/20 ";
      } else {
        baseClass += "hover:bg-gray-100 text-gray-800 rounded ";
      }
      
      // Today indicator box overrides
      if (isToday) {
         if (!isStart && !isEnd && !isRange) {
            baseClass += "border-2 border-gray-900 ";
            if (isPast) {
               baseClass = baseClass.replace("text-gray-800", "text-[#B0BCC5]");
            }
         }
      }

      days.push(
        <div key={`day-${i}`} className={wrapperClass}>
          <div 
            className={baseClass}
            onClick={() => {
               if (isPast) return;
               if (!startDate || (startDate && endDate)) {
                  setStartDate(curDate);
                  setEndDate(null);
               } else {
                  if (curDate < startDate) {
                     setStartDate(curDate);
                     setEndDate(null);
                  } else {
                     setEndDate(curDate);
                  }
               }
            }}
            onMouseEnter={() => {
               if (startDate && !endDate && !isPast) {
                  setHoverDate(curDate);
               }
            }}
          >
            {i}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div ref={containerRef} className="w-full bg-white rounded-md shadow-2xl border border-[#D4AF37] p-6 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Date Selection */}
        <div className="md:col-span-5 relative mt-3">
          <div 
            onClick={() => { setIsDateOpen(!isDateOpen); setIsGuestOpen(false); }}
            className={`flex items-center gap-3 p-3 bg-white border transition-colors rounded cursor-pointer relative ${isDateOpen ? 'border-[#D4AF37]' : 'border-gray-300 hover:border-[#D4AF37]'}`}
          >
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-[12px] uppercase tracking-widest text-[#D4AF37] font-bold">
              {t('booking.selectDates', 'Select dates')}
            </label>
            <Calendar size={20} className="text-[#D4AF37]" />
            <span className="text-[16px] font-medium text-gray-800">{formatDateLabel()}</span>
          </div>
          
          {/* Calendar Popup */}
          {isDateOpen && (
            <div className="absolute top-[110%] left-0 w-[700px] max-w-[90vw] bg-white border border-gray-200 shadow-2xl p-6 rounded-md z-50">
               <div className="flex justify-between items-center mb-5 px-10">
                  <div className="text-gray-800 font-bold text-[16px]">{getMonthYear(2026, 3)}</div>
                  <div className="text-gray-800 font-bold text-[16px]">{getMonthYear(2026, 4)}</div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Month 1 */}
                  <div>
                    <div className="grid grid-cols-7 gap-0 text-center text-[13px] font-medium text-gray-500 mb-2 border-b border-gray-200 pb-2">
                       {(t('booking.daysOfWeek', { returnObjects: true }) as string[]).map((day: string) => (
                         <span key={day}>{day}</span>
                       ))}
                    </div>
                    <div className="grid grid-cols-7 gap-y-2 text-center">
                       {renderCalendarMonth(2026, 3)}
                    </div>
                  </div>
                  {/* Month 2 */}
                  <div>
                    <div className="grid grid-cols-7 gap-0 text-center text-[13px] font-medium text-gray-500 mb-2 border-b border-gray-200 pb-2">
                       {(t('booking.daysOfWeek', { returnObjects: true }) as string[]).map((day: string) => (
                         <span key={day}>{day}</span>
                       ))}
                    </div>
                    <div className="grid grid-cols-7 gap-y-2 text-center">
                       {renderCalendarMonth(2026, 4)}
                    </div>
                  </div>
               </div>
               
               <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <span className="text-gray-800 text-[14px] font-bold">
                     {t('booking.nights', 'Nights')}: {startDate && endDate ? Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0}
                  </span>
                  <div className="flex gap-4 items-center">
                     <button className="text-[14px] font-bold text-gray-500 hover:text-gray-800 transition-colors" onClick={() => { setStartDate(null); setEndDate(null); setHoverDate(null); }}>
                       {t('booking.clear', 'Clear')}
                     </button>
                     <button className="bg-[#D4AF37] text-white px-8 py-2 rounded font-bold hover:bg-[#B3932F] transition-colors shadow-sm" onClick={() => setIsDateOpen(false)}>
                       {t('booking.done', 'Done')}
                     </button>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Rooms & Guests */}
        <div className="md:col-span-4 relative mt-3">
          <div 
            onClick={() => { setIsGuestOpen(!isGuestOpen); setIsDateOpen(false); }}
            className={`flex items-center gap-3 p-3 bg-white border transition-colors rounded cursor-pointer relative ${isGuestOpen ? 'border-[#D4AF37]' : 'border-gray-300 hover:border-[#D4AF37]'}`}
          >
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-[12px] uppercase tracking-widest text-[#D4AF37] font-bold">
              {t('booking.roomsGuests', 'Select rooms and guests')}
            </label>
            <Users size={20} className="text-[#D4AF37]" />
            <span className="text-[16px] font-medium text-gray-800">
              {totalRooms} {t('booking.room', 'Room')}{totalRooms > 1 && i18n.language === 'en' ? 's' : ''}, {totalAdults} {t('roomDetail.guests', 'Guest')}{totalAdults > 1 && i18n.language === 'en' ? 's' : ''}
            </span>
          </div>
          
          {/* Guests Popup */}
          {isGuestOpen && (
            <div className="absolute top-[120%] left-0 w-[420px] max-w-[90vw] bg-white border border-gray-200 shadow-xl p-0 rounded-md z-50">
               {/* Upward Triangle */}
               <div className="absolute -top-[9px] left-10 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

               <div className="p-8 pb-6 max-h-[350px] overflow-y-auto">
                 <div className="text-center mb-6 relative">
                    <h4 className="text-gray-900 font-extrabold text-[15px] mb-0">{t('booking.adultsLabel', 'Adults')}</h4>
                    <span className="text-[13px] text-gray-500 font-medium">{t('booking.ages13OrMore', 'Ages 13 or more')}</span>
                 </div>
                 
                 <div className="flex flex-col gap-6">
                    {roomConfigs.map((room, index) => (
                      <div key={room.id} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium text-[15px]">{t('booking.room', 'Room')} {index + 1}</span>
                        <div className="flex items-center gap-4">
                           <button onClick={() => updateRoomAdults(room.id, -1)} className="w-[34px] h-[34px] rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-800 transition-all shrink-0">
                             <Minus size={16} strokeWidth={2}/>
                           </button>
                           <div className="w-[42px] h-[34px] border border-gray-400 flex items-center justify-center shrink-0">
                              <span className="text-gray-900 font-medium text-[15px]">{room.adults}</span>
                           </div>
                           <button onClick={() => updateRoomAdults(room.id, 1)} className="w-[34px] h-[34px] rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-800 transition-all shrink-0">
                             <Plus size={16} strokeWidth={2}/>
                           </button>
                           <button 
                             onClick={() => removeRoom(room.id)}
                             className={`ml-2 outline-none transition-colors ${roomConfigs.length > 1 ? 'text-gray-600 hover:text-red-500 cursor-pointer' : 'text-gray-200 cursor-not-allowed'}`}
                             disabled={roomConfigs.length <= 1}
                           >
                             <Trash2 size={18} strokeWidth={2}/>
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
               
               <div className="flex gap-4 p-5 border-t border-gray-200 bg-white rounded-b-md">
                  <button onClick={addRoom} className="flex-1 border-[1.5px] border-[#D4AF37] text-[#D4AF37] bg-white hover:bg-[#D4AF37]/5 transition-colors rounded py-2 text-[14px] font-bold tracking-wide">
                     {t('booking.addRoom', 'Add additional room')}
                  </button>
                  <button onClick={() => setIsGuestOpen(false)} className="px-8 bg-[#D4AF37] text-white py-2 rounded text-[15px] font-bold hover:bg-[#B3932F] transition-colors">
                     {t('booking.done', 'Done')}
                  </button>
               </div>
            </div>
          )}
        </div>

        {/* Promo Code Link */}
        <div className="md:col-span-3 flex items-center justify-start md:justify-end mt-3">
          <button 
            onClick={() => setIsPromoOpen(!isPromoOpen)}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-[#B3932F] text-[15px] font-bold transition-colors"
          >
            <Tag size={16} />
            {isPromoOpen ? t('booking.closePromo', 'Close promo code') : t('booking.addPromo', 'Add promo code')}
          </button>
        </div>

        {/* Expandable Promo Input */}
        {isPromoOpen && (
          <div className="col-span-12 border-t border-gray-200 mt-2 pt-4 flex gap-4 items-center animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <input 
                type="text" 
                placeholder={t('booking.enterPromo', 'Enter your promo code')}
                className="w-[230px] p-2.5 text-sm focus:outline-none placeholder:text-gray-500 bg-white shadow-inner"
              />
              <button className="px-5 bg-[#f8f9fa] text-gray-800 text-[14px] font-bold hover:bg-gray-200 transition-colors border-l border-gray-300">
                {t('booking.apply', 'Apply')}
              </button>
            </div>
            <button 
              onClick={() => setIsPromoOpen(false)}
              className="px-2 text-gray-500 text-[14px] font-medium hover:text-gray-800 transition-colors"
            >
              {t('booking.clear', 'Clear')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingSearchForm;
