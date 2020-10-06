// Interface class: là khi interface áp dụng cho class đóng vai trò như 1 quy chuẩn cho class
interface tuongInterface {
    ten: string;
    mau: number;
    sat_thuong: number;
    mo_ta_tuong: string;
    xemTuong(): void;
    donKyNang(mau: number): string[];
    bienVe(): void
}

class tuongLienMinh implements tuongInterface {
    ten: string;
    mau: number;
    sat_thuong: number;
    mo_ta_tuong: string;

    xemTuong(): void {
        console.log('xem tuong')
    }

    donKyNang(mau: number): string[] {
        return ['aaaa']
    }

    bienVe(): void {
        console.log('bien ve')
    }
}