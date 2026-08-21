const acc_id = 3; 
let email = "fareed@xyz.com"; 
var pass = "12345";
city = "Lahore"; // global variable
let acc_state;

// acc_id = 0; // not allowed
email = "random@abc.com";
pass = "21212";
city = "London";
console.table([acc_id,email,pass,city,acc_state]);



var a = 2;

// postfix increment

for (let i = 0; i<=10; i++){
    a++;
    console.log("iteration ", i , "output: ", a)
}

// console.log(i) // can't print i, let is block scoped
// console.log(a) // a gives output, var is global

let b = 2

// prefix increment

for (let i = 0; i<=10; i++){
    ++b;
    console.log("iteration: ",i,"output: ",b);
    
}