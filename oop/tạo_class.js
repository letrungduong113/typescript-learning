// Class: là bản thiết kế dành cho các đối tượng khác nhau
// Để định nghĩa class ta cần thuộc tính (là các biến kèm kiểu dữ liệu biến đó), phương thức (là các funtion thao tác với các thuộc tính)
// Phương thức bắt buộc phải có là contructor() sử dụng để tạo ra 1 instance
// export {};
// tạo class
var nhanVatGame = /** @class */ (function () {
    // tạo ra instance
    function nhanVatGame(ten_nhan_vat, sologan, mau, sat_thuong) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.sologan = sologan;
        this.mau = mau;
        this.sat_thuong = sat_thuong;
    }
    nhanVatGame.prototype.hienThiTenNhanVat = function () {
        return "Nh\u00E2n v\u1EADt: " + this.ten_nhan_vat + ", sologan: " + this.sologan + ", m\u00E1u: " + this.mau + ", s\u00E1t th\u01B0\u01A1ng: " + this.sat_thuong;
    };
    return nhanVatGame;
}());
var nhanVat1 = new nhanVatGame('Irelia', 'Ý chí lưỡi kiếm', 890, 145);
var nhanVat2 = new nhanVatGame('Azir', 'Hoàng đế sa mạc', 777, 115.8);
// console.log(nhanVat1.hienThiTenNhanVat());
// console.log(nhanVat2.hienThiTenNhanVat());
// tạo class
var dienThoai = /** @class */ (function () {
    function dienThoai(ten_dien_thoai, gia, hang_san_xuat, danh_gia_sao, mau_sac) {
        this.ten_dien_thoai = ten_dien_thoai;
        this.gia = gia;
        this.hang_san_xuat = hang_san_xuat;
        this.danh_gia_sao = danh_gia_sao;
        this.mau_sac = mau_sac;
    }
    dienThoai.prototype.showSanPham = function () {
        return "\u0110\u00E2y l\u00E0 \u0111i\u1EC7n tho\u1EA1i: " + this.ten_dien_thoai + " c\u00F3 gi\u00E1 l\u00E0 " + this.gia + " do h\u00E3ng " + this.hang_san_xuat + " c\u00F3 s\u1ED1 sao \u0111\u00E1nh gi\u00E1 l\u00E0\n        " + this.danh_gia_sao + " v\u00E0 c\u00F3 m\u00E0u s\u1EAFc " + this.mau_sac + "\n        ";
    };
    return dienThoai;
}());
var sanPham1 = new dienThoai('Samsung note 20', 30000999, 'Samsung', 4, ['vảng', 'đỏ']);
var sanPham2 = new dienThoai('Apple 11', 35000000, 'Apple', 4.5, ['trắng', 'vàng']);
console.log(sanPham1.showSanPham());
console.log(sanPham2.showSanPham());
