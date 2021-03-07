/**
 * Cho một mảng các số, trả về một mảng mới chỉ có các số từ 5 trở lên
 * */

function fiveAndGreaterOnly(arr) {
    const result = arr.filter(number => number > 5);
    return result;
}
console.log(fiveAndGreaterOnly([3, 2, 5, 7, 8, 9]));

/***
 *Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
 Nếu không tìm thấy số chẵn nào thì trả về undefined
 */

function findFirstEvenNumber(array) {
  const found = array.find(num => {
      if(num % 2 === 0){
    return found;
      }else if(num % 2 !== 0){
          return 'underfined values!'
      }
  })

}

console.log(findFirstEvenNumber([1, 3, 5, 2, 6, 8]));


const listProducts = [
    {id : 1 , category : 1 , name : 'Ti vi '},
    {id : 2 , category : 1 , name : 'Tủ lạnh '},
    {id : 3 , category : 3 , name : 'Chén bát'},
    {id : 4 , category : 2 , name : 'Máy giặt'},
]

// strict equal
function getProduct(category , listProducts){
    const newListProducts = listProducts.filter(function(product){
        if (product.category === category){
            return true
        }
        return false
    }).map(function(product){
        delete product.category
        return product
    })
    console.log(newListProducts)
}
getProduct(3,listProducts)


/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example:
 * findDivisibleNum([1, 3, 4], 2) => 4
 */


function findDivisibleNum(array,x) {
    const newNums = array.filter(function (number){
        if (number % x === 0){
            return true
        }
        return undefined
    })
    console.log(newNums)
}
findDivisibleNum([1, 3, 4], 2)
























