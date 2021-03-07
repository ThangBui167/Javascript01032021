// Trả về số lượng người đã vote
function totalVotes(arr) {
    const voters = arr.reduce(function (count,voter){
        // count: la bien luu tru : examp count = 0 >> count +=1
        return count + voter.voted;
    },0) // if 0 is not putted that means it returns true false true false..
    return voters;
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters))// 7


// Tính tổng giá trị các món bên dưới
function shoppingSpree(arr) {
    const totalCost = arr.reduce(function (init, price){
        return init + price.price;
    }, 0)
    return console.log(totalCost);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
shoppingSpree(wishlist) // 227005




















