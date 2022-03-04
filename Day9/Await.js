//  Async Await in JavaScript

function printString(string){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
         console.log(string)
         resolve()
        }, 
       Math.floor(Math.random() * 100) + 1
      )
    })
  }


  async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
  }
  printAll()

//   You might notice that we use the “async” keyword for the wrapper function printAll. This let’s JavaScript know that we are using async/await syntax, and is necessary if you want to use Await. This means you can’t use Await at the global level; it always needs a wrapper function. Most JavaScript code runs inside a function, so this isn’t a big deal.