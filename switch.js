const prompt = require("prompt-sync")({sigint:true})
let num2 = +prompt("enter the number ")
switch(num2){
    case 1:
        console.log("sunday")
        break;

    case 2:
        console.log("monday")
        break;
        
    case 3:
        console.log("tuesday")
        break;
        
    default:
        console.log("GET LOST....!")    
}