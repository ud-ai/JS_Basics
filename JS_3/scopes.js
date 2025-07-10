// var c=300
let a=300
if (true){
    let a=10
const b=20
//console.log("Inner: "+a); // 10

}


// var is not used that muuch because it has function scope and can be redeclared
// const is used when we don't want to change the value of the variable
// let is used when we want to change the value of the variable

//console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

function one(){
    const username = "John";
    function two(){
        const website="youtube";
        //console.log(username); // John
    }
    //console.log(website);
    two();
}
one();

if(true){
    const username = "uday";
    if(username === "uday"){
        const website=" youtube";
        //console.log(username+website); // uday youtube
    }
    //console.log(website); // ReferenceError: website is not defined
}
// console.log(username)

// +++++++++++++++++ INTERESTING(IMP) +++++++++++++++++++++
console.log(addone(5))// 6
function addone(num){
    return num+1
}

//console.log(addtwo(5)) // ReferenceError: addtwo is not defined(This is because addtwo is a function expression and not a function declaration)
const addtwo = function(num){//expression
    return num+2
}
addtwo(5)// 7
