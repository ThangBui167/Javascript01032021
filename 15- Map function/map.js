/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
var numbers = [10, 5, 8];

var result = numbers.map(x => x * 3);
console.log(result);

// funktion map style

function namesOnly(arr) {
    var result = arr.map(x => x.name);
    return result;
}

var names = namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])
console.log(names);

// Normal style: for of loop
function namesOnlyX(arr) {
    var result = [];
    for(var object of arr){
        var objectName = object.name;
        result.push(objectName);

    }
    return result;
}

var nameS = namesOnlyX([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])
console.log(nameS);
