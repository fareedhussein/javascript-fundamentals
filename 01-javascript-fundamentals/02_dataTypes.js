"use strict" // use latest standards

let name = "Tahir";
let age = 30;
let isLoggedIn = false;

/*
dataTypes:
    numbers => integer, fractional
    string => "anything written inside quotes"
    boolean => true/false
    null => represent empty value, not 0
    undefined => no value  assigned
    symbol => unique
*/

// ++++++++++++++++++++++++++ Null ++++++++++++++++++++++++++

// null = absence by intention.


// Define a student object
let student = {
    name: "Fareed",
    rollNo: 123,
    batch: "Morning"
};

// Option 1: Vacant the entire student container
// student = null;

// Option 2: Vacant only a specific property
student.batch = null;

console.log(student)

// type of null is object and it's a unfixable bug since the beginning.
console.log("null data type: ", typeof null)


// ++++++++++++++++++++++++++ Undefined ++++++++++++++++++++++++++
// undefined = absence by default

// variable declared but not assigned to any value.
let teacher;
console.log("type of teacher: ", typeof teacher)


// It also means a property does not exist on an object
console.log("No property in object: ", student.email)




/**
 * null and undefined, regardless of being empty are not equal.
 * null data type is : Object
 * undefined data type is : undefined
 */


// Loose check (==):
// null == undefined → true
// (reason: both coerced to ‘empty’)
console.log("null vs undefined in loose comparision: ", null == undefined)

// Strict check (===):
// null === undefined → false
// (reason: different types)
console.log("null vs undefined in strict comparision: ", null === undefined)