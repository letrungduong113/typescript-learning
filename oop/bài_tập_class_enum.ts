enum state {
    Create = 10,
    Processing,
    Finished,
    
}
class quanLyCongViec {
    id: number;
    ten_viec: string;
    trang_thai: state;

    constructor(id: number, ten_viec: string, trang_thai: state) {
        this.id = id;
        this.ten_viec = ten_viec;
        this.trang_thai = trang_thai;
    }

    showThongTin(): string {
        return `${this.id}: ${this.ten_viec}, ${this.trang_thai}`
    }
}

let congViec1 = new quanLyCongViec(1, "Học HTML", state.Processing);
let congViec2 = new quanLyCongViec(2, "Học CSS", state.Finished)
let congViec3 = new quanLyCongViec(3, "Học JavaScript", state.Create)

console.log(congViec1.showThongTin());
console.log(congViec2.showThongTin());
console.log(congViec3.showThongTin());