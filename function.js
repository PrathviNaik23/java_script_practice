//! Named Function

// function display(){
//     console.log("Pyspiders")
// }
// display()

//! 2. Anonymous function

// let display = function(){
//     console.log("hello")
// }
// display()

//! 3. Arrow Function

// let display = ()=>{
//     console.log("hello,javascript")
// }
// display()

//! function with default parameter

// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,20)
// sum(10) //Nan
// sum(10,"py")

function sum(a,b=10){
    console.log(a+b)
}
sum(10,20)
sum(10,5)
sum(10)

function sum(a=5,b){
    console.log(a+b)
}
sum(10,20)
sum(10,5)
sum(undefined,10)

// default parameter are ysed when we are passin g any argument or   during the function xall default parameter 

//default [parameter will be havving the least priority if the argument is been pass

// deFAULT argument mudt br given from second parameter 
// if you pas s default parameter the first parameter ,during the function call if you pass the argument the value is not store the second parameter it will overwrite the default parametre and will get
// if you dont pass sny default parameter and if ther aree twon parameter ifnyou pass t


// note 
sum(15,10)

function sum(a,b){
    console.log(a+b)
}
//in the above  wxapmle the function i=s been called before defining the function and will get the out put as expected because here we are using function declaration so 
//* function declaration can support hoisting or function hoisting can bre done using function declation 

//
sum(15,10)

let sum=(a,b)=>{
    console.log(a+b)
}

//