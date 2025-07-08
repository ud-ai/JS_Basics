const marvelHeroes = ["thor", "iron", "hulk", "spiderman", "black widow"];
const dcHeroes = ["batman", "superman", "flash", "aquaman"]

marvelHeroes.push(dcHeroes); // Adds the entire dcHeroes array to the end of marvelHeroes
console.log(marvelHeroes); // [ 'thor', 'iron', 'hulk', 'spiderman', 'black widow', [ 'batman', 'superman', 'flash', 'aquaman' ] ](dc heroes is added as a single element)
console.log(marvelHeroes[3][2])// flash (accessing the 3rd element of the 4th element of marvelHeroes)

//concatenation
marvelHeroes.concat(dcHeroes); // Combines marvelHeroes and dcHeroes into a new array
allheroes = marvelHeroes.concat(dcHeroes);
console.log(allheroes); // [ 'thor', 'iron', 'hulk', 'spiderman', 'black widow', 'batman', 'superman', 'flash', 'aquaman' ] (dc heroes is added as separate elements) 

//spread operator
const allHeroes = [...marvelHeroes, ...dcHeroes]; // Combines marvelHeroes and dcHeroes into a new array using spread operator
console.log(allHeroes); // [ 'thor', 'iron', 'hulk', 'spiderman', 'black widow', 'batman', 'superman', 'flash', 'aquaman' ] (dc heroes is added as separate elements)

// flat method
const array= [1, 2, [3, 4, [5, 6]]];
const realarray = array.flat(2); // Flattens the array to a depth of 2
const realarray2= array.flat(Infinity); // Flattens the array to any depth
console.log(realarray); // [ 1, 2, 3, 4,  5, 6 ]
console.log(realarray2); // [ 1, 2, 3, 4, 5, 6 ]

// converting string to array
console.log(Array.isArray("uday")); // false (string is not an array)
console.log(Array.from("uday")); // [ 'u', 'd', 'a', 'y' ] (converts string to array)

/* IMPORTANT */ 
console.log(Array.from({name: "uday"})); // []// (converts object to array, but since object has no iterable properties, it returns an empty array)

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] (creates an array from the given arguments)