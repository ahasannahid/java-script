var myPC ={
    brand: "HP",
    screen:"15.6",
    isLaptop:true,
    isSSD:true,
    screen:"15.6",
    ram: "8GB",
    disk: "512GB",
    processor: "Ryzen-5"
}
console.log(myPC['brand'] );//bracket notation

// for in loop in object
for(var item in myPC){
    console.log(item + " : " + myPC[item] )
}