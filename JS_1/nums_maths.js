const balance = new Number(100)
console.log(balance) // [Number: 100]
console.log(balance.toString()) // "100"
console.log(balance.toFixed(2)) // "100.00"
console.log(balance.toExponential(2)) // "1.00e+2"
console.log(balance.toPrecision(4)) // "100.0"
console.log(balance.valueOf()) // 100

/* toPrecision() is used to format a number to a specified length
exaple:
const num = 123.456789;
console.log(num.toPrecision(5)); // "123.46"
console.log(num.toPrecision(3)); // "123"*/

const hundreds= 100000
console.log(hundreds.toLocaleString('en-IN'));// "1,00,000"
console.log(hundreds.toLocaleString('en-US'));// "100,000"

// ++++++++++++++++ MATHS +++++++++++++++++++++++

console.log(Math);// [Math: Math] Object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-10)); // 10(absolute value=> positive value)
console.log(Math.round(4.6)); // 5(rounds to nearest integer)
console.log(Math.ceil(4.1)); // 5(rounds up to nearest integer)
console.log(Math.floor(4.9)); // 4(rounds down to nearest integer)
console.log(Math.min(1, 2, 3, -1, 0)); // -1(minimum value)
console.log(Math.max(1, 2, 3, -1, 0)); // 3(maximum value)
console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random() * 10)+1); // Random number between 1 and 10 except 10 and 0
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1) + min));// Random integer between 10 and 20