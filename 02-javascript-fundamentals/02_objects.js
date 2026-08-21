


//use symbol in object

const regNo = Symbol('regNo')
const regNo2 = Symbol('regNo')

// console.log(regNo === regNo2) // false


// This is called an object literal 
// because literally write the object yourself using {}
const userOne = { 
    "full name": "Sam",
    [regNo]: 9038,
    age: 18,
    email: "sam@pam.com",
    working_days: ["Monday","Wednesday","Friday"]

}


// access object values

// console.log(userOne["full name"]) // practical approachs
// console.log(typeof userOne[regNo]);

// change values

userOne[regNo] = 1234   // regNo is changed to 1234
// console.log(userOne[regNo])
// console.log(userOne);



// Freeze 
// Object.freeze(userOne) // to avoid change freeze the object
userOne.age = 19 // it will not update
// console.log(userOne)


userOne.greetings = function() {
    console.log(`Good Morning ${this["full name"]} begum`)
}

console.log(userOne.greetings())


// constructor method

const userTwo = new Object() //singleton 

userTwo["full name"] = "Maria B."
userTwo.status = "Enterprise"
const userTwoReg = Symbol('Enterprise regNo')
userTwo[userTwoReg] = 9009

Object.freeze(userTwo)
console.log(userTwo)


const empId = Symbol('emp. Id')
const employeeOne = {
    age: 30,
    [empId]: 212
}
employeeOne.name = {
    firstName: "Abdul",
    LastName: "Rehman",
    "username": "ar123"
}

console.log(`${employeeOne.name.firstName},${employeeOne.name.LastName},${employeeOne[empId]}`)


// console.log(employeeOne)



const obj1 = {1: "A", 2:"B"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = Object.assign({}, obj1,obj2)


const obj3 = {...obj1, ...obj2}
console.log(obj3)