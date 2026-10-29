let insti = "pyspiders"
let place = "BENGALORE"

//1. toUpperCase()
console.log(insti.toUpperCase())

//2. toLowerCase()
console.log(place.toLowerCase())

//3. length
console.log(insti.length)

//4. slice()-
console.log(insti.slice(1,3))

//5. replace()-
console.log(insti.replace("py","q"))

//6. concat()
console.log(insti.concat(place))

//7. trim()
let area = "    BTM     "
console.log(area)
console.log(area.trim())

//trimStart()
//trimEnd()

//10. split() - it will return the array[] of string elements
let personal = "My name is Prathvi i'm 20 years old"
console.log(personal.split(" ",3))
console.log(personal.split("'",2))
console.log(personal.split("$",5)) //[ "My name is Prathvi i'm 20 years old" ]