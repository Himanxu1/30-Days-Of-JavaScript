//  Callback . Async and await , promises

//  Callback
function addString(previous, current, callback){
    setTimeout(
      () => {
        callback((previous + ' ' + current))
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

//    In order to call it
  function addAll(){
    addString('', 'A', result => {
      addString(result, 'B', result => {
        addString(result, 'C', result => {
         console.log(result) // Prints out " A B C"
        })
      })
    })
  }
  addAll()


//    promises
  function addString(previous, current){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(previous + ' ' + current)
        }, 
        Math.floor(Math.random() * 100) + 1
      )
    })
  }

//  call function
  function addAll(){  
    addString('', 'A')
    .then(result => {
      return addString(result, 'B')
    })
    .then(result => {
      return addString(result, 'C')
    })
    .then(result => {
      console.log(result) // Prints out " A B C"
    })
  }
  addAll()

//   using arrow function

  function addAll(){  
    addString('', 'A')
    .then(result => addString(result, 'B'))
    .then(result => addString(result, 'C'))
    .then(result => {
      console.log(result) // Prints out " A B C"
    })
  }
  addAll()

//  Using async await 
  
  async function addAll(){
    let toPrint = await addString('', 'A')
    toPrint = await addString(toPrint, 'B')
    toPrint = await addString(toPrint, 'C')
    console.log(toPrint) // Prints out " A B C"
  }
  addAll()