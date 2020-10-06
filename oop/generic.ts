class genericClass {
    static xemThongTin<T>(x: T[]) :void {
        console.log('duong,', x)
    }
}

genericClass.xemThongTin<string>(['Dell', 'HP', 'Macbook']);

genericClass.xemThongTin<number>([1,2,3,4,5,6,7,8,9]);
genericClass.xemThongTin<any>([1,2,3, 'Duong', 'Lan', 'Aakakak'])