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

async function onSignUp (){
    console.log('I am sign up')
};

const onLogIn2 = async() => {
    console.log("LogIn success. Async Arrow function!");
};

onLogIn2();
onSignUp();