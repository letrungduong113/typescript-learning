// Static: là 1 công cụ giúp cho người code xử lí đối tượng,thuộc tính có quyền truy xuất khác nhau
var stateProgress;
(function (stateProgress) {
    stateProgress[stateProgress["Create"] = 5] = "Create";
    stateProgress[stateProgress["Processing"] = 6] = "Processing";
    stateProgress[stateProgress["Finished"] = 7] = "Finished";
})(stateProgress || (stateProgress = {}));
var stateDanhGiaCongViec;
(function (stateDanhGiaCongViec) {
    stateDanhGiaCongViec["hoanThanh"] = "ho\u00E0n th\u00E0nh";
    stateDanhGiaCongViec["thatBai"] = "th\u00E2t b\u1EA1i";
})(stateDanhGiaCongViec || (stateDanhGiaCongViec = {}));
var quanLiCongViec = /** @class */ (function () {
    function quanLiCongViec(id, ten_cong_viec, tien_do, status) {
        this.id = id;
        this.ten_cong_viec = ten_cong_viec;
        this.tien_do = tien_do;
        this.status = status;
    }
    quanLiCongViec.prototype.showThongtin = function () {
        return "ID: " + this.id + " c\u00F3 t\u00EAn c\u00F4ng vi\u1EC7c " + this.ten_cong_viec + " \u0111ang l\u00E0m ti\u1EBFn \u0111\u1ED9 " + this.tien_do + " \u0111\u01B0\u1EE3c \u0111\u00E1nh gi\u00E1 " + this.status;
    };
    quanLiCongViec.testStatic = function () {
        console.log("tao static la 1 funtion");
    };
    quanLiCongViec.ten_cong_viec = 'Công việc 1';
    return quanLiCongViec;
}());
// tạo 1 đói tượng từ class (instance)
var congViec1 = new quanLiCongViec(1, 'Dự án Angular', stateProgress.Create, stateDanhGiaCongViec.thatBai);
console.log(quanLiCongViec.ten_cong_viec);
console.log(quanLiCongViec.id); // truy xuất vào id mà không khai báo static;
console.log(congViec1.showThongtin());
console.log(quanLiCongViec.testStatic());
// static giúp ta không cần phải tạo instancec mới từ class mà vẫn có thể sử dụng được các thuộc tính, phương thức
