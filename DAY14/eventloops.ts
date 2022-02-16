//! Event Loop:
// The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks

// The general algorithm of the engine:

// 1. While there are tasks:
//  -> execute them, starting with the oldest task.
// 2. Sleep until a task appears, then go to 1.


console.log('Starting');

setTimeout(function () {
    console.log('Running');
}, 2000);

console.log('ending');