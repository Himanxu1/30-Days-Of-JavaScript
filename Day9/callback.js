//  Callback in Javascript

function printString(string, callback){
    setTimeout(
      () => {
        console.log(string)
        callback()
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

  function printAll(){
    printString("A", () => {
      printString("B", () => {
        printString("C", () => {})
      })
    })
  }
  printAll()

  

//   The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code.