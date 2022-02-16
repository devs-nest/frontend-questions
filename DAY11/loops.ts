//! SYNTAX OF WHILE LOOP
// while (condition) {
//    code
//    so-called "loop body"
// }


let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert(i);
  i++;
}

//! SYNTAX OF DO-WHILE LOOP
// do {
// loop body
// } while (condition);

let j = 0;
do {
  alert(j);
  j++;
} while (j < 3);

//! SYNTAX OF FOR LOOP
// for (begin; condition; step) {
// ... loop body ...
// }

for (let k = 0; k < 3; k++) { // shows 0, then 1, then 2
  alert(k);
}