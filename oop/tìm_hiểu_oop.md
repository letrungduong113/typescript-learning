- OOP sử dụng đối tượng làm gốc, xây dựng mọi thứ xung quanh đối tượng


* Khi lập trình OOP:
- Chương trình được chia thành các đối tượng độc lập
- Dữ liệu được che dấu, bao bọc bởi các phương thức truy xuất (static, private, public ...)
+ Ví dụ: Trong truyện harry potter có mỗi nhân vật có những bí mật riêng chỉ nhân vật đó biết, trong game dota thì mỗi nhân vật đều có 1 kỹ năng mà chỉ mình khi chơi mới biết còn thằng khác sẽ không biết ...
- Các đối tượng trao đổi với nhau thông qua các hàm (hàm gọi là phương thức có tham số)
- Chương trình được thiết kế theo hướng tiếp cận từ dưới lên
+ Ví  dụ: tạo ra thế giới harry potter thì ta cần nhân vật trước ( hình dạng, tóc, ăn mặc ..., có những phương thức nào, ...), sau đó mới xây dựng thế giới => xây dựng phương thức trước rồi mới gắn vào thế giới
+ Ví dụ 2: có game dota rồi thì sẽ nhanh để phát triển được game lol



* Các khái niệm cơ bản trong OOP: class, property, method, instance
- Ví dụ 1 về class: Game xây thành phố
+ Đối tượng: Ngôi nhanh => muốn tạo ra ngôi nhà cần Bản thiết kế ngôi nhà
+ Bản thiết kế = class
+ Các thuộc tính của nhà là property: dài, rộng, mấy tầng, cao
+ Các phương thức = method: sử dụng các property để chọn vị trí để đặt nhà, phương thức xây nhà 2/3 tầng ...
+ instance = nhà thật => có rất nhiều ngôi nhà khác nhau dựa trên bản thiết kế => kế thừa

- Ví dụ 2 về class: Xây dựng con chó
+ Đối tượng: Bản thiết kế con chó (khung tạo ra con chó thật) => có thể tạo ra thế giới chó vs nhiều giống chó khác nhau dựa trên class 
Bản thiết kế chó => class chó
+ Property: lông, giống đực/cái, chiều cao, cân nặng ...
+ Method: chạy, ngủ, ăn ...
+ Các con chó khác nhau là instance (kế thừa) từ class chó: chó tây, chó ta, chó becgiê ... (khác nhau property)

- Ví dụ 3 về class: Xây dựng nhân vật game (ví dụ game lol)
+ Đối tượng: Bản thiết kế tướng => class nhân vật
+ Property: thống số tướng (máu, năng lượng, sát thương, tốc độ đánh, tốc độ di chuyển, truyền thuyết, hình ảnh tướng ...)
+ Method: là các kĩ năng của tướng (kỹ năng 1, kỹ năng 2, kỹ năng 3, kỹ năng 4, kỹ năng 5)

=> bản thiết chung nhân vật

=> instance của class nhân vật (chính là các tướng sử dụng)

instance tướng Aatrox từ class nhân vật: property(máu: 555, giáp: 300), method(kỹ năng hồi sinh, kỹ năng bể máu ...)
instance tướng Fiora từ class nhân vật: property(máu: 700, giáp: 500), method(kỹ năng lao tới, kỹ năng phản đòn ...)

=> khi cái gốc là class thay đổi thì ngọn là instance cũng sẽ thay đổi (từ dưới đi lên)



* Đặc điểm của OOP:

- Trừu tượng hoá:  là xác định những thuộc tính, phương thức cần thiết cho 1 class (vĩ dụ: điện thoại di động thì có những property, method cơ bản nhất nào) => class

- Thừa kế (extend): lớp này kế thừa property, method lớp kia (sử dụng lại code)
+ Ví dụ: Ta có điện thoại samsung note 9 thì những điện thoại Note 10, note 11 sẽ kế thừa note 9 nhưng thay đổi cấu hình, hình dạng, màu sắc ....

- Đa hình: Viết lại các property, method của lớp khác
+ interface: giống như bản thiết kế danh cho thuộc tính
+ abstract: giống như bản thiết kế danh cho phương thức

- Đóng gói: Tính chất cho phép người dùng hay đối tượng khác thay đổi dữ liệu của đối tượng hiện tại

