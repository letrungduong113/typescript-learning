// Static: là 1 công cụ giúp cho người code xử lí đối tượng,thuộc tính có quyền truy xuất khác nhau

enum stateProgress {
    Create = 5,
    Processing = 6,
    Finished
}

enum stateDanhGiaCongViec {
    hoanThanh = 'hoàn thành',
    thatBai = 'thât bại',
}

class quanLiCongViec {
    id: number;
    static ten_cong_viec: string = 'Công việc 1';
    tien_do: stateProgress;
    status: stateDanhGiaCongViec;

    constructor(id: number, ten_cong_viec: string, tien_do: stateProgress, status: stateDanhGiaCongViec) {
        this.id = id;
        this.ten_cong_viec = ten_cong_viec;
        this.tien_do = tien_do;
        this.status = status;
    }

    showThongtin(): string {
        return `ID: ${this.id} có tên công việc ${this.ten_cong_viec} đang làm tiến độ ${this.tien_do} được đánh giá ${this.status}`
    }

    static testStatic() {
        console.log("tao static la 1 funtion")
    }
}

// tạo 1 đói tượng từ class (instance)

let congViec1 = new quanLiCongViec(1, 'Dự án Angular', stateProgress.Create, stateDanhGiaCongViec.thatBai);
console.log(quanLiCongViec.ten_cong_viec);
console.log(quanLiCongViec.id) // truy xuất vào id mà không khai báo static;
console.log(congViec1.showThongtin())
console.log(quanLiCongViec.testStatic())


// static giúp ta không cần phải tạo instancec mới từ class mà vẫn có thể sử dụng được các thuộc tính, phương thức
