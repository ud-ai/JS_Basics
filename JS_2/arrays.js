const myarray = [1, 2, 3, 4, 5];
console.log(myarray); // [ 1, 2, 3, 4, 5 ]
console.log(myarray[0]); // 1

const myheroes = ['spiderman', 'batman', 'superman']

//Array methods
myarray.push(6); // Adds 6 to the end of the array
console.log(myarray); // [ 1, 2, 3, 4, 5, 6 ]

myarray.pop(); // Removes the last element (6) from the array
myarray.push(7, 8, 9); // Adds 7, 8, 9 to the end of the array

myarray.unshift(9); // Adds 9 to the beginning of the array
myarray.shift(); // Removes the first element (9) from the array

console.log(myarray.includes(5)); // true (checks if 5 is in the array)
console.log(myarray.indexOf(5)); // 4 (returns the index of 5 in the array)
console.log(myarray.lastIndexOf(5)); // 4 (returns the last index of 5 in the array)

const myarray2 = myarray.join()
console.log(typeof myarray2); // string (joins the array elements into a string)
console.log(myarray2); // "1,2,3,4,5,7,8,9" (string representation of the array)

// Slicing and Splicing
console.log("A", myarray)

const myarray3 = myarray.slice(1, 3); // Creates a new array with the first 3 elements
console.log(myarray3); // [ 2, 3 ] (elements from index 1 to 2)
console.log("B", myarray); // [ 1, 2, 3, 4, 5, 7, 8, 9 ] (original array remains unchanged)

const myarray4 = myarray.splice(1, 3); // Removes 3 elements starting from index 1
console.log(myarray4); // [ 2, 3, 4 ] (removed elements)
console.log("C", myarray); // [ 1, 5, 7, 8, 9 ] (original array is modified)