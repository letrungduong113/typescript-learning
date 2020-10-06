// giống bản vẽ nháp, mô tả tính năng class
abstract class dienThoai {
    ten:string;

    guiTinNhan() {
        console.log('gui tin nhan')
    }

    goiDienThoai() {
        console.log('goi dien thoai')
    }
}


// chính xác hoá nó bằng tạo class sử dụng lại bản thiết kế abstract
class android extends dienThoai {

}

let samsung = new android();
samsung.goiDienThoai();
samsung.guiTinNhan();