let x = 5; // initialization or initial declaration
x = 10; // reassignment where let/const/var is not required
console.log(x);

let name = "John";
name = "Doe";
console.log(name);

// const pie;
// pie = "dessert";
// console.log(pie);

const numbers = [1, 2, 3];
console.log(numbers);
numbers.push(4);
console.log(numbers);

// numbers = "String";
// console.log(numbers);

const numbersObject = {
  numeral: "Roman",
  maximumValue: "X",
};
console.log(numbersObject);
numbersObject.maximumValue = "L";
console.log(numbersObject);

// numbersObject = 1;
// console.log(numbersObject);

// Hoisting is somehow like dragging a value up or bringing it up the codebase
// so that we are able to access the variable before it is initialized
var age;
console.log(age);
age = 25;

// Understanding Block Scope vs. Global Scope
if (true) {
  let lastName = "Doe";
  console.log(lastName);
}

// Assignment vs. Equality
// x = 5; // one equal sign is assigning the value of 5 to x
// x == 5; // double equal sign in comparing
// x === 5; // triple equal sign is strictly comparing

function example() {
  count = 0;
  console.log(count);
}

if (true) {
  let lastName = "Doe";
}

const fruits = [
  { name: "Apple", color: "Red", price: 1.0 },
  { name: "Banana", color: "Yellow", price: 0.5 },
  { name: "Orange", color: "Orange", price: 0.8 },
];

console.table(fruits);

const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};

console.table(person);

const totalPrice = 4850;
const deliveryFee = 50;

const email = "email@something.com";
const password = "password";

// parameter is when we are declaring the placeholder name of the variable that will be accessed by the function
// function declaration is kapag ginagawa palang natin si function
function logMessage(email, password) {
  const message = `You ordered droids worth ${email} credits. Delivery (${password} credits) is included in total price.`;
  console.log(message);
  return message;
}

// logMessage(emailFromAnotherFunction, passwordFromAnotherFunction);
// function call is kapag ginagamit na natin si function
// argument is when we are passing a variable to our function for it to be accessed inside the function

// Function Declaration
// return void
function sayHi(a, b) {
  console.log("Hello, this is my first function!");
  // console.error("This is an error");
  // alert("This is an alert");
  console.log(
    `You ordered droids worth ${email} credits. Delivery (${password} credits) is included in total price.`
  );
  // console.log("Hi");
  // console.log(message);
  return;
}
sayHi();

// NOT RECOMMENDED
let add = function (a, b) {
  return a + b;
};

// console.log("ADD AFTER INITIALIZE", add);
// console.log("ADD AFTER INITIALIZE", add(1, 2));

// console.log("SUBTRACT BEFORE INITIALIZE", subtract);
// console.log("SUBTRACT BEFORE INITIALIZE", subtract(10, 5));

// RECOMMENDED
function add(a, b) {
  return a - b;
}

console.log("SUBTRACT AFTER INITIALIZE", subtract);
console.log("SUBTRACT AFTER INITIALIZE", subtract(25, 5));
