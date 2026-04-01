import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import faqImg from '../assets/pdf_images/img_p2_4.jpeg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-12 pb-24 bg-white" id="faq">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Side: Images & Heading */}
          <div className="md:w-5/12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4"
            >
              {t('faq.label')}
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#111] font-semibold mb-12 leading-[1.2]"
            >
              {t('faq.title')}
            </motion.h2>

            <div className="relative w-full h-80 rounded-sm overflow-hidden">
              <img 
                src={faqImg} 
                alt="FAQ Hotel Room" 
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl font-serif tracking-widest font-bold drop-shadow-lg">FAQ</span>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="md:w-7/12 w-full pt-8 md:pt-24 border-t-2 md:border-t-0 md:border-l border-gray-100 md:pl-16">
            <div className="flex flex-col gap-6">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-200 pb-6"
                  >
                    <button 
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className={`text-sm md:text-base font-bold tracking-wide pr-6 transition-colors duration-300 ${isOpen ? 'text-[#111]' : 'text-gray-700'}`}>
                        {faq.q}
                      </h4>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-[var(--color-gold)] text-[var(--color-gold)]' : 'border-gray-200 text-gray-400'}`}>
                        {isOpen ? <ChevronUp size={16} strokeWidth={3} /> : <ChevronDown size={16} strokeWidth={3} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed max-w-[90%]">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
