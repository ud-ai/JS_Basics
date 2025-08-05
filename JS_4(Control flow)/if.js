//if

if(condition=true){
//executed
}

// '===' also check for the datatype

// var act as an global declaration whereas const and let is declared for the scope

//short hand notation for if statement

const balance=1000
if(balance > 500) console.log("test");

//else if
if(balance<500){
    console.log("less than")}
    else if(balance<900){

    }

//multiple cases
const userLoggein =true
const debitcard=true
const loggedinfromGoogle=false
const loggedinfromEmail=true
if(userLoggein && debitcard){
    console.log("Allow to buy course")
}

if(loggedinfromEmail || loggedinfromGoogle){
    console.log("User logged in")
}
