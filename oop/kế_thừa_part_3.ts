class hero {
    private _ten: string;
    constructor(_ten: string) {
        this._ten = _ten;
    }
    // giúp cho các hàm bên ngoài class có thể truy cập vào biến private
    get tenPri() : string {
        return this._ten;
    }

    set tenPri(name: string) {
         this._ten = name
    }
}

let akali = new hero('akali');
// bên ngoài class truy nhập vào biến private
console.log('ten tuong la', akali.tenPri);
akali.tenPri = 'Akali';
console.log('ten tuong sau khi thay doi la', akali.tenPri);

