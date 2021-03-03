/**
 * var a = [1, 2, 4, 8, 16];
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */

var a = [1, 2, 4, 8, 16];
for ( var i = a.length -1; i >= 0; --i) {
   // console.log(a[i])
}
var c = [1, 2, 3, 4, 5];
var b = [10, 20, 30];

for (let value of c) {
    for (let i of b) {
        //console.log(value * i);
    }
}

/**
 * Viết function trả về tích các số từ start đến end, không tính end
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */

function calculate(start, end) {
    var result = 1;
    for (let i = start; i < end; i++){
        var temp = i;
        result = temp * result;
    }
    return result;
}
//console.log(calculate(2,5));