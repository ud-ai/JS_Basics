//singleton pattern
//const tinderUser= new Object();//creating an empty object using Object constructor
const tinderuser={};//creating an empty object using object literal notation(singleton pattern)

tinderuser.id="123abc"
tinderuser.name="Uday Kant";
tinderuser.isLoggedIn=false;

console.log(tinderuser); // {}

const regularuser={
    email:"udaykant@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Uday",
            lastname:"Kant"
        }
    } 
}
console.log(regularuser.fullname.userfullname.firstname); // Uday

const obj1={1: "a", 2:"b"}
const obj2={3: "c", 4:"d"}
// const obj3={obj1, obj2}
//const obj3=Object.assign({}, { obj1 }, { obj2 });//({} is used as a target and other objects are merged as sources  )
const obj3={...obj1, ...obj2}; // Using spread operator to merge objects
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const users=[// Array of user objects
    {},
    {}
]
users[0].name="Uday Kant";

console.log(Objects.keys(tinderuser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderuser)); // ['123abc', 'Uday Kant', false]
console.log(Object.entries(tinderuser)); // [['id', '123abc'], ['name',

console.log(tinderuser.hasOwnProperty("id")); // true
console.log(tinderuser.hasOwnProperty("email")); // false