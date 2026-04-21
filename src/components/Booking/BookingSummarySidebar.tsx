import React from 'react';
import { useTranslation } from 'react-i18next';

const BookingSummarySidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="sticky top-32 w-full">
      <div className="bg-white rounded-md shadow-lg border border-gray-100 p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-gray-900 border-b-2 border-[#D4AF37] pb-1 w-fit">
              Tue, 21 Apr 26 – Wed, 22 Apr 26
            </span>
            <span className="text-[11px] text-gray-500 font-medium tracking-wide mt-2">
              1 {t('booking.room', 'room')}, 2 {t('roomDetail.guests', 'guests')}
            </span>
          </div>
          <span className="text-[14px] font-medium text-gray-700">1 {t('booking.nights', 'night')}</span>
        </div>

        <div className="border-t border-gray-100 my-6 pt-6 flex flex-col items-center justify-center py-10">
          <span className="text-[13px] text-gray-600 font-medium italic text-center px-4">
            {t('booking.selectRate', 'Select a rate to continue')}
          </span>
        </div>

        <button 
          disabled
          className="w-full py-4 bg-gray-400 text-white font-bold uppercase tracking-[0.2em] rounded shadow-md cursor-not-allowed text-sm"
        >
          {t('booking.book', 'Book')}
        </button>
      </div>
      
      <p className="mt-6 text-[10px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
        {t('booking.secureTransactions', 'Secure transactions')} <br /> {t('booking.dataEncrypted', 'All data is encrypted')}
      </p>
    </div>
  );
};

export default BookingSummarySidebar;
