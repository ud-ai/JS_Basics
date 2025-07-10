//"this" keyword in JavaScript refers to the context in which a function is executed.
// In arrow functions, "this" is lexically bound, meaning it retains the value of

const user={
    username: "JohnDoe",
    price:999,
    WelcomeMessage:function(){
        console.log(`${this.username} is welcome to the course at price ${this.price}`);
        console.log(this);
    }

}
// user.WelcomeMessage(); // JohnDoe is welcome to the course at price 999
// user.username = "uday";//changing the username
// user.WelcomeMessage(); // uday is welcome to the course at price 999
//console.log(this); //{} this refers to the global object in non-strict mode, or undefined in strict mode

function chai(){
    let username="uday";
    console.log(this); // this refers to the global object in non-strict mode, or undefined in strict mode
}
chai(); /*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/

const chai1=function (){
    let username="uday";
    console.log(this.username); // this refers to the global object in non-strict mode, or undefined in strict mode
}
chai()// undefined

const chai2 =() =>{
    let username="uday";
    console.log(this.username); // this refers to the global object in non-strict mode, or undefined in strict mode
    console.log(this); // this refers to the global object in non-strict mode, or undefined in strict mode

}
chai2(); // undefined the value of "this" from the surrounding code.
   
const addtwo=(num1, num2) =>
{
return num1 + num2;//when curly braces are used, you need to use the return statement explicitly
}
console.log(addtwo(3,4)); // 7

//implicit return
const addthree=(num1, num2, num3) => num1 + num2 + num3;// when curly braces are not used, the return statement is implicit
console.log(addthree(3,4,5)); // 12

//when we have to retunr an object, we need to wrap it in parentheses
const addtwo1 = (num1, num2) => ({username: "uday"}); // this will return an object with username property
console.log(addtwo1(3,4)); // { username: 'uday' }

const myarray=[1,2,3,4,5,6,7,8,9,10];
//myarray.forEach(()=>{})

    