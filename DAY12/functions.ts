//! built-in functions
console.log(Math.max()); // -Infinity

console.log(Math.floor(2.444444455555)); // 2

console.log(parseFloat("20.34543543")); // 20.34543543

console.log(parseInt("20.34543543")); // 20

//! functions custom

// function definition
function calculateBill() {
    // this is the function body
    console.log("Running Calculate Bill!!");
    const total = 100 * 1.13;
    console.log(total);
}

// function call or function invocation
calculateBill();

//TODO: console.log(`Your total is $${calculateBill()}`);