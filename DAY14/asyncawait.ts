//! ASYNC AWAIT EXAMPLE

function go() {
    console.log('Starting');
    //! wait() is a function that returns a promise
    //? wait() makes us wait for 2 seconds
    wait(2000);
    console.log('Ending');
}

go();

//! WE CAN DO THAT IN A BETTER WAY

async function gogood() {
    console.log('Starting');
    await wait(2000);
    console.log('ending');
}
gogood()