import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        links: ['Culinary', 'Meeting', 'Spa & wellness', 'Offer', 'Gallery'],
        bookNow: 'BOOK NOW',
      },
      timelineNav: {
        links: ['Home', 'About', 'Rooms', 'Reviews', 'FAQ', 'Contact']
      },
      hero: {
        subtitle: 'A PREMIUM STAY EXPERIENCE',
        title: 'Tan Phuong Nam Galaxy<br />Danang Hotel',
        cta: 'BOOK A ROOM',
      },
      intro: {
        aboutUs: 'ABOUT US',
        highlight: "A premium 4-star standard retreat nestled along the romantic Han River.",
        desc: "Located in the heart of Da Nang, our hotel offers a luxurious and modern retreat with 86 rooms and 12 floors. With a prime location just minutes away from Dragon Bridge, My Khe Beach, and Da Nang International Airport, it’s a perfect choice for both leisure and business travelers. Enjoy our exclusive facilities including a Rooftop Pool, Spa & Massage, Fitness Room, and Rooftop Bar.",
        knowMore: 'KNOW MORE',
        byTheNumber: 'BY THE NUMBER',
        stats: [
          { value: 4, suffix: '', icon: 'star', sign: '', title: 'Standard', desc: 'Hotel equivalent to 4-star standards, featuring modern space and premium services.' },
          { value: 86, suffix: '', sign: '+', title: 'Premium Rooms', desc: 'Offering a wide range of elegant rooms including river view suites and penthouses.' },
          { value: 12, suffix: '', sign: '', title: 'Floors', desc: 'With a panoramic view of the romantic Han River and bustling Da Nang city.' }
        ],
        amenities: [
          { name: 'Rooftop Pool' },
          { name: 'Restaurant' },
          { name: 'Fitness Center' },
          { name: 'Spa & Massage' }
        ]
      },
      rooms: {
        label: 'LUXURY ROOMS',
        title: 'Our Exquisite Rooms Collections',
        perNight: '/ Night',
        bed: 'Bed',
        guests: 'Guests',
        items: [
          { title: 'Superior King', size: '25 SqM', desc: '1 King Bed, 2 Pax, Wall View' },
          { title: 'Superior Twin', size: '28 SqM', desc: '2 Twin Beds, 2 Pax, City View' },
          { title: 'Deluxe King', size: '28 SqM', desc: '1 King Bed, 2 Pax, City View' }
        ]
      },
      explore: {
        label: 'ROOMS & SUITES',
        title: 'Explore Rooms and Suites',
        from: 'From',
        items: [
          { title: 'Deluxe Triple', size: '30 SqM', desc: '1 King & 1 Single Bed, 3 Pax, City View' },
          { title: 'Executive River View', size: '30 SqM', desc: '1 King Bed, 2 Pax, Han River View' },
          { title: 'Premier River View', size: '35 SqM', desc: '1 King Bed, 2 Pax, Han River View' },
          { title: 'Family River View', size: '40 SqM', desc: '2 Queen Beds, 4 Pax, Han River View' }
        ]
      },
      accommodations: {
        label: 'EXCLUSIVE SUITES',
        title: 'Our Accommodations',
        items: [
          { title: 'TPN Penthouse', size: '100 SqM', desc: '2 Bedrooms, 2 King Beds, Living Room, Kitchen, Bathtub, 4 Pax' },
          { title: 'Premier River View', size: '35 SqM', desc: '1 King Bed, Bathtub, 2 Pax' },
          { title: 'Executive River View', size: '30 SqM', desc: '1 King Bed, Bathtub, 2 Pax' },
          { title: 'Family River View', size: '40 SqM', desc: '2 Queen Beds, 4 Pax' }
        ],
        desc: "The unseen luxury partners of true 'hospitality service'. Unmatched luxury properties along the Han River. We go beyond your expectations guaranteeing to bring unmatched luxury hospitality right to your footsteps.",
        cta: 'DISCOVER MORE ROOMS'
      },
      faq: {
        label: 'FAQ',
        title: 'Everything you need to know right now',
        items: [
          { q: 'Where is the hotel located?', a: 'We are located at 180 Bach Dang, Da Nang. Only 850m from Dragon Bridge, 190m to Han Market, and 3km to My Khe Beach.' },
          { q: 'What are the operation hours for the pool and gym?', a: 'The Rooftop Pool is open from 06:00 to 18:00, and the Fitness Room is available from 06:00 to 22:00.' },
          { q: 'Is there a restaurant on-site?', a: 'Yes, our restaurant serves Asian, Western, and local dishes from 06:00 to 22:00 with a capacity of 200 guests.' },
          { q: 'What general amenities are included?', a: 'Rooms feature automated control units, high-speed Wi-Fi, air conditioning, minibar, flat-screen TV, safe box, desk, hair dryer, and kettle.' }
        ]
      },
      testimonials: {
        header: {
          title: 'What our clients say about us',
          subtitle: "Let's hear how our guests feel about their stay at TPN Galaxy"
        },
        label: 'Review',
        statsLabel: 'Review Score',
        statsNum: '9.5 / 10',
        statsText: 'Overall guest satisfaction rating based on recent reviews.',
        reviews: [
          { title: 'Excellent Service', text: 'New hotel, beautiful sea view, enthusiastic and friendly staff, attentive service, delicious food, our family was very satisfied staying here. Hope to return to the hotel in the future. Gooddddddddddddddd', author: 'Anna N.' },
          { title: '', text: 'Thanks to TPN Galaxy, I was able to create lifelong memories with my family by the romantic Han River.', author: 'Cynthia Morgan' },
          { title: '', text: "It's easy to enjoy a perfect vacation even if you only have a short weekend trip.", author: 'Steven Sunny' },
          { title: 'Unforgettable Experience', text: 'TPN Galaxy Hotel provided me with a wealth of premium amenities and unparalleled comfort.', author: 'Sarah Jenkins' },
          { title: '', text: "Let's make unbelievable moments and embrace the city vibrant life with TPN Galaxy.", author: 'Michael Wong' },
          { title: '', text: "The rooftop pool and the exclusive view of Dragon Bridge are absolutely breathtaking.", author: 'Emma Watson' }
        ]
      },
      cta: {
        label: 'Start Your Journey',
        title: 'Book A Room<br />Today',
        desc: 'Join the countless travelers who trust TPN Galaxy Hotel. Contact us at (+84) 236 3 / (+84) 9 or info@ to start discovering luxurious getaway experiences.',
        startNow: 'START NOW',
        learnMore: 'LEARN MORE'
      },
      footer: {
        title: 'The new standard for<br />luxury experiences.',
        desc: 'Tan Phuong Nam Galaxy Danang Hotel is the trusted name for modern, premium stays tailored precisely to your satisfaction.',
        bookNow: 'Book now',
        pricing: 'View rooms',
        trustedBy: 'TRUSTED BY GLOBAL HOSPITALITY LEADERS',
        copyright: '© 2026 TAN PHUONG NAM GALAXY HOTEL.<br />ALL RIGHTS RESERVED.',
        links: ['PLATFORM', 'LEGAL', 'PRIVACY', 'CONTACT']
      }
    }
  },
  vi: {
    translation: {
      nav: {
        links: ['Ẩm Thực', 'Hội nghị', 'Spa & giải trí', 'Ưu đãi', 'Hình Ảnh'],
        bookNow: 'ĐẶT PHÒNG',
      },
      timelineNav: {
        links: ['TRANG CHỦ', 'GIỚI THIỆU', 'PHÒNG', 'ĐÁNH GIÁ', 'HỎI ĐÁP', 'LIÊN HỆ']
      },
      hero: {
        subtitle: 'TRẢI NGHIỆM NGHỈ DƯỠNG ĐẲNG CẤP',
        title: 'Khách Sạn Tân Phương Nam<br />Galaxy Đà Nẵng',
        cta: 'ĐẶT PHÒNG NGAY',
      },
      intro: {
        aboutUs: 'VỀ CHÚNG TÔI',
        highlight: "Khu nghỉ dưỡng sang trọng tiêu chuẩn 4 sao tọa lạc bên bờ sông Hàn thơ mộng.",
        desc: "Tọa lạc tại trung tâm Đà Nẵng, khách sạn cung cấp 86 phòng nghỉ đẳng cấp trên 12 tầng với không gian hiện đại và nội thất sang trọng. Chỉ cách Cầu Rồng, Biển Mỹ Khê và Sân bay Quốc tế Đà Nẵng vài phút di chuyển, Tân Phương Nam Galaxy là lựa chọn hoàn hảo cho cả du khách và doanh nhân. Tận hưởng các tiện ích chung như Hồ bơi tầng thượng, Nhà hàng, Gym, và Spa.",
        knowMore: 'TÌM HIỂU THÊM',
        byTheNumber: 'NHỮNG CON SỐ',
        stats: [
          { value: 4, suffix: '', icon: 'star', sign: '', title: 'Tiêu Chuẩn', desc: 'Khách sạn đạt tiêu chuẩn tương đương 4 sao, mang đến không gian hiện đại và dịch vụ đẳng cấp.' },
          { value: 86, suffix: '', sign: '+', title: 'Phòng Nghỉ', desc: 'Cung cấp nhiều hạng phòng đa dạng, từ phòng tiêu chuẩn đến suite hướng sông và penthouse.' },
          { value: 12, suffix: '', sign: '', title: 'Tầng Lầu', desc: 'Tầm nhìn bao quát toàn cảnh sông Hàn thơ mộng và thành phố Đà Nẵng nhộn nhịp.' }
        ],
        amenities: [
          { name: 'Hồ Bơi Tầng Thượng' },
          { name: 'Nhà Hàng' },
          { name: 'Phòng Gym' },
          { name: 'Spa & Massage' }
        ]
      },
      rooms: {
        label: 'PHÒNG CAO CẤP',
        title: 'Bộ Sưu Tập Phòng',
        perNight: '/ Đêm',
        bed: 'Giường',
        guests: 'Khách',
        items: [
          { title: 'Superior King', size: '25 m2', desc: '1 giường đôi 1m8, 2 khách, hướng tường.' },
          { title: 'Superior Twin', size: '28 m2', desc: '2 giường đơn 1m2, 2 khách, hướng phố.' },
          { title: 'Deluxe King', size: '28 m2', desc: '1 giường đôi 1m8, 2 khách, hướng phố.' }
        ]
      },
      explore: {
        label: 'PHÒNG & SUITE',
        title: 'Khám Phá Phòng & Suite',
        from: 'Từ',
        items: [
          { title: 'Deluxe Triple', size: '30 m2', desc: '1 giường 1m6 & 1 giường 1m2, 3 khách, hướng phố.' },
          { title: 'Executive River View', size: '30 m2', desc: '1 giường đôi 1m8, 2 khách, hướng sông Hàn.' },
          { title: 'Premier River View', size: '35 m2', desc: '1 giường đôi 1m8, 2 khách, có bồn tắm, hướng sông Hàn.' },
          { title: 'Family River View', size: '40 m2', desc: '2 giường 1m6, 4 khách, hướng sông Hàn.' }
        ]
      },
      accommodations: {
        label: 'CÁC LOẠI PHÒNG',
        title: 'Chỗ Ở Của Chúng Tôi',
        items: [
          { title: 'TPN Penthouse', size: '100 m2', desc: '2 phòng ngủ, 2 giường 1m8, phòng khách, bếp, bồn tắm, 4 khách.' },
          { title: 'Premier River View', size: '35 m2', desc: '1 giường đôi 1m8, 2 khách, hướng sông Hàn.' },
          { title: 'Executive River View', size: '30 m2', desc: '1 giường đôi 1m8, 2 khách, hướng sông Hàn.' },
          { title: 'Family River View', size: '40 m2', desc: '2 giường 1m6, 4 khách, hướng sông.' }
        ],
        desc: "Đối tác xa xỉ cho dịch vụ 'hiếu khách' đích thực. Vị trí lý tưởng bên bờ sông Hàn thơ mộng. Chúng tôi đảm bảo mang đến cho quý khách trải nghiệm lưu trú không gì sánh kịp.",
        cta: 'KHÁM PHÁ THÊM PHÒNG'
      },
      faq: {
        label: 'Câu hỏi thường gặp',
        title: 'Những thông tin bạn cần biết',
        items: [
          { q: 'Khách sạn ở vị trí nào?', a: 'Khách sạn tọa lạc tại 180 Bạch Đằng, Đà Nẵng. Chỉ cách Cầu Rồng 850m, chợ Hàn 190m và biển Mỹ Khê 3km.' },
          { q: 'Thời gian hoạt động của các tiện ích là lúc nào?', a: 'Hồ bơi tầng thượng hoạt động từ 06:00 – 18:00, phòng Gym mở cửa từ 06:00 – 22:00, Rooftop Bar và Spa từ từ 10:00 và 09:00 sáng.' },
          { q: 'Bên trong khách sạn có nhà hàng không?', a: 'Có. Nhà hàng phục vụ món Á, Âu và địa phương hoạt động từ 06:00 – 22:00 với sức chứa 200 khách.' },
          { q: 'Trong mỗi phòng có cung cấp những vật dụng cơ bản nào?', a: 'Khách sạn trang bị hệ thống điều khiển tự động, TV màn hình phẳng, máy lạnh, minibar, Wi-Fi tốc độ cao, máy sấy tóc, và két sắt.' }
        ]
      },
      testimonials: {
        header: {
          title: 'Khách hàng đánh giá về chúng tôi',
          subtitle: "Hãy cùng lắng nghe cảm nhận của khách hàng về kỳ nghỉ tại TPN Galaxy"
        },
        label: 'Đánh giá',
        statsLabel: 'Điểm đánh giá',
        statsNum: '9.5 / 10',
        statsText: 'Sự hài lòng của khách hàng dựa trên các đánh giá gần đây.',
        reviews: [
          { title: 'Dịch vụ xuất sắc', text: 'Khách sạn mới, view biển đẹp, nhân viên nhiệt tình thân thiện, phục vụ chu đáo, thức ăn ngon, gia đình mình ở tại đây rất hài lòng. Hi vọng có thể quay lại khách sạn trong tương lai. Gooddddddddddddddd', author: 'Anna N.' },
          { title: '', text: 'Nhờ có TPN Galaxy, tôi đã có thể tạo ra những kỷ niệm đáng nhớ cùng gia đình bên dòng sông Hàn thơ mộng.', author: 'Cynthia Morgan' },
          { title: '', text: 'Rất dễ dàng để tận hưởng một kỳ nghỉ trọn vẹn ngay cả khi bạn chỉ có một chuyến đi ngắn ngày cuối tuần.', author: 'Steven Sunny' },
          { title: 'Trải nghiệm khó quên', text: 'Khách sạn TPN Galaxy thực sự mang đến những tiện ích cao cấp và sự thoải mái không thể nào sánh được.', author: 'Sarah Jenkins' },
          { title: '', text: 'Hãy tạo nên những khoảnh khắc tuyệt vời và tận hưởng nhịp sống nhộn nhịp cùng TPN Galaxy.', author: 'Michael Wong' },
          { title: '', text: 'Hồ bơi tầng thượng và tầm nhìn bao quát Cầu Rồng thực sự quá đặc biệt và ngoạn mục.', author: 'Emma Watson' }
        ]
      },
      cta: {
        label: 'Bắt đầu hành trình',
        title: 'Đặt Phòng<br />Hôm Nay',
        desc: 'Tham gia cùng hàng ngàn du khách đã tin tưởng trải nghiệm kỳ nghỉ tuyệt vời cùng chúng tôi. Liên hệ trực tiếp (+84) 236 3 / (+84) 9 hoặc qua info@.',
        startNow: 'BẮT ĐẦU NGAY',
        learnMore: 'TÌM HIỂU THÊM'
      },
      footer: {
        title: 'Tiêu chuẩn mới cho<br />trải nghiệm nghỉ dưỡng.',
        desc: 'Khách sạn Tân Phương Nam Galaxy Đà Nẵng mang đến sự uy tín, đẳng cấp, và được thiết kế đo ni đóng giày cho sự hài lòng của bạn.',
        bookNow: 'Đặt phòng ngay',
        pricing: 'Xem các loại phòng',
        trustedBy: 'ĐỐI TÁC CỦA CÁC THƯƠNG HIỆU HÀNG ĐẦU',
        copyright: '© 2026 KHÁCH SẠN TÂN PHƯƠNG NAM GALAXY.<br />TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.',
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
