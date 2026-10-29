console.log("hello")

var variable = "var defines global scope"
let variable2 = "let defines block or function scope"
const variable3 = "const defines block or function scope"
console.log(variable)
console.log(variable2)
console.log(variable3)

console.log("")
console.log("var declaration")
var variable5;
console.log("declaration",variable5)
var variable4="prathvi"
console.log("initialization",variable4)
var variable5="naik"
console.log("redeclaration",variable5)
variable4="naikprathvi"
console.log("reinitialize",variable4)

console.log("")
console.log("var accessibility")
console.log("declare oit side block can use inside block")
console.log("declare inside block can used outside block")
console.log("declare outside function can used inside function")
console.log("declare inside function then cannot used outside function")

console.log("")
console.log("let declaration")
let variable6;
console.log("declaration",variable6)
let variable7="pratvi"
console.log("initialization",variable7)
console.log("redclaration not allowed")
variable7="nprathvi"
console.log("reinitialization",variable7)

console.log("")
console.log("let accessability")
console.log("declare outside block can use inside block")
console.log("declare inside block cannot use outside block")
console.log("declare outside function can use inside function")
console.log("declare inside function then cannot use outside function")

console.log("")
console.log("const declaration")
console.log("declaration is not possible")
const variable9="pruthvi"
console.log("initialization",variable9)
console.log("redeclaration is not possible")
console.log("reinitialization is not possible")

console.log("")
console.log("const accessability")
console.log("declared outside block can use inside block")
console.log("declare inside block cannot use outside block")
console.log("declare outside function can use inside function")
console.log("declare inside fumction then cannot use outside function")

console.log("")
console.log("const accessibility test")
const variable10="prathvi"
{console.log(variable10)
const variable11="pranam"
console.log(variable11)}
const variable12="prathvi"
function execute(){console.log(variable12)
const variable13="prathvi"
console.log(variable13)}
execute()