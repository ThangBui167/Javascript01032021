/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function.
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó,
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function  double(num) {
    var result = num * 2
    return result;
}
function sumAndDo(nums, callback){
    var result;
    var sum = 0;
    for(var num of nums) {
        sum += num;
    }
    var result = callback(sum);
    return result;
}
function  double(num) {
    var result = num * 2
    return result;
}
var output1 = sumAndDo([1, 2, 3], double);
console.log(output1);

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

function transform(numbers, callback) {
    var result = [];
    for(var key of numbers){
        var num = callback(key);
        result.push(num);
    }
    return result;
}
function double(num) {
    return num * 2;
}
var output = transform([2, 4, 6], double);
console.log(output);
