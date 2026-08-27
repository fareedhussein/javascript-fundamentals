
/*
global variable: declared outside of all functions and blocks
Outermost scope of the program  
*/


carManufacturer = "Black" // implicit global, means crash if used under "use strict"


// +++++++++++++++++++++++++++++  var  +++++++++++++++++++++++++++++


// var scope: function, not block

if (true) {
    var myName = "Fareed"
    var haveCar = true 
    
    if (haveCar === true){
        var carModel = "740e"
        var carColor = "Metallic"
    }

}
console.table([myName,carModel,carColor])



var yourScore = 5
function test() {
    var myScore = 10;
    console.log("Your score is: ",yourScore)
}
test()
// var declared outside function can be accessed inside.
// console.log(myScore)  // won't print, function-scoped.





// var variables can be redeclared
var x = 10;
var x = 20;

console.log(x)

// var variables can be re-assigned
var y = 30
y = 50

console.log(y)


// +++++++++++++++++++++++++++++  let  +++++++++++++++++++++++++++++

// let is block scoped
if (true){
    let isLoggedIn = true;
}

// console.log(isLoggedIn); // not prints, let is block scoped


// let variables can be re-assigned
let m = 1
m = 2
console.log(m)

// +++++++++++++++++++++++++++++  const  +++++++++++++++++++++++++++++

// const is block scoped
// const variables cannot be reassigned after initialization

/*
const i = 0
for (i = 0; i <= 3; i++){
    console.log(i)
}
*/


// +++++++++++++++++++++++++++++  Prefix and Postfix (inc,dec)  +++++++++++++++++++++++++++++

// postfix increment
let a = 1;
let b = a++     // first: b stores 'a' THEN: 'a' gets increment
console.log(a)
console.log(b)

// prefix increment

let c = 1
let d = ++c     // first: 'c' gets incremented THEN: 'd' stores c
console.log(d)





// prefix and postfix increment in for loop
let e = 1
for (let i = 0; i <= 4; i++){

    console.log("postfix increment:\n", 
        "iteration: ",i,"output: ",e)
    e++
}

// prefix increment in for loop
let f = 2
for (let i = 0; i<=4; i++){
    console.log("prefix increment:\n",
        "iteration: ",i,"output: ",f);
    ++f;
}


// prefix and postfix increment in loop give identical output
// loop checks the condition, executes and then increment or decrement.