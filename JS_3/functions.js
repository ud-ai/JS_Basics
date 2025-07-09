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
