//11. pad start()
// let insti = "pyspiders"
// console.log(insti.padStart(10,"$"))
// console.log(insti.padStart(15,"$"))

// const prompt = require("prompt-sync")({sigint:true})
// let contactNumber = prompt("Enter the number to send the otp :")

// let extactenum = contactNumber.slice(6)
// let uninumber = extactenum.padStart(10,"*")
// console.log(`OTP has sent to ${uninumber} Number`)

// //! optimised way
// console.log(contactNumber.slice(6).padStart(10,"*"))

//12. pad end()
//!13.indexof() - return the index number of specified character
let place = "bengalore"
console.log(place.indexOf("a"))

//!14. chaAt() - returns the character which is present at specified index
console.log(place.charAt(4))

//15. charCodeAt() - returns the ASCII value of character which is present at specified index
console.log(place.charCodeAt(3))