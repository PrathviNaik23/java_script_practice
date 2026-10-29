let area = 'btm'
console.log(area)


area = 'hsr layout'
console.log(area)

let pincode = '560029'

//!re declaration :- using let re declaration is not posiible (cannot redeclare block scoped variable)
//let pincode = '560034'

let place = "bengluru"
{
    console.log("inside the block : ",place)
}


{
    let c = 60
}
console.log("value of c outside the block: ",c)

let place = "pune"
function display(){
    console.log("value of place inside the function ",place)
}
