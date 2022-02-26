//! Long polling

//? Long polling is the simplest way of having persistent connection with server, that doesn’t use any specific protocol like WebSocket or Server Side Events.

//? Being very easy to implement, it’s also good enough in a lot of cases

//todo: example: https://javascript.info/long-polling - take a look

//todo: take a look at regular polling vs long polling - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

//! basic example

// async function subscribe() {
//     let response = await fetch("/subscribe");

//     if (response.status == 502) {
//         // Status 502 is a connection timeout error,
//         // may happen when the connection was pending for too long,
//         // and the remote server or a proxy closed it
//         // let's reconnect
//         await subscribe();
//     } else if (response.status != 200) {
//         // An error - let's show it
//         showMessage(response.statusText);
//         // Reconnect in one second
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         await subscribe();
//     } else {
//         // Get and show the message
//         let message = await response.text();
//         showMessage(message);
//         // Call subscribe() again to get the next message
//         await subscribe();
//     }
// }

// subscribe();