interface nguoi {
    ten: string;
    tuoi?: number;
    // ? là kiểu dữ liệu đó có thể có / không
}
function xemThongTin(motNguoi : nguoi) : void {
    console.log(`Xin chào ${motNguoi.ten}, bạn năm nay ${motNguoi.tuoi} tuổi !`)
}

xemThongTin({tuoi: 20, ten: 'Duong'})