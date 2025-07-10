// var c=300
let a=300
if (true){
    let a=10
const b=20
console.log("Inner: "+a); // 10

}


// var is not used that muuch because it has function scope and can be redeclared
// const is used when we don't want to change the value of the variable
// let is used when we want to change the value of the variable

console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

