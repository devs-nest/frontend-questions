let buffer = new ArrayBuffer(16); // create a buffer of length 16
alert(buffer.byteLength); // 16


//! Let’s eliminate a possible source of confusion. ArrayBuffer has nothing in common with Array:

//? It has a fixed length, we can’t increase or decrease it.
//? It takes exactly that much space in the memory.
//? To access individual bytes, another “view” object is needed, not buffer[index]

let newBuffer = new ArrayBuffer(16); // create a buffer of length 16

let view = new Uint32Array(newBuffer); // treat buffer as a sequence of 32-bit integers

alert(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes per integer

alert(view.length); // 4, it stores that many integers
alert(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for (let num of view) {
    alert(num); // 123456, then 0, 0, 0 (4 values total)
}