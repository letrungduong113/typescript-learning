var matkhau = 'Anh Duong cho so';
var Nguoi = /** @class */ (function () {
    function Nguoi() {
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau == 'Anh Duong cho so') {
                return this._ten;
            }
            else {
                console.log('sai mat khau roi cung oi');
            }
        },
        set: function (value) {
            if (matkhau == 'Anh Duong cho so') {
                this._ten = value;
            }
            else {
                console.log('sai mat khau');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
matkhau = 'Anh Duong cho so 1';
// matkhau = 'Anh Duong cho so'
var nguoiSo1 = new Nguoi();
//sử dụng setter (gán giá trị mới)
nguoiSo1.ten = 'Duong Dep Zai';
// sử dụng getter (lấy giá trị)
console.log('nguoi so 1', nguoiSo1.ten);
