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
