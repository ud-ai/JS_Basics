/*
Primitive Data Types:
1. Number: Represents both integer and floating-point numbers.  
    Examples: 42, 3.14, -7
2. BigInt: Represents integers with arbitrary precision.
    Examples: 1234567890123456789012345678901234567890n
    console.log(typeof BigInt) // "bigint"
3. String: Represents a sequence of characters.
    Examples: "Hello", 'World', `Template String`   
4. Boolean: Represents a logical entity and can have two values: true or false.
5. Null: Represents an intentional absence of any object value.
    Example: null
6. Undefined: Represents a variable that has been declared but not assigned a value.
    Example: let x;
7. Symbol: Represents a unique and immutable value, often used as object property keys.
    Example: Symbol('description')
8. Object: Represents a collection of key-value pairs, where keys are strings or Symbols.
    Example: { name: "Alice", age: 30 }
*/

/*
Reference Data Types/Non-Primitive Data Types:
(type of these is "object" or "function-object" in case of functions)
1. Object: A collection of key-value pairs.
    Example: { name: "Alice", age: 30 } 

2. Array: A special type of object used to store ordered collections.
    Example: [1, 2, 3, "Hello"]

3. Function: A block of code designed to perform a particular task.
    Example: function greet() { console.log("Hello!"); }

4. Date: Represents a specific point in time.
    Example: new Date("2023-10-01")

5. RegExp: Represents a regular expression, used for pattern matching in strings.
    Example: /[a-z]+/i // matches one or more lowercase letters, case

6. Map: A collection of keyed data items, similar to an object but with keys of any type.
    Example: new Map([[1, "one"], [2, "two"]])

7. Set: A collection of unique values, where each value can only occur once.
    Example: new Set([1, 2, 3, 3]) // results in Set { 1, 2, 3 }
8. WeakMap: Similar to Map, but keys are objects and garbage collected when no longer referenced.
    Example: new WeakMap([[{}, "value"]]) // keys must be objects

9. WeakSet: Similar to Set, but only holds objects and allows for garbage collection.
    Example: new WeakSet([{}, {}]) // holds only objects

10. ArrayBuffer: A generic, fixed-length binary data buffer.
    Example: new ArrayBuffer(16) // creates a buffer of 16 bytes

11. Typed Arrays: Arrays that provide a mechanism for reading and writing raw binary data in memory.
    Examples: Int8Array, Uint8Array, Float32Array

12. Promise: Represents a value that may be available now, or in the future, or never.

13. Proxy: An object that wraps another object or function and intercepts operations on it.
    Example: new Proxy(target, handler) 

14. Reflect: A built-in object that provides methods for interceptable JavaScript operations.
    Example: Reflect.get(target, propertyKey)

15. Error: Represents runtime errors in JavaScript.
    Example: new Error("Something went wrong")

16. JSON: A format for structuring data, often used for data interchange.
    Example: JSON.stringify({ name: "Alice" }) // converts object to JSON string
*/
