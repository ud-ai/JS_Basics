console.log("2">1)// true
console.log("2">"1")// true
console.log("2">"12")// true

console.log(null>0)// false
console.log(null>=0)// true//reason: null is converted to 0 in comparison
console.log(null<0)// false

console.log(undefined>0)// false
console.log(undefined>=0)// false// reason: undefined is not converted to 0 in 

// ==== workssame way as null
console.log(1===1)// true
console.log(1==="1")// false// reason: type is different