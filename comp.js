let a = 10;
let b = 2;
let c = "10";

console.log(a==c) //!it will only check value not the data type
console.log(a===c) //!it will check both value and data type

console.log(a!=c)
console.log(a!==c)

//! logical and(&&) logical or(||) logical not(!)
console.log(a>b && b>c)
console.log(a>b || b>c)

console.log(a<=c)
console.log(c<=b)

//! ternary operator(?)

let age = 18
let result = (age > 24) ? "eligibal for wedding" : "not eligible for wedding"
console.log(result)

//! Assignment operator
//! => =, +=, -=, /=, %=, *=, **=