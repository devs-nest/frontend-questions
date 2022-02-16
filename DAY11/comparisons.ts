//! COMPARISONS
alert(2 > 1);  // true (correct)
alert(2 == 1); // This condition will always return 'false' since the types '2' and '1' have no overlap
alert(2 != 1); // This condition will always return 'true' since the types '2' and '1' have no overlap


//! COMPARISON CAN BE ASSIGNED TO A VARIABLE
let result = 5 > 4; // assign the result of the comparison
alert(result); // true

//! STRING COMPARISON
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true

//! COMPARIISON OF TWO DIFFERENT TYPES
alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

//! STRICT EQUALITY
alert(0 === false); // false, because the types are different

//! COMPARISON OF NULL AND UNDEFINED
alert(null == undefined); // true, null is equal to undefined
alert(null === undefined); // false, null is not equal to undefined