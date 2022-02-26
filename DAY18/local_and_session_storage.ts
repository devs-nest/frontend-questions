//! Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

//* What’s interesting about them is that the data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage). We’ll see that very soon

//? this is how we set an item in localStorage
// localStorage.setItem('test', 1);

//? and this is how we get it back
alert(localStorage.getItem('test'));

//? stringified version
localStorage.user = JSON.stringify({ name: "John" });

// sometime later
let newuser = JSON.parse(localStorage.newuser);
alert(newuser.name); // John

//! Also it is possible to stringify the whole storage object, e.g. for debugging purposes:
// added formatting options to JSON.stringify to make the object look nicer
alert(JSON.stringify(localStorage, null, 2));

//! SESSION STORAGE - the data is stored in the browser, but it is not persisted across page refreshes.
sessionStorage.setItem('test', "1");
alert(sessionStorage.getItem('test')); // after refresh: 1

//? …But if you open the same page in another tab, and try again there, the code above returns null, meaning “nothing found”.