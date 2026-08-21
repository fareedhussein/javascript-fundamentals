// let qty = "33b";
// console.log (typeof qty);

// //convert string into number

// let converted = Number(qty);

// //check the type
// console.log(typeof converted);

// // print the converted string
// console.log(converted); //  33b NaN: Not a Number, type is numner.


let integer = 2;

let s_integer = String(integer) // conver into string
console.log(s_integer);

let string = "2a";
let number_string = Number(string) //converts string into NaN
console.log(number_string)




let isOn = "Hello";
let isOnBool = Boolean(isOn);
// console.log(isOnBool); //true

let isUp = -56;
let isUpBool = Boolean(isUp);
// console.log(isUpBool); //true

let notAssigned;
let notAssignedBool = Boolean(notAssigned);
console.log(notAssignedBool); // false

let isString = "2a";
let isNum = Number(isNaN);  // convert string => number, output: NaN
let isNumBool = Boolean(isNum); // isNum: NaN, NaN = false
console.log (isNumBool) // output: false

let isHexString = "0x3a7F";
let isHex = Number(isHexString);
console.log(isHex)



console.log("1" + 2 + 9) // converts into string: 129
console.log(typeof ("1" + 2 + 9)) // string
console.log(typeof (1+2+"9")) // add 1+2 and concatenate 9