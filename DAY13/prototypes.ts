//! prototypes
//? In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


//! THE PROTOTYPES CAN BE LONGER:

let prototype = {
    eats: true
};

function createAnimal(type) {
    let result = Object.create(prototype);
    result.type = type;
    return result;
}

let rabbit2 = createAnimal("rabbit");
console.log(rabbit2.type); // rabbit
console.log(rabbit2.eats); // true
console.log(rabbit); // { jumps: true } 

//TODO: 
// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };
  
//   alert( rabbit.jumps ); // ? (1)
  
//   delete rabbit.jumps;
  
//   alert( rabbit.jumps ); // ? (2)
  
//   delete animal.jumps;
  
//   alert( rabbit.jumps );