//! basic datatypes

//! string datatype
let myName: string = "John Doe";

//! number datatype
let myAge: number = 35;

//! boolean datatype
let hasHobbies: boolean = true;

//! array datatype
let hobbies: any[] = ["cooking", "sports"];

//! tuples
let address: [string, number] = ["Superstreet", 99];

//! enum
enum Color {
    Gray,
    Green,
    Blue
}

let myColor: Color = Color.Green;

console.log(myColor);

//! any datatype
let car: any = "BMW";

car = { brand: "BMW", series: 3 };

//! union types
let myRealAge: number | string = 27;

//! check types
let finalValue = 10;
if (typeof finalValue === "string") {
    console.log("Final value is a string");
}

//! never datatype
function neverReturns(): never {
    throw new Error("An error!");
}

//! nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;