let x = 1;

if (x > 0) {
  console.log("positive");
}

x = 5;

if (x === 5) {
  console.log("x is 5");
}

if (x > 50) {
  console.log("Positive");
  console.log("x is positive");
}

// you only use if, when you are checking for one condition and everything else that does not satisfy the condition will fall back to the default statement
// exclusive if happens when you just want to handle a true evaluation and do nothing when the condition evaluates to false

if (x > 50) {
  console.log("I will do something");
}

// if else happens when you want to handle a true evaluation and then do another thing for all other instances that results to false evaluation
// else should never include a condition, it always stands alone

if (x > 50) {
  console.log("I will do something");
} else {
  console.log(
    "I am handling this in a different approach and not ignoring the scenario"
  );
}

// if, else if, else
// use this condition branching if you have two scenarios to check
// and all other scenarios that do not meet this two conditions
// will fall back to the default handler -> else block

// if else happens when you want to handle a true evaluation and then do another thingas well for all other instances that results to false evaluation
// else should never include a condition, it always stands alone
// let x = 20;

// if (x = 20) console.log("value is greater than 50");

// function messageLogger() {
//   console.log("value is greater than 50");
// }

// const result = (x > 50);
// console.log(result);

// const evaluate = result && messageLogger();
// console.log(evaluate);

// if (x > 50) {
//   console.log("I will do something");
// } else {
//  console.log("I am handling this in a different approach and not ignoring the scenario");
// }

// if, else if, else
// use this condition branching if you have two scenarios to check
// and all other scenarios that do not meet this two conditions
// will fall back to the default handler -> else block

if (x > 50) {
  console.log("I wanna do something");
} else if (x < 20) {
  console.log("I want to do another thing");
} else if ((x = 20)) {
  console.log("I want to do another thing once");
} else {
  console.log("This is the default handler");
}

// function add(a, b) {
//   return a + b;
// }

// let a = true;

// let result1 = false || false || add(0, 0);
// // true && false && 0
// console.log(result1);
// let result2 = add(1, 2) || a;
// console.log(result2);

// LOGICAL AND stumbles with false means returns the first falsy or returns the last truthy
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// truthy && truthy = truthy
// truthy && falsy = falsy
// falsy && truthy = falsy
// falsy && falsy = falsy

// const resultOfAnd = (1 > 0) && (0 > 1);
// console.log(resultOfAnd);

// LOGICAL OR stumbles with true means returns the first truthy or returns the last falsy
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// truthy && truthy = truthy
// truthy && falsy = falsy
// falsy && truthy = falsy
// falsy && falsy = falsy

// const resultOfOr = (1 > 0) || (0 > 1);
// console.log(resultOfOr);

let y = true;

if (!(y || true)) {
  // if (!(true))
  console.log("the condition evaluates to false");
}

// let result = (x > 0) ? "Positive" : "Negative";
// console.log(result);

// if (x > 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

let z = 21;

if (z > 50) {
  console.log("Positive");
} else {
  if (z % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// let result = (z > 50) ? "Positive" : (z % 2 === 0) ? "Even" : "Odd";
let result = z > 50 ? "Positive" : IsNumberOddOrEven();
// if z > 50 , console.log("positive");
// else check whether it is odd or even
// console.log(result);

function IsNumberOddOrEven() {
  return z % 2 === 0 ? "Even" : "Odd";
}

if (z > 50) {
  console.log("Positive");
} else {
  IsNumberOddOrEven();
}

const shortCircuitResult = z < 50 && IsNumberOddOrEven();
console.log(shortCircuitResult);

let value = 4;

switch (value) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Default");
    break;
}
// If value is 1, it will log both "One" and "Two"

// if (value === 1) {
//       console.log("One");
// } else if (value === 2) {
//       console.log("Two");
// } else (value === 3) {
//       console.log("Three");
// } else {
//       console.log("Default");
// }

let a = 10;
let b = 20;

let sum = a + b;

switch (sum) {
  case 10:
    console.log("Ten");
    break;
  case a + b:
    console.log("Thirty");
    break; // This will never match because it's equivalent to case 30:
  default:
    console.log("Default");
}
// This will log "Default", which might not be the expected outcome

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1); // Modifying the array while iterating
  }
}
console.log(numbers); // Unexpected result: [1, 3, 5] might be expected, but can vary

// constructive array methods
//  this creates a new array

// destructive array methods
// this tampers with the original array
// the original array can no longer be recovered

// for (let i = 0; i >= numbers.length - 1; i++) {
//   // This will run forever because i will always be >= 0
// }

numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers.length - 1);

let i = 0; // initialization of counter variable
i <= numbers.length - 1; // exit condition determines when the process will terminate
i++; // increments the counter so that it will meet the exit condition

for (let i = 0; i <= numbers.length - 1; i++) {
  console.log(
    `At ${i}th iteration: The original number that we are adding to two is ${numbers[i]}:`
  );
  numbers[i] = numbers[i] + 2;
  console.log(numbers[i]);
}

console.log(`The new value of numbers array is: `, numbers);

// at i = 0
// numbers[0] = 1 + 2 = 3

// at i = 1
// numbers[1] = 2 + 2 = 4

// at i = 2
// numbers[2] = 3 + 2 = 5

// at i = 3
// numbers[3] = 4 + 2 = 6

// at i = 4
// numbers[4] = 5 + 2 = 7
