// normally function er name verbe e likha better.
// function er different keyword, structure ke function signature bola hoy

// Regular function
function onLogIn(){
    console.log("LogIn success. Regular function!");
};
onLogIn();
// Arrow function
const onLogIn1 = () => {
    console.log("LogIn success. Arrow function!");
};
onLogIn1();

// async function.

/*
 * Why we use async?
ei function execute er age onno kisu execute hobe na . eijonne async use kora hoy.

 */ 

async function fun1 (){
    await fetch("");
};

const fun2 = async() => {
    await fetch("");
};

// fun1();
// fun2();

// async await er kaj callback or promise use kore kora jay but not recommended


// function parameter
function addTwo(x, y){
 console.log(x+y);
}
addTwo(5,7);
