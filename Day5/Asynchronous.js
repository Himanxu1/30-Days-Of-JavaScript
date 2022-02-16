//   Functions running in parallel with other functions are called asynchronous

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Hello");
}

//  In above code myFunction is a callback passed as a argument
