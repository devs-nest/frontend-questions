//! As we know, fetch returns a promise. And JavaScript generally has no concept of “aborting” a promise. So how can we cancel an ongoing fetch? E.g. if the user actions on our site indicate that the fetch isn’t needed any more.

//* There’s a special built-in object for such purposes: AbortController. It can be used to abort not only fetch, but other asynchronous tasks as well

let firstcontroller = new AbortController();

//? Example without Fetch:
let controller = new AbortController();
let signal = controller.signal;

// The party that performs a cancelable operation
// gets the "signal" object
// and sets the listener to trigger when controller.abort() is called
signal.addEventListener('abort', () => alert("abort!"));

// The other party, that cancels (at any point later):
controller.abort(); // abort!

// The event triggers and signal.aborted becomes true
alert(signal.aborted); // true

//? Example of AbortController with fetch:

// abort in 1 second
let secondController = new AbortController();
setTimeout(() => secondController.abort(), 1000);

async function meraFunction() {
    try {
        let response = await fetch('/article/fetch-abort/demo/hang', {
            signal: controller.signal
        });
    } catch (err) {
        if (err.name == 'AbortError') { // handle abort()
            alert("Aborted!");
        } else {
            throw err;
        }
    }
}