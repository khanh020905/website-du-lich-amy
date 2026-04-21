import sys

# Update i18n.ts
with open('src/i18n.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# in vi: move "Executive River View" from rooms.items to explore.items
old_vi_rooms = """          { title: 'Deluxe Triple', size: '30 m2', desc: 'Deluxe Triple room được thiết kế với 1 giường lớn & 1 giường nhỏ mang đến không gian nghỉ ngơi thoải mái cho cả gia đình.', highlights: ['Hướng phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },
          { title: 'Executive River View', size: '30 m2', desc: 'Chạm vào vẻ đẹp sông Hàn. Thức dậy cùng ánh nắng nhẹ trên sông Hàn, tận hưởng không gian yên bình trong căn phòng Executive River View với giường 1m8 êm ái. Mỗi khoảnh khắc tại đây – từ bình minh dịu dàng đến ánh đèn đêm phản chiếu trên mặt nước – đều mang lại cảm giác thư giãn và tinh tế, dành riêng cho bạn.', highlights: ['View Sông Hàn tuyệt đẹp', 'Thêm buffet sáng', 'Bồn tắm nằm thư giãn'] }
        ]
      },
      explore: {
        label: '',
        title: 'Khám phá',
        desc: 'Trải nghiệm không gian xa hoa và đẳng cấp bậc nhất tại các phòng Suite của Tân Phương Nam Galaxy. Tận hưởng đặc quyền thượng lưu cùng tầm nhìn tuyệt đẹp ôm trọn dòng sông Hàn thơ mộng.',
        from: 'Từ',
        items: [
          { title: 'Premier River View', size: '35 m2', desc: 'Premier River View mang đến diện tích phòng rộng rãi và ban công thoải mái.', highlights: ['Ngắm toàn cảnh thành phố về đêm bên dòng sông Hàn', 'Thêm buffet sáng', 'Bồn tắm nằm', 'Sofa bed'] },"""

new_vi_rooms = """          { title: 'Deluxe Triple', size: '30 m2', desc: 'Deluxe Triple room được thiết kế với 1 giường lớn & 1 giường nhỏ mang đến không gian nghỉ ngơi thoải mái cho cả gia đình.', highlights: ['Hướng phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] }
        ]
      },
      explore: {
        label: '',
        title: 'Khám phá',
        desc: 'Trải nghiệm không gian xa hoa và đẳng cấp bậc nhất tại các phòng Suite của Tân Phương Nam Galaxy. Tận hưởng đặc quyền thượng lưu cùng tầm nhìn tuyệt đẹp ôm trọn dòng sông Hàn thơ mộng.',
        from: 'Từ',
        items: [
          { title: 'Executive River View', size: '30 m2', desc: 'Chạm vào vẻ đẹp sông Hàn. Thức dậy cùng ánh nắng nhẹ trên sông Hàn, tận hưởng không gian yên bình trong căn phòng Executive River View với giường 1m8 êm ái. Mỗi khoảnh khắc tại đây – từ bình minh dịu dàng đến ánh đèn đêm phản chiếu trên mặt nước – đều mang lại cảm giác thư giãn và tinh tế, dành riêng cho bạn.', highlights: ['View Sông Hàn tuyệt đẹp', 'Thêm buffet sáng', 'Bồn tắm nằm thư giãn'] },
          { title: 'Premier River View', size: '35 m2', desc: 'Premier River View mang đến diện tích phòng rộng rãi và ban công thoải mái.', highlights: ['Ngắm toàn cảnh thành phố về đêm bên dòng sông Hàn', 'Thêm buffet sáng', 'Bồn tắm nằm', 'Sofa bed'] },"""

text = text.replace(old_vi_rooms, new_vi_rooms)

with open('src/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("i18n.ts updated")
