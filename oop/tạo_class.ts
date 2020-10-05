// Class: là bản thiết kế dành cho các đối tượng khác nhau
// Để định nghĩa class ta cần thuộc tính (là các biến kèm kiểu dữ liệu biến đó), phương thức (là các funtion thao tác với các thuộc tính)
// Phương thức bắt buộc phải có là contructor() sử dụng để tạo ra 1 instance

// export {};

// tạo class
class nhanVatGame {
    // khai báo thuộc tính trước
    ten_nhan_vat: string;
    sologan: string;
    mau: number;
    sat_thuong: number;

    // tạo ra instance

    constructor(ten_nhan_vat: string, sologan: string, mau: number, sat_thuong: number) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.sologan = sologan;
        this.mau = mau;
        this.sat_thuong = sat_thuong;
    }

    hienThiTenNhanVat() : string {
        return `Nhân vật: ${this.ten_nhan_vat}, sologan: ${this.sologan}, máu: ${this.mau}, sát thương: ${this.sat_thuong}`
    }
}

let nhanVat1 = new nhanVatGame('Irelia', 'Ý chí lưỡi kiếm', 890, 145);
let nhanVat2 = new nhanVatGame('Azir', 'Hoàng đế sa mạc', 777, 115.8)
// console.log(nhanVat1.hienThiTenNhanVat());
// console.log(nhanVat2.hienThiTenNhanVat());




// tạo class
class dienThoai {
    ten_dien_thoai: string;
    gia: number;
    hang_san_xuat: string;
    danh_gia_sao: number;
    mau_sac: string[]
    
    constructor(ten_dien_thoai: string, gia: number, hang_san_xuat: string, danh_gia_sao: number, mau_sac: string[]) {
        this.ten_dien_thoai = ten_dien_thoai;
        this.gia = gia;
        this.hang_san_xuat = hang_san_xuat;
        this.danh_gia_sao = danh_gia_sao;
        this.mau_sac = mau_sac;
    }

    showSanPham() : string {
        return `Đây là điện thoại: ${this.ten_dien_thoai} có giá là ${this.gia} do hãng ${this.hang_san_xuat} có số sao đánh giá là
        ${this.danh_gia_sao} và có màu sắc ${this.mau_sac}
        `
    }
}


let sanPham1 = new dienThoai('Samsung note 20', 30000999, 'Samsung', 4, ['vảng', 'đỏ']);
let sanPham2 = new dienThoai('Apple 11', 35000000, 'Apple', 4.5, ['trắng', 'vàng']);

console.log(sanPham1.showSanPham());
console.log(sanPham2.showSanPham())

