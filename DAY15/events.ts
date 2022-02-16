//! Event

//? for eg:
const butts = document.querySelector('.butts'); //? returns the element with class="butts"

function handleClick() {
    console.log('IT GOT CLICKED!!!!!!!!');
}

butts.addEventListeners('click', handleClick); //? adds an event listener to the element with class="butts"

//! Removing Event Listeners

// butts.removeEventListener('click', handleClick); //? removes the event listener from the element with class="butts"
