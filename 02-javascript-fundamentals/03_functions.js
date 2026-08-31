
// // beginner mistake : print value on console rather returning. 
function addTwoNumbers (num_1, num_2) {
    console.log( num_1 + num_2)
    
}

// // save the output of function in variable 
// const result = addTwoNumbers(9,3)

// console.log("Result is: ", result) // undefined because dunction does only prints the results, returns nothing.


function addNumbers (num_1,num_2) {
    // let result = num_1 + num_2
    // return result;

    return num_1 + num_2
}


// let result = addNumbers(9,2)
// console.log(result)


function userLogin (username = "Anonymous") {
   if (!username) {
    console.log("Enter a valid username!")
    return
   }
   
    return `${username} logged in successfully!`
}

// let LoginMessage = console.log(userLogin("Fareed"))




// rest operator in function

// 1:
function calculateCartPrice (...num) {
    return num
}


// console.log(calculateCartPrice(100,200))

// 2: 
function calculateCartPrice (val1, val2,...num) {
    return num
}


// console.log(calculateCartPrice(100,200,320,350)) // 320,350 => array


const product = {
    type: "toothpaste",
    brand: "colgate",
    name: " Colgate Maximum Cavity Protection",
    price: 199

}

function handleObject (anyObject) {
    console.log(`${anyObject.name} is available at discounted price of ${anyObject.price}!`)
}


handleObject(product)


const myArray = [100,200,390,450,599,750]

function getSecondValue (getArray) {
    return getArray[1]
}

console.log(getSecondValue(myArray))