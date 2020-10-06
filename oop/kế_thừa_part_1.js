var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// khởi tạp class
var tuongLienMinh = /** @class */ (function () {
    function tuongLienMinh(ten, mo_ta_tuong, ky_nang_tuong) {
        this.ten = ten;
        this.mo_ta_tuong = mo_ta_tuong;
        this.ky_nang_tuong = ky_nang_tuong;
    }
    // define method
    tuongLienMinh.prototype.showThongTin = function () {
        var kn = '';
        for (var i = 0; i < this.ky_nang_tuong.length; i++) {
            kn += this.ky_nang_tuong[i];
            kn += ' | ';
        }
        var thongSoTuong = "T\u01B0\u1EDBng n\u00E0y c\u00F3 t\u00EAn l\u00E0 " + this.ten + ", m\u00F4 t\u1EA3 cu\u1EA3 t\u01B0\u1EDBng l\u00E0 " + this.mo_ta_tuong + ", c\u00F3 b\u1ED9 k\u1EF9 n\u0103ng: " + kn;
        console.log(thongSoTuong);
    };
    return tuongLienMinh;
}());
// khởi tạo class tuongSatThu kế thừa từ class cha tuongLienMinh
var tuongSatThu = /** @class */ (function (_super) {
    __extends(tuongSatThu, _super);
    function tuongSatThu(ten, mo_ta_tuong, ky_nang_tuong, don_sat_thu) {
        var _this = _super.call(this, ten, mo_ta_tuong, ky_nang_tuong) || this;
        _this.don_sat_thu = don_sat_thu;
        return _this;
    }
    // define method
    tuongSatThu.prototype.showThongTin1 = function () {
        // let kn: string = '';
        // for(let i : number = 0; i < this.ky_nang_tuong.length; i++) {
        //     kn += this.ky_nang_tuong[i];
        //     kn += ' | ';
        // }
        // return `Tướng này có tên là ${this.ten}, mô tả cuả tướng là ${this.mo_ta_tuong}, có bộ kỹ năng: ${kn}, kỹ năng sát thủ là: ${this.don_sat_thu}`
        _super.prototype.showThongTin.call(this); // sử dụng super class cha
        // nhưng định nghĩa thêm của con 
        console.log("Chiêu sát thủ của tướng", this.don_sat_thu);
    };
    return tuongSatThu;
}(tuongLienMinh));
// khởi tạo class tuongDoDon kế thừa từ class cha tuongLienMinh
var tuongDoDon = /** @class */ (function (_super) {
    __extends(tuongDoDon, _super);
    function tuongDoDon(ten, mo_ta_tuong, ky_nang_tuong, mau_ban_dau, hoi_mau_theo_cap) {
        var _this = _super.call(this, ten, mo_ta_tuong, ky_nang_tuong) || this;
        _this.mau_ban_dau = mau_ban_dau;
        _this.hoi_mau_theo_cap = hoi_mau_theo_cap;
        return _this;
    }
    // define method
    tuongDoDon.prototype.showThongTin = function () {
        var kn = '';
        for (var i = 0; i < this.ky_nang_tuong.length; i++) {
            kn += this.ky_nang_tuong[i];
            kn += ' | ';
        }
        return "T\u01B0\u1EDBng n\u00E0y c\u00F3 t\u00EAn l\u00E0 " + this.ten + ", m\u00F4 t\u1EA3 cu\u1EA3 t\u01B0\u1EDBng l\u00E0 " + this.mo_ta_tuong + ", c\u00F3 b\u1ED9 k\u1EF9 n\u0103ng: " + kn + ",\n        m\u00E1u ban \u0111\u1EA7u l\u00E0: " + this.mau_ban_dau + ", ch\u1EC9 s\u1ED1 h\u1ED3i m\u00E1u theo c\u1EA5p: " + this.hoi_mau_theo_cap;
    };
    return tuongDoDon;
}(tuongLienMinh));
var nhanVat1 = new tuongLienMinh('Ashe', 'Cung Băng', ['Chú tâm tiễn', 'Tán Xã Tiễn']);
console.log(nhanVat1.showThongTin());
// sử dụng class tuongSatThu xem khác gì vs class tuongLienMinh
var naanVat2 = new tuongSatThu('Talon', 'Sát thủ bóng đêm', ['Ngoại giao kiểu Noxus', 'Ám khí'], 'Sát thủ vô hình');
naanVat2.showThongTin1();
// sử dụng class tuongDoDon xem khác gì vs class tuongLienMinh
var nhanVat3 = new tuongDoDon('Alista', 'Quái Vật Đầu Bò', ['Bò Húc', 'Giày Xéo'], 701.1, 5.7);
console.log(nhanVat3.showThongTin());
