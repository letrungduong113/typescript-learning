// Namespace, export:
// - Đặt tên class không sợ bị trùng từ khoá
// - Quản lí theo 1 nhóm gọi là module có hệ thống
// Cách sử dụng: 
// - Gom hết class vào bên trong cái gọi là module
// - Dùng đến cái class nào thì sử dụng từ khoá export trước class đó
// - Khi gọi thì gọi: new tenModule.tenClass()

module Android {
    export class String {

    }
    export class Number {

    }
}

let coca = new Android.String();
let pepsi = new Android.Number();