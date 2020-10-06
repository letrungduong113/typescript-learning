class khoaHoc {
    public id: number;
    private ten: string;
    public danh_muc: string;
    public do_dai: number;

    
    constructor(id: number, ten: string, danh_muc: string, do_dai: number) {
        this.id = id;
        this.ten = ten;
        this.danh_muc = danh_muc;
        this.do_dai = do_dai;
    }

    xemKhoaHoc() {
        console.log(`
        ID khoá học: ${this.id},
        Tên khoá học: ${this.ten},
        Danh mục khoá học: ${this.danh_muc},
        Độ dài của khoá học: ${this.do_dai}
        `)
    }

    test2() {
        console.log('test2', this.ten)
    }
}

class khoaHocLapTrinh extends khoaHoc {
    public file_danh_kem: string;
    constructor(id: number, ten: string, danh_muc: string, do_dai: number, file_danh_kem:string) {
        super(id, ten, danh_muc, do_dai);
        this.file_danh_kem = file_danh_kem;
    }
    xemKhoaHocLapTrinh() {
        super.xemKhoaHoc();
        console.log('File dinh kem', this.file_danh_kem)
    }
    // private: riêng từ, đặt ten ở cha là private thì class con sẽ không truy nhập được
    // test1() {
    //     console.log('test 1', this.ten)
    // }
}

// test public

// trong class

let khoaHocJava = new khoaHoc(1, 'Lập trình hướng đối tượng Java', 'Lập trình', 135);
// console.log('ten khoa hoc:', khoaHocJava.ten) // bên ngoài class
console.log('danh muc khoa hoc:', khoaHocJava.danh_muc) // bên ngoài class

// class con
let khocHoc09 = new khoaHocLapTrinh(2, 'Lập trình hướng đối tượng C++', 'Lập trình', 10, 'https://lienminh.garena.vn/game-info/champions?view=champion&id=12');
// khocHoc09.test1()
khoaHocJava.test2()
