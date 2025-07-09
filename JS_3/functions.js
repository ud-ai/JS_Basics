function saymyname(){
    console.log("My name is John Doe");
}

saymyname(); // My name is John Doe

// function addtwonumbers(num1, num2) {
//     console.log(num1 + num2); 
// }
addtwonumbers(5, 10); //15
addtwonumbers(5,"10") //510
addtwonumbers(5, null) //5
addtwonumbers(5, undefined) //NaN


function addtwonumbers(num1, num2) {
    let result=num1+num2; // Adding the two numbers
    return result; // Returning the result
}


const result = addtwonumbers(5, 10); //15
console.log("result:"+result); //15

function loginusermessage(username="sam"){
    if(username === undefined || !username) {
        console.log("Username is undefined");
        return
    }
    return `${username} just logged in`;
}
console.log(loginusermessage("Uday Kant")); // Uday Kant just logged in
console.log(loginusermessage())//undefined just logged in


//when we don't know about the number of arguments that will be passed to the function, we can use rest operator
function calccartprice(val1, val2,...prices){
    return prices


}
console.log(calccartprice(100, 200, 300)); // [300](100, 200 are ignored as they are not part of the rest parameter)

const user = {
    username: "Uday Kant",
    prices:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleobject(user); // Username is Uday Kant and price is 199
handleobject({
    username:"uday",
    price:299
}); // Username is uday and price is 299

const myarray = [1, 2, 3, 4, 5];
function return2ndvlaue(getarray){
    return getarray[1]
}
console.log(return2ndvlaue(myarray)); // 3