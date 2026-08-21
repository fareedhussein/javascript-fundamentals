let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate)

let customDate_01 = new Date(2026,8,30) // months start at 0  index, 0 = jan, 08 = sep
console.log(customDate_01.toDateString())


let customDateTime =  new Date(2026, 11, 31, 5,25)
console.log(customDateTime.toLocaleString())

let customDate_02 = new Date("2026,09-07")
console.log(customDate_02.toLocaleString());

console.log(customDate_02.getTime())
