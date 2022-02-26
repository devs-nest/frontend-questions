//! Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface

// //! Web Workers

// <script>
//   const worker = new Worker('worker.js');
//   worker.postMessage('Hello from the main thread!');
//   worker.onmessage = function(event) {
//     console.log(event.data);
//   };
// </script>

var myWorker = new Worker('worker.js');