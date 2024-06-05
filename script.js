// Regular function
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const greetArrow = (name) => {
  return "Hello, " + name + "!";
};

// Shortened arrow function (implicit return)
const greetShortArrow = (name) => "Hello, " + name + "!";

// Usage
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greetArrow("Bob")); // Output: Hello, Bob!
console.log(greetShortArrow("Charlie")); // Output: Hello, Charlie!

// Using ternary operator to loop
const name = "simon";
const age = 18;

const voter = () => {
  return age >= 18 ? "Allowed to vote" : "Not allowed to vote";
};
console.log(voter());

//Getting good with Arrow functions
const App = () => {
  return "I love to program in java script and react";
};
console.log(App());
// Normal Javascript function

function AppLink() {
  return "React is a javascript Library used building good looking Ui's ";
}
console.log(AppLink());

//Traditional Way of writting javascript functions
function handleClick() {
  return "click here and learn more about javascript";
}
console.log(handleClick());

//Arrow functions are more simple and concise way  of writting javascript
const java = "React is a library while Angular is a framework";
const arrowFunctions = () => {
  return java;
};
console.log(arrowFunctions());
