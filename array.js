// array concat
var arr1 = ['A', 'B', 'C'];
var arr2 = ['D', 'E', 'F'];

var arr3 = arr1.concat(arr2);
console.log(arr3);

// array.from()=> string ke array te convert kore.

var name = 'Ahasan Habib Nahid'

var nameArray = Array.from(name);
console.log(nameArray);

// array filter

var numbersArray = [30, 32,34,80,90,59];

var result = numbersArray.filter(function(item){
    return item>50;
});
console.log(result);

// array find and find index

var result1 = numbersArray.find(function(value){
    return value<35;
})
console.log(result1);

var result2 = numbersArray.findIndex(function(value){
    return value<35;
})
console.log(result2);

