let matkhau :string = 'Anh Duong cho so';
class Nguoi {
    private _ten: string;

    get ten():string {
        if(matkhau == 'Anh Duong cho so') {
            return this._ten;
        } else {
            console.log('sai mat khau roi cung oi')
        }
        
    }
    set ten( value:string ) {
        if(matkhau == 'Anh Duong cho so') {
            this._ten = value;
        } else {
            console.log('sai mat khau')
        }
    }
}
matkhau = 'Anh Duong cho so 1';
// matkhau = 'Anh Duong cho so'

let nguoiSo1 = new Nguoi();
//sử dụng setter (gán giá trị mới)
nguoiSo1.ten = 'Duong Dep Zai';
// sử dụng getter (lấy giá trị)
console.log('nguoi so 1', nguoiSo1.ten);