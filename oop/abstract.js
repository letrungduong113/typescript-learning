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
// giống bản vẽ nháp, mô tả tính năng class
var dienThoai = /** @class */ (function () {
    function dienThoai() {
    }
    dienThoai.prototype.guiTinNhan = function () {
        console.log('gui tin nhan');
    };
    dienThoai.prototype.goiDienThoai = function () {
        console.log('goi dien thoai');
    };
    return dienThoai;
}());
// chính xác hoá nó bằng tạo class sử dụng lại bản thiết kế abstract
var android = /** @class */ (function (_super) {
    __extends(android, _super);
    function android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return android;
}(dienThoai));
var samsung = new android();
samsung.goiDienThoai();
samsung.guiTinNhan();
