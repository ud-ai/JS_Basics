const name="uday";
const age=20;
// console.log(name+age+"value")

console.log(`hello my name is ${name} and my age is ${age}`);

const gamename= new String("cricket");
// console.log(gamename[0]); // c
// console.log(gamename.length); // 7(0-6)
console.log(gamename.charAt(0)); // c
console.log(gamename.indexOf("c")); // 0
console.log(gamename.lastIndexOf("c")); // 6
console.log(gamename.slice(0, 3))//cri
console.log(gamename.slice(-5,2)); //cke
console.log(gamename.substring(0, 3)); // cri
console.log(gamename.toUpperCase()); // CRICKET
const newstring= gamename.substring(0, 3);// cri

const anotherstring="  uday   "
console.log(anotherstring.trim()); // "uday"
console.log(anotherstring.trimStart()); // "uday   "
console.log(anotherstring.trimEnd()); // "  uday"

const url = "https://www.uday.com?name=uday&age=20";
console.log(url.replace('?','-')); // https://www.uday.com-name=uday&age=20
console.log(url.includes('uday')); // true
console.log(url.split('?')); // [ 'https://www.uday.com', 'name=uday&age=20' ]
