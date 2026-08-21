
// Shallow copy: copy shares same reference point. Change in copy == change in original
// Deep copy: change in copy != change in original


const arrayOne = [1,2,3,4,5, true,"Pacific"]

console.log(typeof arrayOne); // returns type as object
console.log(typeof arrayOne[0]) // returns type of the element at the index.
console.log(typeof arrayOne[5])
console.log(typeof arrayOne[6]);


arrayOne.unshift(0)     // add 0 at 0 index of array
arrayOne.unshift("A")   // add A at 0 index of array
arrayOne.shift()        // removes element at 0 index
arrayOne.pop()          // removes element of last index
arrayOne.pop()

console.log(arrayOne.includes(true)); // find if particular element exists or not

const arrayTwo = [10,20,30,"Rain"]


console.log(arrayTwo.join())    // join() converts array data type into string
console.log(typeof arrayTwo.join())
console.log(arrayTwo.indexOf("Rain"));  // find index of value not value of index


const arrayThree = [100,200,300,400,500,600,700,800]

const slicedArray = arrayThree.slice(0,4)  // create new array, get element from 0 index upto 3
console.log("Original array: ",arrayThree);                  //  slice does not modify original array
console.log("Sliced Array: ",slicedArray); 


const arrayFour = [1.5,1.8,1.0,2.0,1.2,2.5]
const splicedArray = arrayFour.splice(0,3) // splice modify original array.

console.log("Original Array: ", arrayFour); // modified original
console.log("Spliced Array:", splicedArray);    // created using chunk of original






const carManufacturer = ["BMW","Honda","Toyota"]
const carModels = ["740e", "Civic", "Camry"]

// carManufacturer.push(carModels); // array can store an array as an element.
// console.log(carManufacturer);   // carModels[array] stored as 4th element.
// console.log(carManufacturer.indexOf(carModels))


// Merge two arrays using concat() method

const concatArray = carManufacturer.concat(carModels)
console.log(concatArray);




const spreadMethod = [...carManufacturer, ...carModels] // Spread Method
console.log(spreadMethod);

const anArray = [1,2,3,[3,4],,4,5[5,6,7],8,[9,true],20,28]
// console.log(anArray);
const useableArray = anArray.flat(Infinity)
console.log(useableArray)



// const aircraftManufacturer = ["Boeing", "Lockheed Martin","Gulfstream Aerospace"]



//Interesting

console.log(Array.isArray("Boeing"))
console.log(Array.from("North"))


// Make an array from variables

const varOne = "Boeing"
const varTwo = "Lockheed Martin"
const varThree = "Gulfstream Aerospace"

console.log(Array.of(varOne,varTwo,varThree))
// Creates a new array from the provided arguments.
// Output:
// ['Boeing', 'Lockheed Martin', 'Gulfstream Aerospace']