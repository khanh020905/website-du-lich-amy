import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        links: ['HOME', 'ABOUT', 'ROOM', 'NEWS', 'PAGES', 'CONTACT'],
        bookNow: 'BOOK NOW',
      },
      hero: {
        subtitle: 'A REFINED DEFINITION OF LUXURY LIVING',
        title: 'Welcome to Our Luxurious<br />Hotel & Resort',
        cta: 'BOOK A ROOM',
      },
      intro: {
        aboutUs: 'ABOUT US',
        highlight: "Since 2016, we've been helping travelers find stays they love — effortlessly.",
        desc: "We're about curating unforgettable journeys! Since 2016, our passionate team has been helping travelers find the perfect stay, blending seamless technology with a love for discovery. From cozy hideaways to grand escapes, we turn your travel dreams into real-world adventures.",
        knowMore: 'KNOW MORE',
        byTheNumber: 'BY THE NUMBER',
        stats: [
          { value: 98, suffix: '%', sign: '+', title: 'Positive Feedback', desc: 'Over 98% positive feedback from satisfied guests, reflecting our commitment to exceptional service and memorable stays.' },
          { value: 15, suffix: '', sign: '+', title: 'Years of Expertise', desc: 'Backed by 15 years of industry expertise, we turn every stay into a seamless experience.' },
          { value: 25, suffix: 'K', sign: '+', title: 'Happy Clients', desc: "Proudly serving 25K+ happy travelers who've trusted us to find their perfect stay." }
        ]
      },
      rooms: {
        label: 'LUXURY ROOMS',
        title: 'Our Exquisite Rooms Collections',
        perNight: '/ Night',
        bed: 'Bed',
        guests: 'Guests',
        items: [
          { title: 'Deluxe Room', size: '40 SqM' },
          { title: 'Star Suite Room', size: '60 SqM' },
          { title: 'Superior Room', size: '45 SqM' }
        ]
      },
      explore: {
        label: 'ROOMS SUITES',
        title: 'Explore Rooms and Suites',
        from: 'From',
        items: [
          { title: 'Presidential Suite', size: '120 SqM' },
          { title: 'Deluxe Balcony Room', size: '45 SqM' },
          { title: 'Star Studio Suite', size: '70 SqM' },
          { title: 'Luxury Hotel Suite', size: '90 SqM' }
        ]
      },
      accommodations: {
        label: 'LUXURY HOTEL',
        title: 'Our Accommodations',
        items: [
          { title: 'Double Room Deluxe', size: '45 SqM' },
          { title: 'Family Suite', size: '60 SqM' },
          { title: 'Ocean View Room', size: '55 SqM' },
          { title: 'Presidential Penthouse', size: '120 SqM' }
        ],
        desc: "The unseen luxury partners of true 'hospitality service'. Unmatched luxury properties inside the world's most fascinating horizons. We go beyond your expectations guaranteeing to bring unmatched luxury hospitality right to your footsteps.",
        cta: 'DISCOVER MORE ROOMS'
      },
      faq: {
        label: 'FAQ',
        title: 'Everything you need to know right now',
        items: [
          { q: 'What do the prices of regular packages include?', a: 'Our regular packages typically include accommodations, daily breakfast, access to resort amenities like pools and fitness centers, and complimentary Wi-Fi. Premium packages may add spa credits and dining options.' },
          { q: 'Do you have any recommendations for family trips?', a: 'Absolutely! Our Family Deluxe Suites come with adjoining rooms and discounted kid-friendly activities.' },
          { q: 'What essential items should one bring on a tropical trip?', a: 'We recommend bringing high-SPF sunscreen, light breathable clothing, swimwear, and comfortable walking shoes. We provide luxury toiletries and beach towels.' },
          { q: 'Do we need to take a visa if visiting locally?', a: 'If you are within domestic borders, a valid ID is sufficient. International travelers please refer to your embassy for visa requirements.' }
        ]
      },
      cta: {
        label: 'Start Your Journey',
        title: 'Book A Room<br />Today',
        desc: 'Join 50,000+ travelers who trust our platform. Create an account today and start discovering the most luxurious getaway experiences.',
        startNow: 'START NOW',
        learnMore: 'LEARN MORE'
      },
      footer: {
        title: 'The new standard for<br />luxury experiences.',
        desc: 'Amy Tourist is the trusted ecosystem for modern travel. Prestigious, top-tier, and tailored precisely to your satisfaction.',
        bookNow: 'Book now',
        pricing: 'View pricing',
        trustedBy: 'TRUSTED BY GLOBAL HOSPITALITY LEADERS',
        copyright: '© 2026 AMY TOURIST SYSTEMS.<br />ALL RIGHTS RESERVED.',
        links: ['PLATFORM', 'LEGAL', 'PRIVACY', 'CONTACT']
      }
    }
  },
  vi: {
    translation: {
      nav: {
        links: ['TRANG CHỦ', 'GIỚI THIỆU', 'PHÒNG', 'TIN TỨC', 'TRANG', 'LIÊN HỆ'],
        bookNow: 'ĐẶT PHÒNG',
      },
      hero: {
        subtitle: 'ĐỊNH NGHĨA MỚI VỀ PHONG CÁCH SỐNG XA HOA',
        title: 'Chào mừng đến với Khách sạn<br />& Khu nghỉ dưỡng sang trọng',
        cta: 'ĐẶT PHÒNG NGAY',
      },
      intro: {
        aboutUs: 'VỀ CHÚNG TÔI',
        highlight: "Từ năm 2016, chúng tôi đã giúp du khách tìm được nơi lưu trú yêu thích — một cách dễ dàng.",
        desc: "Chúng tôi luôn hướng đến việc tạo ra những hành trình khó quên! Đội ngũ nhiệt huyết của chúng tôi đã giúp hàng ngàn du khách tìm được điểm dừng chân hoàn hảo, kết hợp công nghệ mượt mà và niềm đam mê khám phá. Từ những khu nghỉ dưỡng yên tĩnh đến những chuyến trốn chạy kỳ vĩ, chúng tôi biến giấc mơ du lịch của bạn thành chuyến phiêu lưu có thật.",
        knowMore: 'TÌM HIỂU THÊM',
        byTheNumber: 'NHỮNG CON SỐ',
        stats: [
          { value: 98, suffix: '%', sign: '+', title: 'Phản hồi tích cực', desc: 'Hơn 98% phản hồi tích cực từ những vị khách hài lòng, phản ánh sự cam kết đối với dịch vụ xuất sắc và những kỳ nghỉ đáng nhớ.' },
          { value: 15, suffix: '', sign: '+', title: 'Năm Kinh nghiệm', desc: 'Được hỗ trợ bởi 15 năm kinh nghiệm trong ngành, chúng tôi biến mỗi kỳ nghỉ thành một trải nghiệm mượt mà.' },
          { value: 25, suffix: 'K', sign: '+', title: 'Khách hàng', desc: "Tự hào phục vụ hơn 25.000 du khách đã tin tưởng chúng tôi để tìm kiếm điểm dừng chân hoàn hảo." }
        ]
      },
      rooms: {
        label: 'PHÒNG SANG TRỌNG',
        title: 'Bộ sưu tập phòng cao cấp của chúng tôi',
        perNight: '/ Đêm',
        bed: 'Giường',
        guests: 'Khách',
        items: [
          { title: 'Phòng Deluxe', size: '40 m2' },
          { title: 'Phòng Star Suite', size: '60 m2' },
          { title: 'Phòng Superior', size: '45 m2' }
        ]
      },
      explore: {
        label: 'PHÒNG & SUITE',
        title: 'Khám phá Phòng và Suite',
        from: 'Từ',
        items: [
          { title: 'Suite Tổng thống', size: '120 m2' },
          { title: 'Phòng Deluxe có Ban công', size: '45 m2' },
          { title: 'Suite Star Studio', size: '70 m2' },
          { title: 'Suite Khách sạn Sang trọng', size: '90 m2' }
        ]
      },
      accommodations: {
        label: 'KHÁCH SẠN SANG TRỌNG',
        title: 'Chỗ ở của chúng tôi',
        items: [
          { title: 'Phòng Đôi Deluxe', size: '45 m2' },
          { title: 'Suite Gia đình', size: '60 m2' },
          { title: 'Phòng Hướng biển', size: '55 m2' },
          { title: 'Penthouse Tổng thống', size: '120 m2' }
        ],
        desc: "Đối tác xa xỉ ẩn danh của 'dịch vụ hiếu khách' đích thực. Những bất động sản nghỉ dưỡng sang trọng bậc nhất nằm giữa những đường chân trời hấp dẫn nhất thế giới. Chúng tôi vượt xa mong đợi của bạn, đảm bảo mang đến trải nghiệm xa xỉ không gì sánh kịp.",
        cta: 'KHÁM PHÁ THÊM PHÒNG'
      },
      faq: {
        label: 'Câu hỏi thường gặp',
        title: 'Tất cả những gì bạn cần biết ngay lúc này',
        items: [
          { q: 'Giá của các gói thông thường bao gồm những gì?', a: 'Các gói thông thường của chúng tôi bao gồm chỗ ở, bữa sáng hàng ngày, quyền sử dụng các tiện ích như hồ bơi, phòng tập thể dục và Wi-Fi miễn phí. Các gói cao cấp có thể có thêm phiếu spa và tùy chọn ăn uống.' },
          { q: 'Khách sạn có gợi ý gì cho chuyến du lịch gia đình không?', a: 'Chắc chắn rồi! Phòng Deluxe Gia đình của chúng tôi đi kèm với phòng thông nhau và các hoạt động thân thiện với trẻ em được giảm giá.' },
          { q: 'Cần mang theo những vật dụng thiết yếu nào khi đến vùng nhiệt đới?', a: 'Chúng tôi khuyên bạn nên mang theo kem chống nắng, quần áo thoáng mát, đồ bơi và giày đi bộ thoải mái. Chúng tôi sẽ cung cấp đồ vệ sinh cá nhân và khăn tắm sang trọng.' },
          { q: 'Có cần xin visa nếu du lịch trong nước không?', a: 'Nếu bạn đi trong nước, chỉ cần mang theo CMND/CCCD hợp lệ. Khách quốc tế vui lòng tham khảo đại sứ quán về yêu cầu visa.' }
        ]
      },
      cta: {
        label: 'Bắt đầu hành trình',
        title: 'Đặt Phòng<br />Ngay Hôm Nay',
        desc: 'Tham gia cùng hơn 50.000 du khách tin tưởng nền tảng của chúng tôi. Tạo tài khoản ngay hôm nay và bắt đầu khám phá những trải nghiệm nghỉ dưỡng xa hoa nhất.',
        startNow: 'BẮT ĐẦU NGAY',
        learnMore: 'TÌM HIỂU THÊM'
      },
      footer: {
        title: 'Tiêu chuẩn mới cho<br />trải nghiệm nghỉ dưỡng.',
        desc: 'Amy Tourist là hệ sinh thái đáng tin cậy cho những chuyến đi tiện nghi. Uy tín, đẳng cấp, và được thiết kế đo ni đóng giày cho sự hài lòng của bạn.',
        bookNow: 'Đặt phòng ngay',
        pricing: 'Xem bảng giá',
        trustedBy: 'ĐỐI TÁC CỦA CÁC THƯƠNG HIỆU HÀNG ĐẦU',
        copyright: '© 2026 AMY TOURIST SYSTEMS.<br />TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.',
        links: ['NỀN TẢNG', 'PHÁP LÝ', 'BẢO MẬT', 'LIÊN HỆ']
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // Default fallback
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
  });

export default i18n;
