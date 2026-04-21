import sys

with open('src/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Swap in EN
content = content.replace(
    "          { title: 'Deluxe King', size: '28 SqM', desc: '1 King Bed, 2 Pax, City View' },\n          { title: 'Deluxe Triple', size: '30 SqM', desc: '1 King & 1 Single Bed, 3 Pax, City View' },\n          { title: 'Family River View', size: '40 SqM', desc: '2 Queen Beds, 4 Pax, Han River View' }",
    "          { title: 'Family River View', size: '40 SqM', desc: '2 Queen Beds, 4 Pax, Han River View' },\n          { title: 'Deluxe King', size: '28 SqM', desc: '1 King Bed, 2 Pax, City View' },\n          { title: 'Deluxe Triple', size: '30 SqM', desc: '1 King & 1 Single Bed, 3 Pax, City View' }"
)

# 2. Swap in VI
content = content.replace(
    "          { title: 'Deluxe King', size: '28 m2', desc: 'Deluxe King room được thiết kế với không gian mở kết hợp với ánh sáng tự nhiên tạo cảm giác nhẹ nhàng và yên bình. Giường King size êm ái tạo giấc ngủ thoải mái cho du khách.', highlights: ['Ngắm nhìn khung cảnh thành phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },\n          { title: 'Deluxe Triple', size: '30 m2', desc: 'Deluxe Triple room được thiết kế với 1 giường lớn & 1 giường nhỏ mang đến không gian nghỉ ngơi thoải mái cho cả gia đình.', highlights: ['Hướng phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },\n          { title: 'Family River View', size: '40 m2', desc: 'Với diện tích 40m2 thoáng rộng, mang đến không gian ấm cúng cho cả gia đình nghỉ ngơi.', highlights: ['Hướng nhìn ra dòng sông Hàn thơ mộng', 'Thêm buffet sáng', 'Bồn tắm nằm'] },",
    "          { title: 'Family River View', size: '40 m2', desc: 'Với diện tích 40m2 thoáng rộng, mang đến không gian ấm cúng cho cả gia đình nghỉ ngơi.', highlights: ['Hướng nhìn ra dòng sông Hàn thơ mộng', 'Thêm buffet sáng', 'Bồn tắm nằm'] },\n          { title: 'Deluxe King', size: '28 m2', desc: 'Deluxe King room được thiết kế với không gian mở kết hợp với ánh sáng tự nhiên tạo cảm giác nhẹ nhàng và yên bình. Giường King size êm ái tạo giấc ngủ thoải mái cho du khách.', highlights: ['Ngắm nhìn khung cảnh thành phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },\n          { title: 'Deluxe Triple', size: '30 m2', desc: 'Deluxe Triple room được thiết kế với 1 giường lớn & 1 giường nhỏ mang đến không gian nghỉ ngơi thoải mái cho cả gia đình.', highlights: ['Hướng phố', 'Thêm buffet sáng', 'Bồn tắm đứng'] },"
)

# 3. Swap in KO
content = content.replace(
    "          { title: '디럭스 킹', size: '28 m2', desc: '킹 침대 1개, 2인, 시티 뷰' },\n          { title: '디럭스 트리플', size: '30 m2', desc: '킹 침대 1개 & 싱글 침대 1개, 3인, 시티 뷰' },\n          { title: '패밀리 리버 뷰', size: '40 m2', desc: '퀸 침대 2개, 4인, 한강 뷰' }",
    "          { title: '패밀리 리버 뷰', size: '40 m2', desc: '퀸 침대 2개, 4인, 한강 뷰' },\n          { title: '디럭스 킹', size: '28 m2', desc: '킹 침대 1개, 2인, 시티 뷰' },\n          { title: '디럭스 트리플', size: '30 m2', desc: '킹 침대 1개 & 싱글 침대 1개, 3인, 시티 뷰' }"
)

# 4. Swap in ZH
content = content.replace(
    "          { title: '豪华大床房', size: '28 平方米', desc: '1张大床，2人，市景' },\n          { title: '豪华三人房', size: '30 平方米', desc: '1张大床 & 1张单人床，3人，市景' },\n          { title: '家庭江景房', size: '40 平方米', desc: '2张大号双人床，4人，韩江景观' }",
    "          { title: '家庭江景房', size: '40 平方米', desc: '2张大号双人床，4人，韩江景观' },\n          { title: '豪华大床房', size: '28 平方米', desc: '1张大床，2人，市景' },\n          { title: '豪华三人房', size: '30 平方米', desc: '1张大床 & 1张单人床，3人，市景' }"
)

# Remove 'hạng Suite' in vi explore title
content = content.replace("title: 'Khám phá hạng Suite',", "title: 'Khám phá',")

with open('src/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')
