//  Sets in JavaScript 


// const letters = new Set(["a","b","c"]);

const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

let text = "";
letters.forEach (function(value) {
  text += value;
})

console.log(text);
console.log(letters.values());


// Returns [object Set Iterator]
letters.keys()   