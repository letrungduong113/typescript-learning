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
var khoaHoc = /** @class */ (function () {
    function khoaHoc(id, ten, danh_muc, do_dai) {
        this.id = id;
        this.ten = ten;
        this.danh_muc = danh_muc;
        this.do_dai = do_dai;
    }
    khoaHoc.prototype.xemKhoaHoc = function () {
        console.log("\n        ID kho\u00E1 h\u1ECDc: " + this.id + ",\n        T\u00EAn kho\u00E1 h\u1ECDc: " + this.ten + ",\n        Danh m\u1EE5c kho\u00E1 h\u1ECDc: " + this.danh_muc + ",\n        \u0110\u1ED9 d\u00E0i c\u1EE7a kho\u00E1 h\u1ECDc: " + this.do_dai + "\n        ");
    };
    khoaHoc.prototype.test2 = function () {
        console.log('test2', this.ten);
    };
    return khoaHoc;
}());
var khoaHocLapTrinh = /** @class */ (function (_super) {
    __extends(khoaHocLapTrinh, _super);
    function khoaHocLapTrinh(id, ten, danh_muc, do_dai, file_danh_kem) {
        var _this = _super.call(this, id, ten, danh_muc, do_dai) || this;
        _this.file_danh_kem = file_danh_kem;
        return _this;
    }
    khoaHocLapTrinh.prototype.xemKhoaHocLapTrinh = function () {
        _super.prototype.xemKhoaHoc.call(this);
        console.log('File dinh kem', this.file_danh_kem);
    };
    return khoaHocLapTrinh;
}(khoaHoc));
// test public
// trong class
var khoaHocJava = new khoaHoc(1, 'Lập trình hướng đối tượng Java', 'Lập trình', 135);
// console.log('ten khoa hoc:', khoaHocJava.ten) // bên ngoài class
console.log('danh muc khoa hoc:', khoaHocJava.danh_muc); // bên ngoài class
// class con
var khocHoc09 = new khoaHocLapTrinh(2, 'Lập trình hướng đối tượng C++', 'Lập trình', 10, 'https://lienminh.garena.vn/game-info/champions?view=champion&id=12');
// khocHoc09.test1()
khoaHocJava.test2();
