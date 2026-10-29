// //function with return keyword
// function sum(a,b){
//     return a+b
// }
// let

//!function with rest parameter and rest operator 
function sum(...a){
    return a
}
let res = sum(10,"hello",true)
console.log(res)

function display(...b){
    console.log(b)
}
display(20,30,"hii")