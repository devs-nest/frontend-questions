//! currying - basic example

// function curry(f) { // curry(f) does the currying transform
//     return function (a) {
//         return function (b) {
//             return f(a, b);
//         };
//     };
// }

// // usage
// function sum(a, b) {
//     return a + b;
// }

// let curriedSum = curry(sum);

// alert(curriedSum(1)(2)); // 3

//! Advanced currying examples

// function sum(a, b, c) {
//     return a + b + c;
// }

// let curriedSum = curry(sum);

// alert(curriedSum(1, 2, 3)); // 6, still callable normally
// alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// alert(curriedSum(1)(2)(3)); // 6, full currying