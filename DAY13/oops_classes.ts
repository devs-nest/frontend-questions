//! oops in classes example
// class User {
// 
//     constructor(name) {
//         this.name = name;
//     }
// 
//     sayHi() {
//         alert(this.name);
//     }
// 
// }
// 
// // Usage:
// let user = new User("John");
// user.sayHi();
// //* Classes have their own scope and they can’t access variables from the global scope.
// 
// //! Inheritance example
// class User {
// 
//     constructor(name) {
//         this.name = name;
//     }
// 
//     sayHi() {
//         alert(this.name);
//     }
// 
// }
// 
// class SuperUser extends User {
// 
//     sayHi() {
//         alert(this.name + " (super)");
//     }
// 
// }
// 
// let user = new User("John");
// user.sayHi();
// 
// let superUser = new SuperUser("Pete");
// superUser.sayHi();
