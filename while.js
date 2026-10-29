//!while
//let i = 0;
//while(i<=20){
  //  console.log(i)
    //i++
//}

let prompt =require("prompt-sync")({sigint:true})
let n = +prompt("enter number")
let p =1;
while(p<=12){
    console.log(n,"X",p,"=",n*p)
    p++
}