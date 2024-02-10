// let originalArray = [1, 2, 3, 4, 5];
// let removedElements = originalArray.splice(2, 2); // This modifies originalArray

// 1. SPLICE METHOD
// the first argument of the splice method specifies the index of the element where we want to start removing items
// the second argument specifies the number of elements that we want to remove starting from the initial index

// console.log(originalArray); // Output: [1, 2, 5]
// console.log(removedElements); // Output: [3, 4]

// let originalArray = [1, 2, 3, 4, 5];
// let newArray = originalArray.slice(2, 4); // Does not modify originalArray

// 2. SLICE METHOD
// the first argument of the slice method specifies the index of the element where we want to start removing items
// the second argument specifies the index of the element where we want to stop removing exclusively

// console.log(originalArray); // Output: [1, 2, 3, 4, 5]
// console.log(newArray); // Output: [3, 4]

// 3. FOREACH
// solely intended for iteration and accessing elements
// is not meant for modifying array elements
// is not a constructive array method

// 4. MAP METHOD
// counterpart for the forEach method but with extra ability to modify each element via the constructive method (does not tamper with the original array)
// This will always return a new array consisting of the same number of elements as the original element even if the condition inside the map function callback is not met
// has the same length as the original array being mapped
// let mapped = numbers.map(num => {
//   if (num > 1) return num * 2;
// });

// console.log(mapped); // Output: [undefined, 4, 6]

// 5. FILTER METHOD
// does not return the same length as the original array
// also cannot modify the original array
// only returns the elements that satisfy the condition of the fallback
// also a constructive array method / does not modify original array
// works only with boolean conditions

// let filtered = numbers.filter(num => {
//   if (num > 1) return num; // Mistake: This doesn't explicitly return a boolean
// });

// console.log(filtered); // Might work unintentionally but is not clear

// 6. FIND METHOD
// returns only one element
// returns the first element to satisfy the condition

// 7. REDUCE METHOD
let numbers = [1, 2, 3];
let sum = numbers.reduce((acc, num) => {
  console.log(`This is the current value of acc: ${acc}`);
  console.log(`This is the current value of num: ${num}`);
  return acc + num;
}, 0);

console.log(sum); // TypeError: Reduce of empty array with no initial value

// at 1st iteration
// acc + num = 0 + 1 = 1

// at 2nd iteration
// acc + num = 1 + 2 = 3

// at 3rd iteration
// acc + num = 3 + 3 = 6

//primitive data types = number, string, boolean, undefined, null --> copied by value
// non primitive data types = arrays, functions, objects --> copied by reference

let a = 5;
let b = a;
console.log(b);
console.log(b + 2);
console.log(a);

let obj = {
  value: "Hello",
  print: function () {
    console.log(this.value);
  },
};

setTimeout(obj.bind.print(obj), 1000); // `this` will not refer to `obj` when `print` is called
