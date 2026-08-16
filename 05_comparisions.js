

// Basic Comparisons

console.log(2 > 1);
console.log(0 < 1);
console.log(0 >= 0);
console.log(0 <= 1 );



// AVOID BELOW COMPARISONS

console.log(null > 0); 
console.log(null == 0); // equality operator does NOT convert null to a number
console.log(null >= 0); 

/**
 * operators (<, >, <=, >=) convert null to a number (0).
 */


// always false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0);


// Strict Check : Checks dataType as well (===)

console.log("2" === 2); // false: dataType is not same
console.log(2 === 2); // true: dataType is same

