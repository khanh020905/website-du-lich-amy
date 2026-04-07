import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Loader2, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

const SYSTEM_PROMPT = `
Bạn là trợ lý ảo AI cao cấp của Khách sạn Tân Phương Nam. Giọng điệu của bạn phải lịch sự, chuyên nghiệp, sang trọng và chuẩn mực của một khách sạn 4 sao.
Dưới đây là thông tin chi tiết về khách sạn mà bạn PHẢI tham khảo để trả lời khách hàng.
ĐẶC BIỆT QUAN TRỌNG: KHI BẠN GIỚI THIỆU PHÒNG HOẶC DỊCH VỤ, BẠN PHẢI CHÈN HÌNH ẢNH CỦA PHÒNG/DỊCH VỤ ĐÓ VÀO CÂU TRẢ LỜI BẰNG ĐỊNH DẠNG MARKDOWN: ![Tên phòng/dịch vụ](Đường dẫn ảnh)

PHÒNG NGỦ
Khách sạn Tân Phương Nam mang phong cách kiến trúc hiện đại...

Superior Twin room (ảnh: /gallery/SUPERIOR TWIN/TWIN 1.jpg): Phòng Superior với diện tích 25m2 mang đến không gian ấm cúng. Tiện nghi (thêm buffet sáng, bồn tắm đứng).
Superior King room (ảnh: /gallery/SUPERIOR KING/sup 1 nen.jpg): Không gian nhỏ gọn nhưng vô cùng ấm cúng. Tiện nghi (thêm buffet sáng, bồn tắm đứng).
Deluxe King room (ảnh: /gallery/DELUXE KING/DELUXE 1.jpg): Không gian mở kết hợp ánh sáng tự nhiên. Tiện nghi (thêm buffet sáng, bồn tắm đứng).
Deluxe Triple room (ảnh: /gallery/DELUXE TRIPLE/TRIPLE 1.jpg): 1 giường lớn & 1 giường nhỏ cho cả gia đình.
Executive River View (ảnh: /gallery/EXECUTIVE RIVER VIEW/EXE 1.jpg): 1 Giường 1m8, view sông Hàn tuyệt đẹp. Tiện nghi (thêm buffet sáng, bồn tắm nằm).
Premier river view (ảnh: /gallery/PREMIER RIVER VIEW/PRE 1.jpg): Phòng cực rộng có ban công view toàn cảnh Sông Hàn. Tiện nghi (thêm buffet sáng, bồn tắm nằm, sofa bed).
TPT Penhouse (ảnh: /gallery/TPN PENTHOUSE/TPN 1.jpg): Căn hộ 100m2 tuyệt đỉnh trên tầng cao nhất. Tiện nghi (buffet sáng, bồn tắm nằm, bếp, phòng khách).

DỊCH VỤ KHÁC:
Spa (ảnh: /src/assets/spa.jpg): Tầng 1, massage, chăm sóc da...
The South restaurant (ảnh: /src/assets/restaurent.jpg): Tầng 3, 200 khách, buffet sáng 6:00-10:00...
Stellar Sky bar (ảnh: /src/assets/bartender-bar.jpg): Tầng 12, ngắm toàn cảnh thành phố...

KHÔNG BAO GIỜ bịa ra đường dẫn ảnh. Chỉ dùng các đường dẫn đã được cung cấp ở trên.
`;

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'Kính chào quý khách! Tôi là trợ lý ảo của khách sạn Tân Phương Nam. Quý khách cần hỗ trợ thông tin gì về phòng nghỉ, dịch vụ Spa, nhà hàng hay Sky Bar ạ?',
        },
      ]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMsg.content },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from Groq AI');
      }

      const data = await response.json();
      
      const aiResponse = data.choices?.[0]?.message?.content || 'Xin lỗi quý khách, hệ thống đang gặp chút sự cố. Quý khách vui lòng thử lại sau.';
      
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: aiResponse,
        },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Rất tiếc, tôi đang không thể kết nối ngay lúc này. Quý khách có thể liên hệ trực tiếp lễ tân qua hotline để được hỗ trợ nhanh nhất.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessageContent = (content: string) => {
    const parts = content.split(/(!\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <img 
            key={index} 
            src={match[2]} 
            alt={match[1]} 
            className="w-full max-h-48 object-cover rounded-lg mt-3 mb-2 shadow-sm border border-[#d4af37]/30" 
          />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl bg-gradient-to-tr from-[#111] to-[#333] border border-[#d4af37]/40 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/20"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src="/src/assets/logo-1.jpg" 
          alt="Chat" 
          className="w-full h-full object-cover"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/50 mix-blend-overlay"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-[10000] w-[380px] h-[550px] sm:w-[400px] sm:h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] bg-[#111]/95 backdrop-blur-xl rounded-2xl border border-[#d4af37]/30 shadow-2xl overflow-hidden flex flex-col font-sans"
          >
            {/* Header */}
            <div className="h-16 border-b border-[#d4af37]/20 bg-gradient-to-r from-[#1a1a1a] to-[#222] flex items-center justify-between px-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/50 bg-black flex items-center justify-center">
                  <img 
                    src="/src/assets/logo-1.jpg" 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[#d4af37] font-semibold text-sm tracking-wide">
                    Lễ Tân Trực Tuyến
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-gray-400 text-xs">Phản hồi ngay lập tức</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#d4af37]/30 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] text-black rounded-tr-sm'
                      : 'bg-[#222] text-gray-200 border border-white/5 rounded-tl-sm'
                  }`}>
                    <div className="whitespace-pre-wrap">{renderMessageContent(msg.content)}</div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-[#222] text-gray-200 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-[#d4af37]" />
                    <span className="text-sm text-gray-400">Đang trả lời...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#1a1a1a] border-t border-[#d4af37]/20 shrink-0">
              <div className="relative flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Nhập câu hỏi của quý khách..."
                  className="w-full bg-[#0a0a0a] text-gray-200 text-sm rounded-xl pl-4 pr-12 py-3 border border-white/10 focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/50 outline-none resize-none max-h-32 placeholder-gray-500 custom-scrollbar transition-all"
                  rows={1}
                  style={{ minHeight: '44px' }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 bottom-1.5 w-8 h-8 flex items-center justify-center rounded-full bg-[#d4af37] text-black hover:bg-[#ebd488] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
