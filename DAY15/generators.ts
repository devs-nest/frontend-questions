//! GENERATORS
// Regular functions return only one, single value (or nothing).

// Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
alert(generator); // [object Generator]

//! Generator Composition
// Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.

//TODO: 
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }


// function* generateAnotherSequence() {
//     yield 4;
//     yield* generateSequence();
//     yield 5;
// }


// let generator = generateAnotherSequence();
// alert(generator.next()); // { value: 4, done: false }
// alert(generator.next()); // { value: 1, done: false }
// alert(generator.next()); // { value: 2, done: false }
// alert(generator.next()); // { value: 5, done: false }
// alert(generator.next()); // { value: 3, done: true }
// alert(generator.next()); // { value: undefined, done: true }


