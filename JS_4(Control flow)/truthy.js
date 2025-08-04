const userEmail= []

if(userEmail){
    console.log("got user email")
}
else
{
    console.log("dont have user email")
}

// FALSY VALUES:
//false, 0 , -0 , BigInt onabort, "" , null , undefined, Nan

//TRUTHY VALUES
// "0", 'false' , " ", [], {}, function(){}

// how to check if an array is empty

if(userEmail.length==0){
    console.log("Array is empty")
}

// how to check if object is empty
const emptyObj={}
if(Object.keys(emptyObj).length==0)
{
    console.log("Object is empty")
}

//IMPORTANT NOTES:
false==0//true
false==''//true
0==''//true

//NULLISH COALESCING OPERATOR (??):null undefined

let val1;
val1 = 5 ?? 10// 5
val1= undefined ?? 15//15
val1 = null ?? 10 ?? 20//10
val1= null ?? 10//10
console.log(val1);

//Terniary operator

//condition ? true : false

const icetteaprice=100
icetteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")