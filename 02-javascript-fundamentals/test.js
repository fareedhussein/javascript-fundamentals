const users = [  {
    id: 3,
    transactionStatus: "Active"
},


 {
    id: 4,
    transactionStatus: "InActive"
}]



// console.log(users[0].id)
console.log(Object.keys(users[0]))
console.log(Object.values(users[0]))
console.log(Object.entries(users[0]))
console.log(users[0].hasOwnProperty("id"))