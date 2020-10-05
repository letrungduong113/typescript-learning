// Hàm trả về kiểu dữ liệu number

function tinhtong():number {
    return 100;
}

tinhtong();

// Hàm trả về kiểu dữ liệu string

function kieuString(): string {
    return "duong dep zai"
}

kieuString();

// Hàm trả về kiểu dữ liệu array string

function mangString(): string[] {
    return ["duong xinh gai", 'con duong to lua', 'vo lam truyen ki']
}

mangString();

// Hàm trả về kiểu dữ liệu array number

function mangSo(): number[] {
    return [1,2,3,4,5.6]
}

mangSo();

// Hàm trả về kiểu dữ liệu array đối tượng

function doiTuong(): any {
    return {
        ten: 'duonghuydiet',
        kinang: {
            kinang1: 'tanghinh',
            kinang2: 'dontho'
        }
    }
}

doiTuong();
