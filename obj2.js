let personaldetails = {
    name : "prathvi",
    age : 21,
    address : "sirsi",
    gender : "male",
    contact : 9036933211,
    status : "single",
    isActive : true
}

//! keys()
console.log(Object.keys(personaldetails));

//!2. values()
console.log(Object.values(personaldetails))

//3. entries()-keys + values
console.log(Object.entries(personaldetails))

//4. assign()
let mock = {
    webtech : "1*",
    python : "*",
    SQL : "1*"
}
let updated = Object.assign(personaldetails,mock)
console.log(updated)

//5. seal() - prevents from adding and deleting items
//6. freez() - prevents from adding , deleting and updating (modifying) the items

//Object.seal(mock)
Object.freeze(mock)

mock.powerbi = "1*"
console.log(mock)

delete mock.webtech
console.log(mock)

mock.webtech="1**"
console.log(mock)