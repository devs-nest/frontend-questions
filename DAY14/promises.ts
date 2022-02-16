//! BASIC PROMISES EXAMPLES
// function makePizza() {
//     const pizzaPromise = new Promise(function (resolve, reject) {
//         resolve('');
//     });

//     return pizzaPromise;
// }

// const pizza = makePizza();
// console.log(pizza);


//! PROMISES, let's make it more robust
function makePizza(toppings) {
    const pizzaPromise = new Promise(function (resolve, reject) {
        resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
    });

    return pizzaPromise;
}

const pepperoniPromise = makePizza('[pepperoni]');
const canadianPromise = makePizza(['pepperoni', 'mushroom', 'onions'])

console.log(pepperoniPromise, canadianPromise);


//* .then() METHOD

pepperoniPromise.then(function (pizza) {
    console.log("Ahh I got it!");
    console.log(pizza);
});

//! Promise.all() - takes an array of promises and returns a promise that resolves when all the promises in the array have resolved

// Run them concurrently
const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
const pizzaPromise3 = makePizza(['ham', 'cheese']);

const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

dinnerPromise.then(pizzas => {
    console.log(pizzas);
})