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
        desc: 'Tan Phuong Nam Galaxy Hotel features modern architectural style. The room system is equipped with premium furniture. The open space and airy view help visitors fully enjoy the beauty of the city. This will be an ideal stop for those seeking comfort and a distinct hospitality experience.',
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
      roomDetail: {
        size: 'Size',
        beds: 'Beds',
        guests: 'Guests',
        bathrooms: 'Bathrooms',
        overview: 'Room Overview',
        overviewDesc: 'Step into an oasis of comfort and prestige. Our perfectly curated space perfectly blends modern luxury with elegant aesthetics, ensuring a profound hospitality experience tailored entirely to your desires. Welcome to Tan Phuong Nam Galaxy, where dreams meet reality.',
        fixedAmenities: ['Smart TV', 'Air Conditioning', 'Free Wi-Fi', 'Hair Dryer', 'Safe Box', 'Minibar', 'Buffet Breakfast', 'Standing Bathtub'],
        amenities: 'Amenities',
        highlights: 'Privileges & Views',
        gallery: 'Room Gallery',
        needAssistance: 'Need Assistance?',
        assistanceDesc: 'Our reservations team is available 24/7 to help you tailor your perfect stay.',
        contactUs: 'Contact Us',
        smartTv: 'Smart TV',
        minibar: 'Minibar',
        wifi: 'High-Speed WiFi',
        upTo: 'Up to'
      },
      accommodations: {
        label: 'HOTEL SERVICES',
        title: 'Services and Amenities',
        items: [
          { title: 'Reception Lobby', size: '', desc: 'A sophisticated welcoming space providing our guests a majestic first impression. The spacious area is designed with a prime waiting lounge offering complimentary tea and coffee.', hours: '24/7', locationText: '1st Floor', capacityText: '', schedules: [], features: ["24/7 Guest Support","Express Check-in","Currency Exchange","Tour Information"] },
          { title: 'The South Restaurant', size: '', desc: 'Located on the 2nd floor of the hotel, The South Restaurant features elegant design and views overlooking the Han River, allowing you to start your day with an energizing morning meal.', hours: '06:00 to 22:00', locationText: '2nd Floor', capacityText: '200 guests', schedules: ["Breakfast buffet: 06:00 - 10:00","Lunch and Dinner: 11:00 - 22:00"], features: [] },
          { title: 'Spa & Wellness', size: '', desc: 'Situated on the 1st floor of Tan Phuong Nam Galaxy, the Spa is harmoniously designed with varied color tones, creating a sophisticated and relaxing sanctuary.', hours: '09:00 to 21:00', locationText: '1st Floor', capacityText: '', schedules: [], features: ["Body Massage","Foot Massage","Facial Spa","Body Scrub","Nail Care"] },
          { title: 'Stellar Skybar', size: '', desc: 'Positioned on the 12th floor, Sky Bar Stellar is the ideal destination to indulge in an elevated relaxing space with panoramic views of the Han River and Da Nang city.', hours: '10:00 to 22:00', locationText: '12th Floor', capacityText: '', schedules: [], features: ["Signature Cocktails","Acoustic Music","Panoramic View","VIP Lounge"] },
          { title: 'Gym & Fitness Center', size: '', desc: 'Our Fitness Center is equipped with cutting-edge machinery, catering to all your workout demands from cardio to intensive strength training.', hours: '06:00 to 22:00', locationText: '2nd Floor', capacityText: '50 guests', schedules: [], features: ["Modern Treadmills","Free Weights Area","Personal Trainers","Complimentary Water & Towels"] },
          { title: 'Rooftop Infinity Pool', size: '', desc: 'Immerse yourself in the cool, refreshing water at the rooftop infinity swimming pool, where you can unwind while taking in the magnificent sunset.', hours: '06:00 to 18:00', locationText: 'Rooftop Floor', capacityText: '', schedules: [], features: ["Lounging Sunbeds","Poolside Beverage Service","Safe Kids Area","Complimentary Fresh Towels"] },
          { title: 'Conference Room', size: '', desc: 'An ideal venue for organizing corporate events, thematic seminars, or professional and lavish banquets.', hours: 'Upon booking', locationText: '12th Floor', capacityText: 'Up to 100 guests', schedules: [], features: ["200-inch LED Screen","Surround Sound System","Teabreak Pastries & Tea","Ultra High-Speed Wi-Fi"] },
          { title: 'Coffee Lounge', size: '', desc: 'Located in the 1st floor reception lobby, the Coffee Lounge offers an ideal space for relaxation with an elegant design, serving premium coffees and exquisite afternoon teas.', hours: '07:00 to 22:00', locationText: '1st Floor', capacityText: '', schedules: [], features: ["Specialty coffee", "English afternoon tea", "Fresh daily pastries", "Partner meeting space"] }
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
      },
      culinary: {
        label: 'FINE DINING',
        title: 'The South Restaurant',
        description: 'Located on the 2nd floor, The South Restaurant features a minimalist and elegant design, bringing a modern and classy feeling to diners. It is undoubtedly an unmissable destination for those who want to experience a luxurious dining space in Da Nang. With a romantic and cozy atmosphere, you can enjoy the exquisite flavors of our culinary offerings while immersing yourself in the shimmering city lights and the sparkling Han River.',
        exploreMenu: 'Explore Our Menu',
        mainMenu: 'Main Course Menu',
        beverageMenu: 'Beverage & Wine List',
        bookTable: 'Book A Table',
        comingSoon: 'Coming Soon',
        comingSoonDesc: 'We are currently crafting a luxurious new menu experience. Please check back later or contact our reception for dining options.',
        close: 'Close'
      },
      offer: {
        label: 'SPECIAL OFFERS',
        title: 'Promotion & Packages',
        description: 'Discover curated experiences and exclusive offers designed to make your stay unforgettable at TPN Galaxy.',
        bookNow: 'Book Now',
        learnMore: 'Learn More',
        viewTerms: 'Terms & Conditions',
        items: [
          {
            id: 'stellar-happy-hour',
            validity: 'Application time: 17:00 – 19:00 daily',
            title: 'Stellar Top Bar Happy Hour Promotion',
            description: 'Buy 1 get 1 free on beer, cocktail and wine by the glass.\nNote: This promotion is not applicable in conjunction with other events.'
          },
          {
            id: 'south-restaurant-discount',
            validity: 'Application time: 11:00 – 22:00 daily',
            title: 'The South Restaurant F&B discount',
            description: '20% discount on total F&B bill.\nNote: This promotion is not applicable in conjunction with other events.'
          }
        ]
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
        highlight: "",
        desc: "Tân Phương Nam Galaxy Hotel sở hữu 86 phòng nghỉ và Penhouse được thiết kế sang trọng và tinh tế. Hứa hẹn mang đến trải nghiệm lưu trú đẳng cấp và trọn vẹn cho mọi du khách.",
        knowMore: '',
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
        desc: 'Khách sạn Tân Phương Nam Galaxy mang phong cách kiến trúc hiện đại. Hệ thống phòng nghỉ được trang bị nội thất cao cấp. Không gian mở cùng tầm nhìn thoáng đãng giúp du khách tận hưởng trọn vẹn vẻ đẹp của thành phố. Đây sẽ là điểm dừng chân lý tưởng cho những ai tìm kiếm sự thoải mái và trải nghiệm nghỉ dưỡng khác biệt.',
        items: [
          { title: 'Superior King', size: '25 m2', desc: 'Superior King room được thiết kế với không gian nhỏ gọn nhưng vô cùng ấm cúng, mang lại cảm giác thư giãn. Giường King êm ái sẽ là lựa chọn lý tưởng cho du khách thích sự yên tĩnh.', highlights: ['Thêm buffet sáng', 'Bồn tắm đứng'] },
          { title: 'Superior Twin', size: '25 m2', desc: 'Phòng Superior Twin với diện tích 25m2 mang đến không gian ấm cúng. Đây là lựa chọn lý tưởng cho những ai muốn tận hưởng sự tiện nghi và vẻ đẹp đặc trưng của thành phố Đà Nẵng.', highlights: ['Ngắm nhìn thành phố sôi động về đêm', 'Thêm buffet sáng', 'Bồn tắm đứng'] },
          { title: 'Deluxe King', size: '28 m2', desc: 'Deluxe King room được thiết kế với không gian mở kết hợp với ánh sáng tự nhiên tạo cảm giác nhẹ nhàng và yên bình. Giường King size êm ái tạo giấc ngủ thoải mái cho du khách.', highlights: ['Ngắm nhìn khung cảnh thành phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },
          { title: 'Deluxe Triple', size: '30 m2', desc: 'Deluxe Triple room được thiết kế với 1 giường lớn & 1 giường nhỏ mang đến không gian nghỉ ngơi thoải mái cho cả gia đình.', highlights: ['Hướng phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },
          { title: 'Family River View', size: '40 m2', desc: 'Với diện tích 40m2 thoáng rộng, mang đến không gian ấm cúng cho cả gia đình nghỉ ngơi.', highlights: ['Hướng nhìn ra dòng sông Hàn thơ mộng', 'Thêm buffet sáng', 'Bồn tắm nằm'] },
          { title: 'Executive River View', size: '30 m2', desc: 'Chạm vào vẻ đẹp sông Hàn. Thức dậy cùng ánh nắng nhẹ trên sông Hàn, tận hưởng không gian yên bình trong căn phòng Executive River View với giường 1m8 êm ái. Mỗi khoảnh khắc tại đây – từ bình minh dịu dàng đến ánh đèn đêm phản chiếu trên mặt nước – đều mang lại cảm giác thư giãn và tinh tế, dành riêng cho bạn.', highlights: ['View Sông Hàn tuyệt đẹp', 'Thêm buffet sáng', 'Bồn tắm nằm thư giãn'] }
        ]
      },
      explore: {
        label: 'HẠNG SUITE',
        title: 'Khám phá hạng Suite',
        desc: 'Trải nghiệm không gian xa hoa và đẳng cấp bậc nhất tại các phòng Suite của Tân Phương Nam Galaxy. Tận hưởng đặc quyền thượng lưu cùng tầm nhìn tuyệt đẹp ôm trọn dòng sông Hàn thơ mộng.',
        from: 'Từ',
        items: [
          { title: 'Premier River View', size: '35 m2', desc: 'Premier River View mang đến diện tích phòng rộng rãi và ban công thoải mái.', highlights: ['Ngắm toàn cảnh thành phố về đêm bên dòng sông Hàn', 'Thêm buffet sáng', 'Bồn tắm nằm', 'Sofa bed'] },
          { title: 'TPN Penthouse', size: '100 m2', desc: 'TPN Penthouse rộng 100m2, riêng tư nằm trên tầng cao nhất của khách sạn. Quý khách sẽ có cảm giác như đang ở trong chính ngôi nhà của mình.', highlights: ['View trực diện Sông Hàn', '2 phòng ngủ lớn, 1 phòng khách sang trọng, 1 căn bếp ấm cúng', 'Thêm buffet sáng', 'Bồn tắm nằm', 'Kitchen room', 'Living room'] }
        ]
      },
      roomDetail: {
        size: 'Diện tích',
        beds: 'Giường',
        guests: 'Khách',
        bathrooms: 'Phòng tắm',
        overview: 'Tổng Quan Phòng',
        overviewDesc: '',
        fixedAmenities: ['TV thông minh', 'Điều hòa', 'Wifi miễn phí', 'Sấy tóc', 'Két sắt', 'Minibar', 'Ăn sáng buffet', 'Bồn tắm đứng'],
        amenities: 'Tiện Nghi',
        highlights: 'Đặc Quyền & Tầm Nhìn',
        gallery: 'Thư Viện Ảnh',
        needAssistance: 'Cần Hỗ Trợ?',
        assistanceDesc: 'Đội ngũ đặt phòng của chúng tôi sẵn sàng 24/7 để giúp bạn thiết kế một kỳ nghỉ hoàn hảo.',
        contactUs: 'Liên Hệ',
        smartTv: 'Smart TV',
        minibar: 'Minibar',
        wifi: 'WiFi Tốc Độ Cao',
        upTo: 'Tối đa'
      },
      accommodations: {
        label: 'TIỆN ÍCH',
        title: 'Dịch vụ và tiện nghi Khách sạn',
        items: [
          { title: 'Sảnh Lễ Tân', size: '', desc: 'Không gian đón khách lộng lẫy mang lại trải nghiệm mãn nhãn ngay từ giây phút đầu tiên. Khu vực được thiết kế rộng rãi với khu vực chờ sang trọng, phục vụ trà và cà phê miễn phí.', hours: '24/7', locationText: 'Tầng 1', capacityText: '', schedules: [], features: ["Hỗ trợ khách hàng 24/7","Check-in/Check-out nhanh chóng","Dịch vụ thu đổi ngoại tệ","Thông tin du lịch"] },
          { title: 'Nhà Hàng The South', size: '', desc: 'Nhà hàng The South tọa lạc tại tầng 2 của khách sạn, với thiết kế sang trọng và tầm nhìn hướng ra Sông Hàn để quý khách có thể bắt đầu ngày mới với một bữa sáng tràn đầy năng lượng.', hours: '06:00 đến 22:00', locationText: 'Tầng 2', capacityText: '200 khách', schedules: ["Breakfast buffet: 06:00 - 10:00","Lunch and Dinner: 11:00 - 22:00"], features: [] },
          { title: 'Spa & Wellness', size: '', desc: 'Nằm tại tầng 1 của Khách sạn Tân Phương Nam Galaxy, Spa được thiết kế với sự kết hợp hài hòa của nhiều gam màu khác nhau, tạo nên một không gian vừa tinh tế vừa thư giãn. Không gian yên bình, tách biệt khỏi nhịp sống ồn ào.', hours: '09:00 đến 21:00', locationText: 'Tầng 1', capacityText: '', schedules: [], features: ["Body Massage","Foot Massage","Facial Spa","Body Scrub","Nail Care"] },
          { title: 'Stellar Skybar', size: '', desc: 'Tọa lạc tại tầng 12, Sky Bar Stellar là điểm đến lý tưởng để tận hưởng không gian thư giãn trên cao với tầm nhìn toàn cảnh sông Hàn và thành phố Đà Nẵng.', hours: '10:00 đến 22:00', locationText: 'Tầng 12', capacityText: '', schedules: [], features: ["Signature Cocktails","Acoustic Music","Panoramic View","VIP Lounge"] },
          { title: 'Phòng Gym & Fitness', size: '', desc: 'Phòng Gym được trang bị hệ thống máy móc hiện đại, đáp ứng mọi nhu cầu tập luyện của quý khách từ cardio đến rèn luyện thể lực chuyên sâu.', hours: '06:00 đến 22:00', locationText: 'Tầng 2', capacityText: '50 khách', schedules: [], features: ["Máy chạy bộ hiện đại","Khu vực tạ tự do","Huấn luyện viên cá nhân","Nước & khăn miễn phí"] },
          { title: 'Hồ Bơi Vô Cực Rooftop', size: '', desc: 'Hòa mình vào làn nước mát lạnh tại Hồ bơi vô cực trên tầng thượng, nơi quý khách có thể vừa thư giãn vừa ngắm trọn vẹn cảnh sắc hoàng hôn tuyệt đẹp trên sông Hàn.', hours: '06:00 đến 18:00', locationText: 'Tầng thượng (Rooftop)', capacityText: '', schedules: [], features: ["Khu vực ghế tắm","Phục vụ đồ uống tại hồ","Khu vực trẻ em an toàn","Khăn tắm miễn phí"] },
          { title: 'Phòng Hội Nghị & Sự Kiện', size: '', desc: 'Nơi lý tưởng để tổ chức các sự kiện doanh nghiệp, hội thảo chuyên đề hay những buổi tiệc xa hoa chuyên nghiệp.', hours: 'Theo yêu cầu (Booking)', locationText: 'Tầng 12', capacityText: '100 khách', schedules: [], features: ["Màn hình LED 200 inch","Hệ thống âm thanh đa chiều","Teabreak giữa giờ","Wi-Fi tốc độ cực cao"] },
          { title: 'Coffee Lounge', size: '', desc: 'Tọa lạc tại sảnh đón tiếp tầng 1, Coffee Lounge mang đến không gian thư giãn lý tưởng với thiết kế sang trọng, phục vụ các loại cà phê thượng hạng và trà chiều tinh tế.', hours: '07:00 đến 22:00', locationText: 'Tầng 1', capacityText: '', schedules: [], features: ["Cà phê đặc sản", "Trà chiều kiểu Anh", "Bánh ngọt tươi mỗi ngày", "Không gian gặp gỡ đối tác"] }
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
      },
      culinary: {
        label: 'ẨM THỰC ĐỈNH CAO',
        title: 'Nhà hàng The South',
        description: 'Nằm tại tầng 2 của khách sạn, nhà hàng The South được thiết kế tối giản và tinh tế, mang đến cảm giác hiện đại và đẳng cấp cho các thực khách dùng bữa tại nơi đây. Nơi đây chắc chắn là điểm đến không thể bỏ lỡ dành cho những thực khách muốn trải nghiệm không gian nhà hàng sang trọng ở Đà Nẵng. Với không gian lãng mạn và ấm cúng, từ đây bạn có thể thưởng thức phong vị đầy tinh tế của ẩm thực, đắm chìm trong ánh đèn lung linh của thành phố về đêm cùng dòng sông Hàn lấp lánh.',
        exploreMenu: 'Khám phá thực đơn',
        mainMenu: 'Thực đơn chính',
        beverageMenu: 'Danh sách đồ uống và rượu',
        bookTable: 'ĐẶT BÀN NGAY',
        comingSoon: 'Sắp Ra Mắt',
        comingSoonDesc: 'Chúng tôi đang chuẩn bị một trải nghiệm thực đơn hoàn toàn mới mang đẳng cấp 5 sao. Vui lòng quay lại sau hoặc liên hệ lễ tân để được hỗ trợ.',
        close: 'Đóng'
      },
      offer: {
        label: 'ƯU ĐÃI ĐẶC BIỆT',
        title: 'Gói Ưu Đãi & Khuyến Mãi',
        description: 'Khám phá các trải nghiệm được tuyển chọn và những ưu đãi độc quyền để làm cho kỳ nghỉ của bạn tại TPN Galaxy thật khó quên.',
        bookNow: 'Đặt Ngay',
        learnMore: 'Tìm Hiểu Thêm',
        viewTerms: 'Điều Khoản & Điều Kiện',
        items: [
          {
            id: 'stellar-happy-hour',
            validity: 'Thời gian áp dụng: 17:00 – 19:00 hằng ngày',
            title: 'Stellar Top Bar Happy Hour Promotion',
            description: 'Mua 1 tặng 1 đồ uống.\nKhông áp dụng đồng thời với các sự kiện khác.'
          },
          {
            id: 'south-restaurant-discount',
            validity: 'Thời gian áp dụng: 11:00 – 22:00 hằng ngày',
            title: 'The South Restaurant F&B discount',
            description: 'Giảm 20% trên tổng bill.\nKhông áp dụng đồng thời với các sự kiện khác.'
          }
        ]
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
        desc: '탄 프엉 남 호텔은 현대적인 건축 양식을 자랑합니다. 객실 시스템은 최고급 가구를 갖추고 있습니다. 탁 트인 개방형 공간과 아름다운 전망은 관광객이 도시의 아름다움을 만끽할 수 있게 해줍니다. 이곳은 편안함과 특별한 휴식을 찾는 분들에게 이상적인 장소가 될 것입니다.',
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
      roomDetail: {
        size: '크기',
        beds: '침대',
        guests: '투숙객',
        bathrooms: '욕실',
        overview: '객실 개요',
        overviewDesc: '편안함과 품격이 있는 오아시스로 들어가 보십시오. 완벽하게 큐레이팅된 저희 공간은 현대적인 럭셔리와 우아한 미학을 완벽하게 조화시켜 고객의 요구에 완벽하게 맞춘 깊은 경험을 보장합니다. 꿈이 현실이 되는 탄 프엉 남 갤럭시에 오신 것을 환영합니다.',
        fixedAmenities: ['스마트 TV', '에어컨', '무료 Wi-Fi', '헤어드라이어', '금고', '미니바', '조식 뷔페', '샤워 부스'],
        amenities: '어메니티',
        highlights: '특권 및 뷰',
        gallery: '객실 갤러리',
        needAssistance: '도움이 필요하신가요?',
        assistanceDesc: '저희 예약 팀은 완벽한 숙박을 도와드리기 위해 연중무휴 24시간 대기하고 있습니다.',
        contactUs: '문의하기',
        smartTv: '스마트 TV',
        minibar: '미니바',
        wifi: '초고속 와이파이',
        upTo: '최대'
      },
      accommodations: {
        label: '호텔 서비스',
        title: '서비스 및 편의 시설',
        items: [
          { title: '리셉션 로비', size: '', desc: '정교한 디자인으로 장엄한 첫인상을 선사하는 세련된 환영 공간입니다.', hours: '24/7', locationText: '1층', capacityText: '', schedules: [], features: ["24/7 고객 지원","빠른 체크인/체크아웃","환전 서비스","투어 정보"] },
          { title: '더 사우스 레스토랑', size: '', desc: '호텔 2층에 위치한 레스토랑으로 우아한 디자인과 한강 전망을 자랑합니다.', hours: '06:00 - 22:00', locationText: '2층', capacityText: '200명', schedules: ["조식 뷔페: 06:00 - 10:00","점심 및 저녁: 11:00 - 22:00"], features: [] },
          { title: '스파 및 웰니스', size: '', desc: '다양한 톤이 조화롭게 디자인되어 세련되고 편안한 휴식 공간을 선사합니다.', hours: '09:00 - 21:00', locationText: '1층', capacityText: '', schedules: [], features: ["바디 마사지","발 마사지","페이셜 스파","바디 스크럽","네일 관리"] },
          { title: '스텔라 스카이바', size: '', desc: '수제 칵테일을 음미하며 숨막히는 파노라마 도시 전경을 감상하세요.', hours: '10:00 - 22:00', locationText: '12층', capacityText: '', schedules: [], features: ["시그니처 칵테일","어쿠스틱 음악","파노라마 뷰","VIP 라운지"] },
          { title: '피트니스 센터', size: '', desc: '최신 장비가 완비된 피트니스 센터에서 운동의 모든 요구를 만족시켜 드립니다.', hours: '06:00 - 22:00', locationText: '2층', capacityText: '50명', schedules: [], features: ["현대식 러닝머신","프리웨이트 구역","개인 트레이너 제공","무료 생수 및 수건"] },
          { title: '루프탑 수영장', size: '', desc: '전설적인 한강의 아름다운 일몰을 감상하며 옥상 인피니티 풀에서 휴식을 취하세요.', hours: '06:00 - 18:00', locationText: '루프탑 층', capacityText: '', schedules: [], features: ["선베드","풀사이드 음료 서비스","안전한 어린이 구역","무료 수건"] },
          { title: '컨퍼런스 및 이벤트 룸', size: '', desc: '기업 행사나 세미나를 조직하기 위한 완벽한 장소입니다. 방음 설비가 완비되어 있습니다.', hours: '예약 문의', locationText: '12층', capacityText: '최대 100명', schedules: [], features: ["200인치 LED 스크린","서라운드 사운드 시스템","티 브레이크 제공","초고속 와이파이"] },
          { title: '커피 라운지', size: '', desc: '1층 공간에 위치한 커피 라운지는 우아한 디자인으로 휴식을 위한 이상적인 공간을 제공하며, 최고급 커피와 정교한 애프터눈 티를 제공합니다.', hours: '07:00 - 22:00', locationText: '1층', capacityText: '', schedules: [], features: ["스페셜티 커피", "잉글리시 애프터눈 티", "매일 굽는 신선한 페이스트리", "비즈니스 미팅 공간"] }
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
      },
      culinary: {
        label: '파인 다이닝',
        title: '더 사우스 레스토랑',
        description: '호텔 2층에 위치한 더 사우스 레스토랑은 미니멀하고 우아한 디자인으로 식사하는 고객에게 현대적이고 고급스러운 느낌을 선사합니다. 다낭에서 고급스러운 식사 공간을 경험하고자 하는 분들에게 놓칠 수 없는 곳입니다. 로맨틱하고 아늑한 분위기 속에서 반짝이는 도시의 불빛과 아름다운 한강에 흠뻑 빠져들어 절묘한 음식의 맛을 즐길 수 있습니다.',
        exploreMenu: '메뉴 둘러보기',
        mainMenu: '메인 코스 메뉴',
        beverageMenu: '음료 및 와인 리스트',
        bookTable: '테이블 예약',
        comingSoon: '출시 예정',
        comingSoonDesc: '우리는 현재 고급스럽고 새로운 메뉴 경험을 제작하고 있습니다. 나중에 다시 확인하시거나 리셉션에 문의해 주십시오.',
        close: '닫기'
      },
      offer: {
        label: '특별 혜택',
        title: '프로모션 및 패키지',
        description: 'TPN Galaxy에서 잊지 못할 숙박을 위해 엄선된 경험과 특별 혜택을 찾아보세요.',
        bookNow: '지금 예약',
        learnMore: '더 알아보기',
        viewTerms: '이용 약관',
        items: [
          {
            id: 'stellar-happy-hour',
            validity: '적용 시간: 매일 17:00 - 19:00',
            title: '스텔라 탑 바 해피 아워',
            description: '맥주, 칵테일, 글래스 와인 1+1 이벤트.\n참고: 본 프로모션은 다른 이벤트와 중복 적용되지 않습니다.'
          },
          {
            id: 'south-restaurant-discount',
            validity: '적용 시간: 매일 11:00 - 22:00',
            title: '더 사우스 레스토랑 F&B 할인',
            description: 'F&B 총 청구 금액의 20% 할인.\n참고: 본 프로모션은 다른 이벤트와 중복 적용되지 않습니다.'
          }
        ]
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
        desc: '新南方酒店采用现代建筑风格。客房系统配备高级家具。开阔的空间和一览无余的景观帮助游客充分享受这座城市的美丽。对于那些寻求舒适和独特休闲体验的人来说，这将是一个理想的停留地。',
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
      roomDetail: {
        size: '面积',
        beds: '床型',
        guests: '宾客',
        bathrooms: '浴室',
        overview: '客房概述',
        overviewDesc: '步入这片兼具舒适与尊贵的绿洲。我们精心打造的空间完美融合了现代奢华与优雅美学，确保为您带来完全满足您愿望的深刻体验。欢迎来到新南方银河，这里是梦想成真的地方。',
        fixedAmenities: ['智能电视', '空调', '免费 Wi-Fi', '吹风机', '保险箱', '迷你吧', '自助早餐', '独立淋浴间'],
        amenities: '设施',
        highlights: '特权与景观',
        gallery: '客房画廊',
        needAssistance: '需要帮助？',
        assistanceDesc: '我们的预订团队 24/7 全天候为您服务，帮助您定制完美的住宿。',
        contactUs: '联系我们',
        smartTv: '智能电视',
        minibar: '迷你吧',
        wifi: '高速 WiFi',
        upTo: '最多'
      },
      accommodations: {
        label: '酒店服务',
        title: '服务和设施',
        items: [
          { title: '接待大堂', size: '', desc: '精致的迎宾空间，为宾客提供庄严而奢华的第一印象。', hours: '24/7', locationText: '1楼', capacityText: '', schedules: [], features: ["24/7 客户支持","快速办理入住/退房","货币兑换","旅游资讯"] },
          { title: 'The South 餐厅', size: '', desc: '位于酒店 2 楼，The South 餐厅享有优雅的设计和韩江美景。', hours: '06:00 至 22:00', locationText: '2楼', capacityText: '200人', schedules: ["自助早餐：06:00 - 10:00","午餐和晚餐：11:00 - 22:00"], features: [] },
          { title: '水疗与康体', size: '', desc: '沉浸在宁静的避世圣地，这里旨在让您的身心全新焕发青春活力。', hours: '09:00 至 21:00', locationText: '1楼', capacityText: '', schedules: [], features: ["全身按摩","足部按摩","面部水疗","身体磨砂","美甲护理"] },
          { title: 'Stellar 空中酒吧', size: '', desc: '品尝现调招牌鸡尾酒，同时坐拥令人惊叹的繁华城市全景。', hours: '10:00 至 22:00', locationText: '12楼', capacityText: '', schedules: [], features: ["招牌鸡尾酒","原声音乐","全景","VIP休息室"] },
          { title: '健身中心', size: '', desc: '我们的健身中心配备了尖端器械，满足您所有的锻炼需求。', hours: '06:00 至 22:00', locationText: '2楼', capacityText: '50人', schedules: [], features: ["现代跑步机","自由重量区","私人教练","免费提供水和毛巾"] },
          { title: '屋顶无边泳池', size: '', desc: '在屋顶无边泳池的凉爽海水中沉浸，欣赏美丽的日落。', hours: '06:00 至 18:00', locationText: '屋顶', capacityText: '', schedules: [], features: ["日光浴躺椅","池畔饮料服务","安全儿童区","免费提供毛巾"] },
          { title: '会议与活动室', size: '', desc: '举办企业活动、主题研讨会或专业豪华宴会的理想场所。', hours: '需预订', locationText: '12楼', capacityText: '做多100人', schedules: [], features: ["200英寸LED屏幕","环绕声系统","茶歇糕点和茶水","超高速 Wi-Fi"] },
          { title: '咖啡厅', size: '', desc: '咖啡厅位于1楼接待大堂，设计优雅，是您放松身心的理想场所。这里供应高级咖啡和精致的下午茶。', hours: '07:00 至 22:00', locationText: '1楼', capacityText: '', schedules: [], features: ["特色咖啡", "英式下午茶", "每日新鲜糕点", "商务会议空间"] }
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
      },
      culinary: {
        label: '高级餐饮',
        title: 'The South 餐厅',
        description: 'The South 餐厅位于酒店 2 楼，采用极简优雅的设计，为就餐者带来现代而尊贵的感觉。对于想在岘港体验豪华就餐空间的人来说，这里绝对是不容错过的目的地。在浪漫温馨的氛围中，您可以尽情享受美食的绝妙风味，同时沉浸在城市闪烁的灯光和波光粼粼的韩江之中。',
        exploreMenu: '探索我们的菜单',
        mainMenu: '主菜菜单',
        beverageMenu: '饮料和酒水单',
        bookTable: '预订餐桌',
        comingSoon: '即将推出',
        comingSoonDesc: '我们目前正在精心打造全新的奢华菜单体验。请稍后查看或联系我们的前台。',
        close: '关闭'
      },
      offer: {
        label: '特别优惠',
        title: '促销与套餐',
        description: '探索为使您在 TPN Galaxy 拥有难忘住宿体验而精心设计的专属选项和优惠。',
        bookNow: '立即预订',
        learnMore: '了解更多',
        viewTerms: '条款和条件',
        items: [
          {
            id: 'stellar-happy-hour',
            validity: '适用时间：每天 17:00 – 19:00',
            title: 'Stellar 空中酒吧 欢乐时光',
            description: '杯装啤酒、鸡尾酒及葡萄酒买一送一。\n注：此优惠不可与其他活动同时使用。'
          },
          {
            id: 'south-restaurant-discount',
            validity: '适用时间：每天 11:00 – 22:00',
            title: 'The South 餐厅餐饮折扣',
            description: '全单餐饮消费享 8 折（20% off）优惠。\n注：此优惠不可与其他活动同时使用。'
          }
        ]
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
