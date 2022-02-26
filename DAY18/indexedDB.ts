//! IndexedDB is a database that is built into a browser, much more powerful than localStorage.

//?     Stores almost any kind of values by keys, multiple key types.
//?     Supports transactions for reliability.
//?     Supports key range queries, indexes.
//?     Can store much bigger volumes of data than localStorage

// To start working with IndexedDB, we first need to open (connect to) a database.
// let openRequest = indexedDB.open(name, version);

// let openRequest = indexedDB.open("store", 1);

// openRequest.onupgradeneeded = function() {
//   // triggers if the client had no database
//   // ...perform initialization...
// };

// openRequest.onerror = function() {
//   console.error("Error", openRequest.error);
// };

// openRequest.onsuccess = function() {
//   let db = openRequest.result;
//   // continue working with database using db object
// };