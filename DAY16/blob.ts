async function myBlob() {
    let response = await fetch('YOUR_BLOB_ENDPOINT');

    let blob = await response.blob(); // download as Blob object

    // create <img> for it
    let img = document.createElement('img');
    document.body.append(img);

    // show it
    img.src = URL.createObjectURL(blob);

    setTimeout(() => { // hide after three seconds
        img.remove();
        URL.revokeObjectURL(img.src);
    }, 3000);
}


// BLOB EXAMPLE

// create Blob from a string
let blob = new Blob(["<html>…</html>"], { type: 'text/html' });
// please note: the first argument must be an array [...]

// create Blob from a typed array and strings
let hello = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" in binary form

let newBlob = new Blob([hello, ' ', 'world'], { type: 'text/plain' });

//! We can’t change data directly in a Blob, but we can slice parts of a Blob, create new Blob objects from them, mix them into a new Blob and so on.