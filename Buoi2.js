// 13: Array method
//const arrNums = [1, 2, 3, 4 ,5];

//Them du lieu o cuoi mang
////arrNums.push(6)
//Xoa o cuoi : arrNums.pop()
//Them o dau: arrNums.unshift(0)
// Xoa o dau: arrNums.shift()
//Xoa o giua: arrNums.splice(1,1): numb=2 will be delete
//Them o giua: arrNums.splice(1,0,6, 7, 8), 11 is position, 0 is no delete, 6,7,8 are added values
//arrNums.splice(-2,1)

// 14: Higher order function: phuogn thuc se nhan gia tri la phuong

function tinhTong(arr, fn) {
    let result = 0;
    for (const value of arr) {
        result += value;
    }
    fn(result);
}
tinhTong([1, 2,3,4],console.log);// cach 1

tinhTong([1, 2,3,4], function(result){ // cach 2, tu dinh nghia function
    console.log(result)
}) ;

//15 : Ham map
// 1 - Thay doi gia tri cua phan tu, khong thay doi kich thuoc mang
// 2 - Khong gan su thay doi vao mang cu, gan su thay doi vao mang moi
const arrNums = [1,2,3,4,5,6,7,8,9]
const newArrNums = arrNums.map(function (number, index){
    console.log(number)
})

// cach viet ham map
Array.prototype.mymap= function (fn) {
    let newArr = []
    for (const value of this) {
        newArr.push(fn(value))
    }
    return newArr;
}

const newarrNums = arrNums.mymap(function(number){
    return number * 2
})

console.log(newarrNums);