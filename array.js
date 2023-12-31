// array concat
var arr1 = ['A', 'B', 'C'];
var arr2 = ['D', 'E', 'F'];

var arr3 = arr1.concat(arr2);
console.log(arr3);

// array.from()=> string ke array te convert kore.

var name = 'Ahasan Habib Nahid'

var nameArray = Array.from(name);
console.log(nameArray);

// array filter, find and find index

var numbersArray = [30, 32,34,80,90,59];

var result = numbersArray.filter(function(item){
    return item>50;
});
console.log(result);
var result1 = numbersArray.find(function(value){
    return value<35;
})
console.log(result1);
var result2 = numbersArray.findIndex(function(value){
    return value<35;
})
console.log(result2);

// for each method
var numberArray = [30, 32,34,80,90,59];

numberArray.forEach(function(item){
    console.log(item)
})

// includes and indexOf method
// array te kisu exist na korle tar index -1.

var number = [30, 32,34,80,90,59];
var result3 = number.includes(32);
console.log(result3);

var result4 = number.indexOf(32);
console.log(result4);