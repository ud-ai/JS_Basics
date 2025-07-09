

//object literal notation
const mysym=Symbol("my symbol"); //creating a symbol
const jsuser={
"FULL NAME":"Uday Kant",
    name:"uday",
    [mysym]:"key1",
    age :20,
    location:"india",
    email:"udaykant@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
}
console.log(jsuser.email); //udaykant@gmail.com
console.log(jsuser["email"]); //udaykant@gmail.com
console.log(jsuser["FULL NAME"]); //Uday Kant
// console.log(jsuser.FULL NAME); //SyntaxError: Unexpected identifier
console.log(jsuser[mysym]); //key1 (accessing the value of the symbol property)

jsuser.email="udaykant10@gmail.com"; //updating the email property
Object.freeze(jsuser); //freezes the object, making it immutable
console.log(jsuser)

jsuser.greeting = function() { //adding a new property{

    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);

}
console.log(jsuser.greeting()); //Hello my name is uday and my age is 20