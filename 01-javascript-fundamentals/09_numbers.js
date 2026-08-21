const score = 400;

// exclusively define dataType

const balance = new Number(1250)
// console.log(balance);

const balString = balance.toString().slice(1,4)
console.log(balString)

// console.log(balance.toString().slice(0,1)) // convert into string apply string methods
// console.log(balance.toFixed(2)) // fix decimal places

const otherNumber = 123.8966
const numberPrecision = otherNumber.toPrecision(3); // toPrecision returns value as string
console.log(typeof numberPrecision); // toPrecision returns value as string

const amount = 10000000
const amountLocale = amount.toLocaleString()
console.log(amountLocale)
// console.log(amount.toLocaleString("en-US"))


// +++++++++++++++++ Maths Library ++++++++++++++++++


// console.log(Math.abs(-3)) // absolute value
// console.log(Math.round(4.6)) // round off
// console.log(Math.ceil(4.6)); // ceiling function returns 5
// console.log(Math.floor(4.6)); // floor function returns 4

// console.log(Math.min(2,3,4,5,6)) // print min value: 2
// console.log(Math.max(89.54,33,96)) // print max value: 96

console.log(Math.random()) //returns value between 0-1
let randomVariable0 = Math.random()
// to print values more than 1, multiply the results with 10.

let randomVariable1 = (Math.floor(Math.random()*10)+1) // to get integers we may add floor or ceiling function
/* incase of floor function the value may equal to 0:
0.01 x 10 = 0.1
applying floor function to 0.1 returns 0
to avoid that we add + 1 to the result.


*/

console.log(randomVariable1)

// print value between a range

const min = 20
const max = 30

let printRange = (Math.floor(Math.random()* ((max-min) + 1)+ min))

console.log(printRange)





//SOLUTION AT THE END

/* Max = 20


Math.random() = 0.9999
Range = 5

Math.random()*5 = 0.9999*5 = 4.995

// since 4.995 < 5 to reach 5 we must add 1.

Math.random()*5 + 1 = 4.995 + 1 = 5.995

// By wrapping up in floor function we get 5 which is upper limit of the range.

// Problem starts here:

Math.random()*(range + 1) +max = 0.9999 * (5 + 1) + 20 = 25.995


Min = 15

Math.random() = 0.0001
Range = 5

Math.random()*5 = 0.0001*5 = 0.001

// since 0.001 < 1 to reach 1 we must add 1.

Math.random()*5 + 1 = 4.995 + 1 = 1.001

// By wrapping up in floor function we get 5 which is lower limit of the range.

// Problem starts here:

Math.random()*(range + 1) +max = 0.001 * (5 + 1) + 15 = 15.006 // this is fine
*/
SOLUTION:

// ALWAYS USE + MIN NOT MAX IN FORMULA
