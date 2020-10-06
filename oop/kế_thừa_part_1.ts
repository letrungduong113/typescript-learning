
// khởi tạp class
class tuongLienMinh {
    // define property
    ten: string;
    mo_ta_tuong: string;
    ky_nang_tuong: string[];
    constructor(ten: string, mo_ta_tuong: string, ky_nang_tuong: string[]) {
        this.ten = ten;
        this.mo_ta_tuong = mo_ta_tuong;
        this.ky_nang_tuong = ky_nang_tuong;
    }

    // define method

    showThongTin() {
        let kn: string = '';
        for(let i : number = 0; i < this.ky_nang_tuong.length; i++) {
            kn += this.ky_nang_tuong[i];
            kn += ' | ';
        }
        let thongSoTuong : string = `Tướng này có tên là ${this.ten}, mô tả cuả tướng là ${this.mo_ta_tuong}, có bộ kỹ năng: ${kn}`;
        console.log(thongSoTuong)
    }
}

// khởi tạo class tuongSatThu kế thừa từ class cha tuongLienMinh

class tuongSatThu extends tuongLienMinh {
    // define property
    don_sat_thu: string;
    constructor(ten: string, mo_ta_tuong: string, ky_nang_tuong: string[], don_sat_thu:string) {
        super(ten,mo_ta_tuong,ky_nang_tuong);
        this.don_sat_thu = don_sat_thu;
    }

    // define method

    showThongTin1() {
        // let kn: string = '';
        // for(let i : number = 0; i < this.ky_nang_tuong.length; i++) {
        //     kn += this.ky_nang_tuong[i];
        //     kn += ' | ';
        // }
        // return `Tướng này có tên là ${this.ten}, mô tả cuả tướng là ${this.mo_ta_tuong}, có bộ kỹ năng: ${kn}, kỹ năng sát thủ là: ${this.don_sat_thu}`
        super.showThongTin(); // sử dụng super class cha
        // nhưng định nghĩa thêm của con 
        console.log("Chiêu sát thủ của tướng", this.don_sat_thu)
    }

}



// khởi tạo class tuongDoDon kế thừa từ class cha tuongLienMinh
class tuongDoDon extends tuongLienMinh {
    // define property
    mau_ban_dau: number;
    hoi_mau_theo_cap: number;
    constructor(ten: string, mo_ta_tuong: string, ky_nang_tuong: string[], mau_ban_dau: number, hoi_mau_theo_cap: number) {
        super(ten, mo_ta_tuong, ky_nang_tuong);
        this.mau_ban_dau = mau_ban_dau;
        this.hoi_mau_theo_cap = hoi_mau_theo_cap;
    }

    // define method

    showThongTin():string {
        let kn: string = '';
        for(let i : number = 0; i < this.ky_nang_tuong.length; i++) {
            kn += this.ky_nang_tuong[i];
            kn += ' | ';
        }
        return `Tướng này có tên là ${this.ten}, mô tả cuả tướng là ${this.mo_ta_tuong}, có bộ kỹ năng: ${kn},
        máu ban đầu là: ${this.mau_ban_dau}, chỉ số hồi máu theo cấp: ${this.hoi_mau_theo_cap}`
    }
}

let nhanVat1 = new tuongLienMinh('Ashe', 'Cung Băng', ['Chú tâm tiễn', 'Tán Xã Tiễn']);
console.log(nhanVat1.showThongTin());

// sử dụng class tuongSatThu xem khác gì vs class tuongLienMinh
let naanVat2 = new tuongSatThu('Talon', 'Sát thủ bóng đêm', ['Ngoại giao kiểu Noxus', 'Ám khí'], 'Sát thủ vô hình');
naanVat2.showThongTin1();

// sử dụng class tuongDoDon xem khác gì vs class tuongLienMinh

let nhanVat3 = new tuongDoDon('Alista', 'Quái Vật Đầu Bò', ['Bò Húc', 'Giày Xéo'], 701.1, 5.7);
console.log(nhanVat3.showThongTin());
