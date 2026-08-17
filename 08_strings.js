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