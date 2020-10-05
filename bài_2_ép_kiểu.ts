// Ép kiểu: là đang từ kiểu dữ liệu any chuyển sang kiểu dữ liệu khác

// Cách ép kiểu 1: sử dụng <>
let kieu1 : any;
kieu1 = 'day la vi du ve cach 1 ep kieu trong ts';
console.log((<string>kieu1).length);


// Cách ép kiểu 2: sử dụng từ khoá as <kiểu dữ liệu cần ép>

let kieu2 : any;
kieu2 = 'day la vi du ve cach 1 ep kieu trong ts';
console.log((kieu1 as string).length);