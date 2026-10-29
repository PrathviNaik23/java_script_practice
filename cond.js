const prompt = require('prompt-sync')({sigint: true});
let num = +prompt("Enter a number: ");

if (num > 0) {
    console.log("Number is positive.");
} else if (num < 0) {
    console.log("Number is negative.");
} else {
    console.log("Number is zero.");
}