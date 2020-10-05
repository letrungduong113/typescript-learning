var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finished"] = 12] = "Finished";
})(state || (state = {}));
var quanLyCongViec = /** @class */ (function () {
    function quanLyCongViec(id, ten_viec, trang_thai) {
        this.id = id;
        this.ten_viec = ten_viec;
        this.trang_thai = trang_thai;
    }
    quanLyCongViec.prototype.showThongTin = function () {
        return this.id + ": " + this.ten_viec + ", " + this.trang_thai;
    };
    return quanLyCongViec;
}());
var congViec1 = new quanLyCongViec(1, "Học HTML", state.Processing);
var congViec2 = new quanLyCongViec(2, "Học CSS", state.Finished);
var congViec3 = new quanLyCongViec(3, "Học JavaScript", state.Create);
console.log(congViec1.showThongTin());
console.log(congViec2.showThongTin());
console.log(congViec3.showThongTin());
