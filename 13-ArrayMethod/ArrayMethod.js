/**
 * Viết hàm JavaScript để lấy phần tử đầu tiên của mảng.
 * Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng
 * */

function first(arr, n) {
    for (var key of arr){
        if (arr.indexOf(key) < n){
            console.log(key);
        }else{
            break;
        }
    }
}
console.log(first([1 ,2 ,3], 2))