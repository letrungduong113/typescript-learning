// abstract mothod: là bản thiết kế cho function
// Khi khai báo abstract method thì không có code bên trong, chỉ fix tên và kiểu dữ liệu

// giống bản vẽ nháp, mô tả tính năng class
abstract class dienThoai {
    ten:string;

    abstract guiTinNhan() : void;

    abstract goiDienThoai() : string;
    abstract checkTinNhan(message:string): string[]
}


// chính xác hoá nó bằng tạo class sử dụng lại bản thiết kế abstract
class android extends dienThoai {
    guiTinNhan() {
        console.log('gui tin nhan trong android');
    }
    goiDienThoai() {
        return 'duong aaa';
    }
    checkTinNhan(message = 'duong') {
        return ['aaaaa']
    }
}

let samsung = new android();
samsung.goiDienThoai();
samsung.guiTinNhan();