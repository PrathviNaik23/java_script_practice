//! IIFE

// ((a,b)=>{
//     console.log(a+b)
// })(10,2)

// 

// let a = 20;
// let b = 10;
// console.log(a+b);


// (()=>{
//     console.log("hello")
// })()

function display1(){
    console.log("Monday")
}
function display2(){
    console.log("Tuesday")
}
function display3(){
    console.log("Get Lost")
}
display1(display3()) // here inner most function will be executed first then the outer most
// inner most function is called as call-back function
// outer most function is called as higher order function
display2()

display1(display2(display3()))

// what is call back function and higher order function
// dif btw higher order  function an d call back function