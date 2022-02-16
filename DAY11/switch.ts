//! SYNTAX OF SWITCH STATEMENT
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]

//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]

//     default:
//       ...
//       [break]
//   }


let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
}

//? If there is no break then the execution continues with the next case without any checks.

//TODO: An example without break:
let b = 2 + 2;

switch (b) {
    case 3:
        alert('Too small');
    case 4:
        alert('Exactly!');
    case 5:
        alert('Too big');
    default:
        alert("I don't know such values");
}