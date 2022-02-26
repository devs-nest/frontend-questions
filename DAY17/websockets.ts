//! The WebSocket protocol, described in the specification RFC 6455 provides a way to exchange data between browser and server via a persistent connection. The data can be passed in both directions as “packets”, without breaking the connection and additional HTTP-requests.

//? WebSocket is especially great for services that require continuous data exchange, e.g. online games, real-time trading systems and so on

//todo: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket - take a read

//* just an example

let exampleSocket = new WebSocket("ws://javascript.info");

//* FULL EXAMPLE OF WEBSOCKET

let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function (e) {
    alert("[open] Connection established");
    alert("Sending to server");
    socket.send("My name is John");
};

socket.onmessage = function (event) {
    alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
    if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert('[close] Connection died');
    }
};

socket.onerror = function (error) {
    alert(`[error] ${error}`);
};