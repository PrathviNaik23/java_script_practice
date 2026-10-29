let movies = ["spider-man","mirzapur","paradise","rrr","bhahubali","toxic","dhurandar",90]

// 1. tostring()
// console.log(movies,typeof movies)
// let converted = movies.toString()
// console.log(converted,typeof converted)

// 2.pop() -Remove the element from the last positin
// movies.pop()
// console.log(movies)

// 3.push() - Add the element to the last position
// movies.push("KGF")
// console.log(movies)

// 4.shift() - Remove the element from the first position
// movies.shift()
// console.log(movies)

// 5.unshift() - Add the element to the first position
// movies.unshift(28)
// console.log(movies)

// 6.join() - Join all the given array using seperator passed inside it as an argument 
// res=movies.join("-")
// console.log(res)

// 7.concat()
// let movies2=["kgf","pushpa","jaiho"]

// // console.log(movies.concat(movies2,[20,30,19]))


// //!8. slice()
// console.log(movies.slice(1,2))
// console.log(movies)

// //!9.splice() - it removes the element from the existing array
// let removed = movies.splice(1,2)
// console.log(removed)
// console.log(movies)

// !10. reverse()
// rev=movies.reverse()
// console.log(rev)


// ! vvvimp
// ! 11. map()- it returna the new array and it iterate into the existing array
// let res=movies.map((item)=>{
//     console.log(item)
// })
// console.log(typeof res)

// ! 12.for each()- it will not return the array
// let res2=movies.forEach((item)=>{
//     console.log(item)
// })
// console.log(typeof res2)

// // 13.filter() - it will iterate through the array based on condition
// let nums = [1,2,3,4,5,6]

// let evenNums = nums.filter((num)=>{
//     return num % 2 ===0
// })
// console.log(evenNums)
// console.log(typeof evenNums)


// ! reduce() -
let num = [1,2,3,4]

let sum = num.reduce((acc,curval)=>{
    return acc + curval
})
console.log(sum)