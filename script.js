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
