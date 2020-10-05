// export {};
// mảng chữ
let hocvien : string[];
hocvien = ['duong', 'lan', 'huy'];
console.log(hocvien[0]);
for (let i : number = 0; i < hocvien.length; i++) {
    console.log('hoc vien', hocvien[i]);
}
// mảng số

let songuyen : number[];

songuyen = [1,2,3,4,5,6,7,8,9,10,11,12];
for(let i = 0; i < songuyen.length; i++) {
    console.log('songuyen', songuyen[i]);
}

// kiểu đúng sai

let flag : boolean = false;
console.log("flag", flag)


// kiểu enum

enum Color {
    trangthaidangki = 10,
    hoanthanh = 100,
    chuaxong = 1000
}

console.log("Color", Color.trangthaidangki, Color.hoanthanh, Color.chuaxong);

// kiểu tuple (cho phép khai báo nhiều kiểu dữ liệu trong 1 mảng)

let tupleType : [string, number, string];
tupleType = ['duong', 1000, 'vietnam'];
console.log("tupleType", tupleType);

// kiểu any (biến có thể là string, number ...);

let anyType1 : any = 'duong 55555';
console.log("anyType", anyType1);

let anyType2 : any = {
    dongho: {
        giatien: 1000,
        mau: 'vang',
        xuatxu: 'trungquoc'
    },
    xemay: 'honda'
}
console.log("anyType2", anyType2)


// kiểu voide (voide: không chứa giá trị, thường dùng vs function, k thể return trong function)

function tinhtoan() : voide {
    console.log('day la vi du ve kieu voide');
    // return 100;
}

tinhtoan()