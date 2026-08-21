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



let b = "ABC"

let finalIndex = b.indexOf(b.at(-1))
let arr = [];
for(let iP = finalIndex; iP >=0; iP--){
     arr.push((b.at(iP)))
}

console.log(arr)
console.log("Total Characters of this array are: ",finalIndex+1)