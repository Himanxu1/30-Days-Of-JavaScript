alert("Hello! I am an alert box!!");


// The atob() method decodes a base-64 encoded string.

let text = "Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);

// The blur() method removes focus from a window.
const myWindow = window.open("", "", "width=200, height=100");
myWindow.blur();