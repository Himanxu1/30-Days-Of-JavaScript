//  Synchronous code

// function otherFun(){
//     console.log("start");
//     console.log("end");
// }

// console.log("hello");

// otherFun();
// console.log("bye");


//  function which is printing a string after a random interval
function printString(string){
    setTimeout(
      () => {
        console.log(string)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

  function printAll(){
    printString("A")
    printString("B")
    printString("C")
  }
  printAll()

//   You will notice that A, B, and C print in a different and random order each time you call printAll!
// This is because these functions are asynchronous. Each fu
// nction gets executed in order, but each one is independent with
//  it’s own setTimeout. They won’t wait for the last function to finish before they start.