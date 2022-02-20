// Create a Map

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.set("apples", 400);

fruits.get("apples");    // Returns 500

fruits.size;

fruits.delete("apples");


fruits.clear();

fruits.has("apples");


// Returns object:
typeof fruits;

//  See all the values of fruits
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})


// List all keys
let veggies = "";
for (const x of fruits.keys()) {
  veggies += x;
}


// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}


// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}