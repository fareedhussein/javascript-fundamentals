const country = new String("Bahrain")

console.log(country);

console.log(country[0]); // access key value pair

//access ptotype methods
console.log(country.length);
console.log(country.toUpperCase())
console.log(country.at(-1)); // returns last character
console.log(country.indexOf('a'))



const myName = "Fareed";
const age = 30;

console.log(`My name is ${myName} and I am ${age} years old`)
// string interpolation:  put variables directly inside a text string


let email = new String("hameedhussein@gmail.com");


// extract username and convert into upper case

let atIndex = email.indexOf("@"); // figure out at which index it exists
console.log(atIndex)
let username = email.slice(0,atIndex); // slice the string between indexes, excluding last index.
let upperCase = username.toUpperCase();


// console.log(username);
// console.log(upperCase);

// get "hussein" a portion from email.

const lastNameindex = email.indexOf("hussein")
const domainIndex = email.indexOf("@")
const lastName = email.slice(lastNameindex,domainIndex)
//console.log(lastName);


// Rev Order using array

let b = "ABC"

let lastIndex = b.indexOf(b.at(-1))
let arr = [];
for(let iP = lastIndex; iP >=0; iP--){
     arr.push((b.at(iP)))
}

console.log(arr)
console.log("Total Characters of this array are: ",lastIndex+1)

// Trim
let city = " Lahore  ";
console.log(city);
console.log(city.trim())


// Replace
let carManufacturer = "Honda";
console.log(carManufacturer.replace("Honda","BMW")) // just print BMW does not store unless stored in variable.

// Find if something exists or not

console.log(carManufacturer.includes("a"));

// split

console.log(email.split("@"))


// +++++++++++++++++++++++ Reverse string +++++++++++++++++++

// Bit complicated logic

let a = "ABC"

// find last index of the string
// store in a variable

let lastIndex = a.indexOf(a.at(-1)); // .at() takes integer and returns value of that index
console.log("Last index of the string: ",lastIndex);

// a.at(-1) returns last character C. 
// a.indexOf("C") returns index position of the C and stores in variable.
// now lastIndex stores last index value of the string.


//loop to fetch each character of the string

let arr = []

for (lastIndex; lastIndex>=0; lastIndex--){
    let charFetched = a[lastIndex] 
    // collect each character in an array so array declared
    arr.push(charFetched)
}
console.log(arr);



// Simple Logic

// Method 1:

// find the length of the string
let stringLength = a.length

let secondArray = []

for(stringLength; stringLength>0; stringLength--){
    let charFetched = a[stringLength-1] // max index = 2, length = 3. To make length == index subtract 1 from legnth
    secondArray.push(charFetched)
    
}
console.log(secondArray);


// Method 2:

// find the length of the string
let thestringLength = a.length
let theLastIndex = thestringLength-1 // max index = 2, length = 3. To make length == index subtract 1 from legnth
let thirdArray = []



for(theLastIndex; theLastIndex>=0; theLastIndex--){
    let thecharFetched = a[theLastIndex]
    
    thirdArray.push(thecharFetched)
    
}
console.log(thirdArray);