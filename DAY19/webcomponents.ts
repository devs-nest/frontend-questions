// Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

// Web Components consist of three separate technologies that are used together:

//? Custom Elements. Quite simply, these are fully-valid HTML elements with custom templates, behaviors and tag names (e.g. <one-dialog>) made with a set of JavaScript APIs

//? Shadow DOM. Capable of isolating CSS and JavaScript, almost like an <iframe>. This is defined in the Living Standard DOM specification.

//? HTML templates. User-defined templates in HTML that aren’t rendered until called upon.

//! CUSTOM ELEMENTS
class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Hello world</h1>`;
    }
}

customElements.define('my-component', MyComponent);

//todo: IN HTML: <my-component></my-component>

//! SHADOW DOM

// <div>
//   <div id="example">
//     <!-- Pseudo-code used to designate a shadow root -->
//     <#shadow-root>
//       <style>
//       button {
//         background: tomato;
//         color: white;
//       }
//       </style>
//       <button id="button">This will use the CSS background tomato</button>
//     </#shadow-root>
//   </div>
//   <button id="button">Not tomato</button>
// </div>

// const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });
// shadowRoot.innerHTML = `<style>
// button {
//   color: tomato;
// }
// </style>
// <button id="button">This will use the CSS color tomato <slot></slot></button>`;

//! HTML TEMPLATES

// <template id="book-template">
//   <li><span class="title"></span> &mdash; <span class="author"></span></li>
// </template>

// <ul id="books"></ul>

// const fragment = document.getElementById('book-template');
// const books = [
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//   { title: 'A Farewell to Arms', author: 'Ernest Hemingway' },
//   { title: 'Catch 22', author: 'Joseph Heller' }
// ];

// books.forEach(book => {
//   // Create an instance of the template content
//   const instance = document.importNode(fragment.content, true);
//   // Add relevant content to the template
//   instance.querySelector('.title').innerHTML = book.title;
//   instance.querySelector('.author').innerHTML = book.author;
//   // Append the instance ot the DOM
//   document.getElementById('books').appendChild(instance);
// });