// const parent = document.getElementById("parent");
// console.log(parent.childNodes.length); // Includes text nodes (like whitespace)

// console.log(parent.children.length); // Only counts elements, ignoring text and comment nodes

// DOM Traversal
// we have two types of nodes:
// 1. element node => the typical element we are used to in HTML
// 2. text nodes => refer to both elements and whitespaces or next lines

const parent = document.getElementById("parent");
// const child = document.querySelector("#parent > .child");

// console.log(parent);
// console.log(child);
// console.log(parent.children); // Directly access the first child
// console.log(parent.children[0]); // Directly access the first child
// console.log(parent.children[1]); // Directly access the first child

// console.log(parent.firstChild);
// console.log(parent.firstElementChild);

const ul = parent.firstElementChild.nextElementSibling;
// const li = ul.querySelectorAll(".list-item");
// const li = ul.getElementsByClassName("list-item");
const li = ul.getElementsByTagName("LI");
console.log(li);
// console.log(Array.from(li));

// NodeLists and HTMLCollection are similar to arrays in the sense that you can reference them using indices
// but you have to convert them into an array to apply array methods to them
// NodeList may contain whitespaces or text nodes
// HTMLCollection may only contain HTML element nodes
// QuerySelectorAll works the same as getElementsByClassName and getElementsByTagName
// Remember the syntax for QuerySelectorAll follows the CSS syntax for class/id selectors
// Syntax for getElementsByClassName does not need the (.) dot selector
// Syntax for getElementsByTagName must be in capitalized tag name (e.g. LI, DIV)

document.addEventListener("DOMContentLoaded", function (event) {
  const element = document.getElementById("myElement");

  if (element) {
    console.log(event);
    element.innerHTML = "Hello, world!";
  }
});

// only use innerHTML when you want to insert HTML elements inside
//         <li class="list-item">Sample</li>
//         <li class="list-item">
//               <a>Link</a>
//         </li>

// when only changing the texts inside of elements, use textContent
//         <li class="list-item">Sample</li>
//         <li class="list-item">Sample 1</li>

// bad practice for event listener
li.addEventListener("click", doSomething);
li.addEventListener("click", doSomething); // Duplicate listener

// bad practice is to not remove anonymous functions whenever not needed
ul.addEventListener("click", function (event) {
  if (event.target === li) {
    doSomething;
  }
});

// good practice is to use event delegation and to use named functions
ul.addEventListener("click", handleEvent);

function handleEvent(event) {
  if (event.target === li) {
    doSomething;
  }
}

ul.removeEventListener("click", handleEvent);

// bad practice is to redeclare reference to an element inside a loop
// or querying an element inside a loop because it loads your computer's performance
for (let i = 0; i < 1000; i++) {
  document.getElementById("myElement").style.backgroundColor = "blue";
}

// good practice is to query only once and only do processes or operations inside a for loop which requires repetition
// any process that does not require repetition must not be included inside a for loop
const myElement = document.getElementById("myElement");
for (let i = 0; i < 1000; i++) {
  myElement.style.backgroundColor = "blue";
}

// it is never a good idea to mix html and javascript so avoid inline event handlers at all costs
// bad practice
<button onclick="alert('Clicked!')">Click Me</button>;

// good alternative is to assign function for event handlers
document.getElementById("myButton").addEventListener("click", function () {
  alert("Clicked!");
});

// Things you cannot do in a NodeList or HTMLCollection
// 1. You may not use array methods for them
// 2. You may not use the spreading syntax on them
// 3. In order for us to apply those techniques, make sure to convert them first to an Array using the Array.from() function just like the examples below:

const elementsArray1 = Array.from(document.querySelectorAll(".myClass"));
// or
const elementsArray2 = [...document.querySelectorAll(".myClass")];
elementsArray.forEach((el) => (el.style.color = "blue"));
