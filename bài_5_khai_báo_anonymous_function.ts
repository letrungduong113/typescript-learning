let g = function(x:string, y:number): string {
    return `Chao ${y}, nam nay ban ${x} thi dai hoc phai khong ?`
}
console.log("aaaaa", g('Nam', 31));
let z : (x:string, y:number) => string = function(x, y) {
    return `Chao ${y}, nam nay ban ${x} thi dai hoc phai khong ?`
};

console.log('bbbbb', z('Duong', 29))

