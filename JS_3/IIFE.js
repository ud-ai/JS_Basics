//Immediately Invoked Function Expression(IIFE)

(function chai(){ // named IIFE
    console.log("BE CONNECTED")
})();// we have to end this line with ; so that next iife should be used
//to handle the global scope pollution IIFE is used

( (name)=> { //unnamed IIFE with parameter
    console.log(`DB CONNECTED ${name}`);
})('uday')