// fetch syntax

// let promise = fetch(url, [options])

// fetch example


async function myFunc() {
    // jsonplaceholder is just a fake api
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

// you can use .then() to get the same result

const myFunc2 = async () => {
    const data = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
        .then(response => response.json());
}

// post example using fetch

let user = {
    name: 'John',
    surname: 'Smith'
};

const postExample = async () => {
    let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    alert(result.message);
}