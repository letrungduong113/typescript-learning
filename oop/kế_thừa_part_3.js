var hero = /** @class */ (function () {
    function hero(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(hero.prototype, "tenPri", {
        // giúp cho các hàm bên ngoài class có thể truy cập vào biến private
        get: function () {
            return this._ten;
        },
        set: function (name) {
            this._ten = name;
        },
        enumerable: false,
        configurable: true
    });
    return hero;
}());
var akali = new hero('akali');
// bên ngoài class truy nhập vào biến private
console.log('ten tuong la', akali.tenPri);
akali.tenPri = 'Akali';
console.log('ten tuong sau khi thay doi la', akali.tenPri);
