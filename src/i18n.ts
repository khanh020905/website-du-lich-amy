import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        links: ['Rooms & Suites', 'Culinary', 'Service', 'Offer', 'Gallery'],
        bookNow: 'BOOK NOW',
      },
      timelineNav: {
        links: ['Home', 'About', 'Rooms', 'Reviews']
      },
      hero: {
        subtitle: 'A PREMIUM STAY EXPERIENCE',
        title: 'Tan Phuong Nam Galaxy<br />Danang Hotel',
        cta: 'BOOK A ROOM',
      },
      intro: {
        aboutUs: 'ABOUT US',
        highlight: "A premium 4-star standard retreat nestled along the romantic Han River.",
        desc: "Located on the most beautiful Bach Dang street in Da Nang city, embracing the beauty of the legendary Han River. Tan Phuong Nam Galaxy Hotel has 86 luxurious and elegantly designed rooms and Penthouses. Promising to bring a classy and complete stay experience for all visitors.",
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
          { title: 'Deluxe King', size: '28 SqM', desc: '1 King Bed, 2 Pax, City View' },
          { title: 'Deluxe Triple', size: '30 SqM', desc: '1 King & 1 Single Bed, 3 Pax, City View' },
          { title: 'Family River View', size: '40 SqM', desc: '2 Queen Beds, 4 Pax, Han River View' }
        ]
      },
      explore: {
        label: 'ROOMS & SUITES',
        title: 'Explore Rooms and Suites',
        from: 'From',
        items: [
          { title: 'Executive River View', size: '30 SqM', desc: '1 King Bed, 2 Pax, Han River View' },
          { title: 'Premier River View', size: '35 SqM', desc: '1 King Bed, 2 Pax, Han River View' },
          { title: 'TPN Penthouse', size: '100 SqM', desc: '2 Bedrooms, 2 King Beds, Living Room, Kitchen, Bathtub, 4 Pax' }
        ]
      },
      accommodations: {
        label: 'HOTEL SERVICES',
        title: 'Services and Amenities',
        items: [
          { title: 'Reception Lobby', size: '', desc: 'A sophisticated welcoming space providing our guests a majestic first impression.' },
          { title: 'The South Restaurant', size: '', desc: 'Embark on a culinary journey where Asian and Western delicacies orchestrate perfectly.' },
          { title: 'Spa & Wellness', size: '', desc: 'Indulge in a tranquil sanctuary crafted to rejuvenate your body, mind, and soul.' },
          { title: 'Stellar Skybar', size: '', desc: 'Sip on handcrafted signature cocktails while witnessing the breathtaking panoramic city view.' }
        ],
        desc: "The unseen luxury partners of true 'hospitality service'. Unmatched luxury properties along the Han River. We go beyond your expectations guaranteeing to bring unmatched luxury hospitality right to your footsteps.",
        cta: 'DISCOVER MORE SERVICES'
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
          { title: 'Excellent Service', text: 'New hotel, beautiful Han River view, enthusiastic and friendly staff, attentive service, delicious food, our family was very satisfied staying here. Hope to return to the hotel in the future. Gooddddddddddddddd', author: 'Anna N.' },
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
      },
      gallery: {
        explore: 'EXPLORE',
        title: 'Photo Gallery',
        filters: {
          'All': 'All',
          'DỊCH VỤ': 'Services',
          'MẶT NGOÀI KHÁCH SẠN': 'Hotel Exterior',
          'NHÀ HÀNG': 'Restaurant',
          'SẢNH LỄ TÂN': 'Reception Lobby'
        }
      }
    }
  },
  vi: {
    translation: {
      nav: {
        links: ['Hạng Phòng', 'Ẩm Thực', 'Dịch Vụ', 'Ưu Đãi', 'Thư Viện Ảnh'],
        bookNow: 'ĐẶT PHÒNG',
      },
      timelineNav: {
        links: ['TRANG CHỦ', 'GIỚI THIỆU', 'PHÒNG', 'ĐÁNH GIÁ']
      },
      hero: {
        subtitle: 'TRẢI NGHIỆM NGHỈ DƯỠNG ĐẲNG CẤP',
        title: 'Khách Sạn Tân Phương Nam<br />Galaxy Đà Nẵng',
        cta: 'ĐẶT PHÒNG NGAY',
      },
      intro: {
        aboutUs: 'VỀ CHÚNG TÔI',
        highlight: "Khu nghỉ dưỡng sang trọng tiêu chuẩn 4 sao tọa lạc bên bờ sông Hàn thơ mộng.",
        desc: "Tọa lạc trên cung đường Bạch Đằng đẹp bậc nhất thành phố Đà Nẵng, nơi ôm trọn vẻ đẹp của dòng sông Hàn huyền thoại. Tân Phương Nam Galaxy Hotel sở hữu 86 phòng nghỉ và Penhouse được thiết kế sang trọng và tinh tế. Hứa hẹn mang đến trải nghiệm lưu trú đẳng cấp và trọn vẹn cho mọi du khách",
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
          { title: 'Deluxe King', size: '28 m2', desc: '1 giường đôi 1m8, 2 khách, hướng phố.' },
          { title: 'Deluxe Triple', size: '30 m2', desc: '1 giường 1m6 & 1 giường 1m2, 3 khách, hướng phố.' },
          { title: 'Family River View', size: '40 m2', desc: '2 giường 1m6, 4 khách, hướng sông Hàn.' }
        ]
      },
      explore: {
        label: 'HẠNG SUITE',
        title: 'Khám Phá Hạng Suites',
        from: 'Từ',
        items: [
          { title: 'Executive River View', size: '30 m2', desc: '1 giường đôi 1m8, 2 khách, hướng sông Hàn.' },
          { title: 'Premier River View', size: '35 m2', desc: '1 giường đôi 1m8, 2 khách, có bồn tắm, hướng sông Hàn.' },
          { title: 'TPN Penthouse', size: '100 m2', desc: '2 phòng ngủ, 2 giường 1m8, phòng khách, bếp, bồn tắm, 4 khách.' }
        ]
      },
      accommodations: {
        label: 'TIỆN ÍCH',
        title: 'Dịch vụ và tiện nghi Khách sạn',
        items: [
          { title: 'Sảnh Lễ Tân', size: '', desc: 'Không gian đón khách lộng lẫy mang lại trải nghiệm mãn nhãn ngay từ giây phút đầu tiên.' },
          { title: 'Nhà Hàng The South', size: '', desc: 'Hành trình tinh hoa ẩm thực đỉnh cao với sự giao thoa hoàn hảo giữa phong vị Á - Âu.' },
          { title: 'Spa & Massage', size: '', desc: 'Nơi chốn bình yên tĩnh lặng để tái tạo năng lượng thể chất lẫn tinh thần qua liệu pháp chuyên sâu.' },
          { title: 'Stellar Skybar', size: '', desc: 'Thưởng thức cocktail thủ công thượng hạng và ngắm nhìn toàn cảnh thành phố rực rỡ từ trên cao.' }
        ],
        desc: "Khách sạn Tân Phương Nam cung cấp những dịch vụ đỉnh cao chuẩn mực. Từ không gian ẩm thực sang trọng đến khu nghỉ dưỡng và giải trí đầy phong cách.",
        cta: 'KHÁM PHÁ THÊM DỊCH VỤ'
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
          { title: 'Dịch vụ xuất sắc', text: 'Khách sạn mới, view sông Hàn đẹp, nhân viên nhiệt tình thân thiện, phục vụ chu đáo, thức ăn ngon, gia đình mình ở tại đây rất hài lòng. Hi vọng có thể quay lại khách sạn trong tương lai. Gooddddddddddddddd', author: 'Anna N.' },
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
      },
      gallery: {
        explore: 'KHÁM PHÁ',
        title: 'Thư Viện Ảnh',
        filters: {
          'All': 'Tất Cả',
          'DỊCH VỤ': 'Dịch Vụ',
          'MẶT NGOÀI KHÁCH SẠN': 'Mặt Ngoài Khách Sạn',
          'NHÀ HÀNG': 'Nhà Hàng',
          'SẢNH LỄ TÂN': 'Sảnh Lễ Tân'
        }
      }
    }
  },
  ko: {
    translation: {
      nav: {
        links: ['객실 및 스위트', '요리', '서비스', '프로모션', '갤러리'],
        bookNow: '예약하기',
      },
      timelineNav: {
        links: ['홈', '소개', '객실', '리뷰']
      },
      hero: {
        subtitle: '최고급 숙박 경험',
        title: '탄 프엉 남 갤럭시<br />다낭 호텔',
        cta: '객실 예약',
      },
      intro: {
        aboutUs: '호텔 소개',
        highlight: "낭만적인 한강변에 자리잡은 4성급 프리미엄 리조트.",
        desc: "다낭시에서 가장 아름다운 박당 거리(Bach Dang street)에 위치하여 전설적인 한강의 아름다움을 품고 있습니다. 떤 프엉 남 갤럭시 호텔은 고급스럽고 우아하게 디자인된 86개의 객실과 펜트하우스를 보유하고 있습니다. 모든 방문객에게 격조 높고 완벽한 숙박 경험을 선사할 것을 약속드립니다.",
        knowMore: '더 알아보기',
        byTheNumber: '숫자로 보는 호텔',
        stats: [
          { value: 4, suffix: '', icon: 'star', sign: '', title: '표준', desc: '현대적인 공간과 최고급 서비스를 자랑하는 4성급 기준 호텔입니다.' },
          { value: 86, suffix: '', sign: '+', title: '프리미엄 객실', desc: '리버뷰 스위트와 펜트하우스를 포함한 다양하고 우아한 객실을 제공합니다.' },
          { value: 12, suffix: '', sign: '', title: '층수', desc: '낭만적인 한강과 붐비는 다낭 시내의 파노라마 뷰를 제공합니다.' }
        ],
        amenities: [
          { name: '루프탑 수영장' },
          { name: '레스토랑' },
          { name: '피트니스 센터' },
          { name: '스파 & 마사지' }
        ]
      },
      rooms: {
        label: '럭셔리 객실',
        title: '아름다운 객실 컬렉션',
        perNight: '/ 1박',
        bed: '침대',
        guests: '투숙객',
        items: [
          { title: '슈페리어 킹', size: '25 m2', desc: '킹 침대 1개, 2인, 벽 전망' },
          { title: '슈페리어 트윈', size: '28 m2', desc: '트윈 침대 2개, 2인, 시티 뷰' },
          { title: '디럭스 킹', size: '28 m2', desc: '킹 침대 1개, 2인, 시티 뷰' },
          { title: '디럭스 트리플', size: '30 m2', desc: '킹 침대 1개 & 싱글 침대 1개, 3인, 시티 뷰' },
          { title: '패밀리 리버 뷰', size: '40 m2', desc: '퀸 침대 2개, 4인, 한강 뷰' }
        ]
      },
      explore: {
        label: '객실 및 스위트',
        title: '객실 및 스위트 둘러보기',
        from: '시작가',
        items: [
          { title: '이그제큐티브 리버 뷰', size: '30 m2', desc: '킹 침대 1개, 2인, 한강 뷰' },
          { title: '프리미어 리버 뷰', size: '35 m2', desc: '킹 침대 1개, 2인, 한강 뷰' },
          { title: 'TPN 펜트하우스', size: '100 m2', desc: '침실 2개, 킹 침대 2개, 거실, 주방, 욕조, 4인' }
        ]
      },
      accommodations: {
        label: '호텔 서비스',
        title: '서비스 및 편의 시설',
        items: [
          { title: '리셉션 로비', size: '', desc: '정교한 디자인으로 장엄한 첫인상을 선사하는 세련된 환영 공간입니다.' },
          { title: '더 사우스 레스토랑', size: '', desc: '아시아 및 서양의 진미가 완벽하게 어우러지는 무한한 미식 여행을 떠나보세요.' },
          { title: '스파 및 웰니스', size: '', desc: '몸과 마음, 영혼을 활성화하기 위해 세심하게 제작된 테라피를 즐겨보세요.' },
          { title: '스텔라 스카이바', size: '', desc: '수제 칵테일을 음미하며 숨막히는 파노라마 도시 전경을 감상하세요.' }
        ],
        desc: "탄 프엉 남 호텔은 표준 이상의 최고급 서비스를 제공합니다. 우아한 요리 공간부터 스타일리시한 리조트 및 엔터테인먼트 공간까지.",
        cta: '더 많은 서비스 둘러보기'
      },
      faq: {
        label: 'FAQ',
        title: '지금 알아야 할 모든 것',
        items: [
          { q: '호텔은 어디에 위치해 있나요?', a: '저희 호텔은 다낭 바익당 180에 위치해 있습니다. 용다리에서 850m, 한시장에서 190m, 미케 해변에서 가까운 3km 거리에 있습니다.' },
          { q: '수영장과 체육관 운영 시간은 어떻게 되나요?', a: '루프탑 수영장은 06:00부터 18:00까지, 피트니스 룸은 06:00부터 22:00까지 이용하실 수 있습니다.' },
          { q: '호텔 내 레스토랑이 있나요?', a: '예, 저희 조식 레스토랑은 06:00부터 22:00까지 200명의 손님을 수용하며 아시아, 서양 요리 및 현지 요리를 제공합니다.' },
          { q: '어떤 기본 편의 시설이 포함되어 있나요?', a: '객실에는 자동 제어 장치, 고속 Wi-Fi, 에어컨, 미니바, 평면 TV, 금고, 책상, 헤어드라이어 및 주전자가 구비되어 있습니다.' }
        ]
      },
      testimonials: {
        header: {
          title: '고객의 한마디',
          subtitle: "TPN 갤럭시에서의 숙박에 대해 고객들이 어떻게 느끼는지 들어보세요"
        },
        label: '리뷰',
        statsLabel: '리뷰 점수',
        statsNum: '9.5 / 10',
        statsText: '최근 리뷰를 종합한 전체 고객 만족도 평가입니다.',
        reviews: [
          { title: '훌륭한 서비스', text: '새 호텔, 아름다운 한강 전망, 열정적이고 친절한 직원, 세심한 서비스, 맛있는 음식, 저희 가족은 이곳에 머무는 동안 매우 만족했습니다. 앞으로 다시 오고 싶습니다. 최고오오오오오', author: 'Anna N.' },
          { title: '', text: 'TPN 갤럭시 덕분에 낭만적인 한강에서 가족들과 잊지 못할 추억을 만들 수 있었습니다.', author: 'Cynthia Morgan' },
          { title: '', text: "짧은 주말 여행일지라도 완벽한 휴가를 만끽하기 참 쉽습니다.", author: 'Steven Sunny' },
          { title: '잊을 수 없는 경험', text: 'TPN 갤럭시 호텔은 저에게 비할 데 없는 프리미엄 편의시설과 편안함을 제공했습니다.', author: 'Sarah Jenkins' },
          { title: '', text: "TPN 갤럭시와 함께 놀라운 순간들을 만들고 역동적인 도시 생활을 즐겨보세요.", author: 'Michael Wong' },
          { title: '', text: "옥상 수영장과 용다리를 훤히 볼 수 있는 전용 전망은 정말이지 숨이 멎을 지경입니다.", author: 'Emma Watson' }
        ]
      },
      cta: {
        label: '여정을 시작하세요',
        title: '오늘<br />객실 예약',
        desc: '수많은 여행자들이 TPN 갤럭시 호텔을 굳게 믿고 선택합니다. 우아하고 럭셔리한 휴식 경험을 럭셔리 라운지에서 시작하세요 (+84) 236 3 / (+84) 9 또는 info@ 로 문의하세요.',
        startNow: '시작하기',
        learnMore: '더 알아보기'
      },
      footer: {
        title: '럭셔리 경험의<br />새로운 기준',
        desc: '탄 프엉 남 갤럭시 다낭 호텔은 고객의 만족을 위해 세심하게 맞춤 설계된 현대적인 최상급 숙소의 믿을 수 있는 이름입니다.',
        bookNow: '예약하기',
        pricing: '객실 보기',
        trustedBy: '글로벌 호스피탈리티 리더들의 파트너',
        copyright: '© 2026 탄 프엉 남 갤럭시 호텔.<br />모든 권리 보유.',
        links: ['플랫폼', '법적 고지', '개인정보 보호', '연락처']
      },
      gallery: {
        explore: '탐험하기',
        title: '포토 갤러리',
        filters: {
          'All': '모두',
          'DỊCH VỤ': '서비스',
          'MẶT NGOÀI KHÁCH SẠN': '호텔 외관',
          'NHÀ HÀNG': '레스토랑',
          'SẢNH LỄ TÂN': '접수/로비'
        }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        links: ['客房和套房', '美食', '服务', '优惠', '画廊'],
        bookNow: '立即预订',
      },
      timelineNav: {
        links: ['首页', '关于我们', '客房', '评价']
      },
      hero: {
        subtitle: '尊贵的住宿体验',
        title: '新南方银河<br />岘港酒店',
        cta: '预订客房',
      },
      intro: {
        aboutUs: '关于我们',
        highlight: "坐落在浪漫韩江畔的顶级 4 星级标准度假胜地。",
        desc: "位于岘港市最美丽的白藤街（Bach Dang street），拥抱传奇韩江之美。新南方银河酒店拥有 86 间豪华典雅的客房和顶层公寓。承诺为所有游客带来高尚、完美的住宿体验。",
        knowMore: '了解更多',
        byTheNumber: '数字亮点',
        stats: [
          { value: 4, suffix: '', icon: 'star', sign: '', title: '标准', desc: '等同于 4 星级标准的酒店，提供现代空间和尊享服务。' },
          { value: 86, suffix: '', sign: '+', title: '豪华客房', desc: '提供多种优雅客房，包括江景套房和顶层公寓。' },
          { value: 12, suffix: '', sign: '', title: '楼层', desc: '尽享浪漫韩江和繁华岘港市的全景。' }
        ],
        amenities: [
          { name: '屋顶泳池' },
          { name: '餐厅' },
          { name: '健身中心' },
          { name: '水疗与按摩' }
        ]
      },
      rooms: {
        label: '豪华客房',
        title: '我们精美的客房系列',
        perNight: '/ 晚',
        bed: '床型',
        guests: '宾客',
        items: [
          { title: '高级大床房', size: '25 平方米', desc: '1张大床，2人，面墙景观' },
          { title: '高级双床房', size: '28 平方米', desc: '2张单人床，2人，市景' },
          { title: '豪华大床房', size: '28 平方米', desc: '1张大床，2人，市景' },
          { title: '豪华三人房', size: '30 平方米', desc: '1张大床 & 1张单人床，3人，市景' },
          { title: '家庭江景房', size: '40 平方米', desc: '2张大号双人床，4人，韩江景观' }
        ]
      },
      explore: {
        label: '客房与套房',
        title: '探索客房与套房',
        from: '起价',
        items: [
          { title: '行政江景房', size: '30 平方米', desc: '1张大床，2人，韩江景观' },
          { title: '尊贵江景房', size: '35 平方米', desc: '1张大床，2人，韩江景观' },
          { title: 'TPN 顶层公寓', size: '100 平方米', desc: '2间卧室，2张大床，客厅，厨房，浴缸，4人' }
        ]
      },
      accommodations: {
        label: '酒店服务',
        title: '服务和设施',
        items: [
          { title: '接待大堂', size: '', desc: '精致的迎宾空间，为宾客提供庄严而奢华的第一印象。' },
          { title: 'The South 餐厅', size: '', desc: '踏上美妙的美食之旅，这里完美融合了亚洲和西方的各色美味。' },
          { title: '水疗与康体', size: '', desc: '沉浸在宁静的避世圣地，这里旨在让您的身心全新焕发青春活力。' },
          { title: 'Stellar 空中酒吧', size: '', desc: '品尝现调招牌鸡尾酒，同时坐拥令人惊叹的繁华城市全景。' }
        ],
        desc: "新南方酒店提供比标准更高级的服务。从优雅的美食空间到时尚的度假和娱乐区。",
        cta: '发现更多服务'
      },
      faq: {
        label: '常见问题',
        title: '您现在需要了解的一切',
        items: [
          { q: '酒店位置在哪里？', a: '我们位于岘港市白藤街 180 号。距离龙桥仅 850 米，距离汉市场 190 米，距离美溪海滩 3 公里。' },
          { q: '游泳池和健身房的营业时间是什么时候？', a: '屋顶泳池的开放时间为 06:00 至 18:00，健身房的开放时间为 06:00 至 22:00。' },
          { q: '酒店内有餐厅吗？', a: '是的，我们的餐厅供应亚洲菜、西餐和当地美食，营业时间为 06:00 至 22:00，可容纳 200 位客人。' },
          { q: '包含哪些基本设施？', a: '客房配备自动控制单元、高速 Wi-Fi、空调、迷你吧、平板电视、保险箱、办公桌、吹风机和热水壶。' }
        ]
      },
      testimonials: {
        header: {
          title: '客人怎么说',
          subtitle: "让我们听听客人在 TPN 银河入住的感受"
        },
        label: '评价',
        statsLabel: '评分',
        statsNum: '9.5 / 10',
        statsText: '基于近期评价的整体客人满意度。',
        reviews: [
          { title: '卓越的服务', text: '新酒店，绝佳韩江景，员工热情友好，服务周到，食物美味，我们全家住在这里非常满意。希望将来有机会再来。非非非非常棒', author: 'Anna N.' },
          { title: '', text: '感谢 TPN 银河，让我在浪漫的韩江边与家人留下了难忘的回忆。', author: 'Cynthia Morgan' },
          { title: '', text: "即使只有一个短暂的周末旅行，也能轻松享受完美的假期。", author: 'Steven Sunny' },
          { title: '难忘的经历', text: 'TPN 银河酒店为我提供了丰富的顶级设施和无与伦比的舒适感。', author: 'Sarah Jenkins' },
          { title: '', text: "与 TPN 银河一起度过令人难以置信的时刻，拥抱充满活力的城市生活。", author: 'Michael Wong' },
          { title: '', text: "屋顶泳池和龙桥的专属景观绝对令人叹为观止。", author: 'Emma Watson' }
        ]
      },
      cta: {
        label: '开启您的旅程',
        title: '今天<br />预订客房',
        desc: '加入无数信赖 TPN 银河酒店的旅行者行列。请通过 (+84) 236 3 / (+84) 9 或 info@ 联系我们，开始探索豪华休闲体验。',
        startNow: '现在开始',
        learnMore: '了解更多'
      },
      footer: {
        title: '尊贵体验的<br />新标准。',
        desc: '新南方银河岘港酒店是现代顶级住宿的信赖之选，精准为您量身定制，确保您满意。',
        bookNow: '立即预订',
        pricing: '查看客房',
        trustedBy: '全球款待业领袖信赖',
        copyright: '© 2026 新南方银河酒店。<br />保留所有权利。',
        links: ['平台', '法律信息', '隐私政策', '联系我们']
      },
      gallery: {
        explore: '探索',
        title: '画廊',
        filters: {
          'All': '全部',
          'DỊCH VỤ': '服务',
          'MẶT NGOÀI KHÁCH SẠN': '酒店外观',
          'NHÀ HÀNG': '餐厅',
          'SẢNH LỄ TÂN': '接待/大堂'
        }
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
