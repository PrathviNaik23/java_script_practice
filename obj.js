let personaldetails = {
    name : "prathvi",
    age : 21,
    address : "sirsi",
    gender : "male",
    contact : 9036933211,
    status : "single",
    isActive : true
}
console.log(personaldetails)
console.log(typeof(personaldetails))


//! add new pair
personaldetails.email = "prathvi361@gmail.com"
console.log(personaldetails)

//! update the value 
personaldetails.isActive = false
console.log(personaldetails)

//! deleting the item
delete personaldetails.email
console.log(personaldetails)

//! string interpolation 
let Name = "sita"
let gender = "female"

console.log(`my name is ${Name} and i'm ${gender}`)

//! fetching values
console.log(personaldetails.gender)
console.log(`${personaldetails.name} gender is ${personaldetails.gender}`)
