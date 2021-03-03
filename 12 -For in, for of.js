/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    var result= 1;
    for (var value of arr) {
        var temp = value;
        result = temp * result;
    }
    return result;
}
//console.log(multiply([2 ,3, 4 ]));

/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
var apartment = {
    bedroom: {
        area: 20,
        bed: {
            type: 'twin-bed',
            price: 100
        }
    }
};
function  getkey(object) {
    for (var key in object){
        console.log(key);
    }
}
getkey(apartment);
