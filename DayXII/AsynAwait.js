// Normal Function
// function myfunction(){
//     return console.log("Hello");
// }

// myfunction();

//  Async -> We use Async with functions which is goung to return a promise
//  It must be placed before the functions

// async function myfunction(){
//     let sentence = "Promise is resolved";
//     return sentence;
// }


// myfunction().then(console.log)

//  The word "Async" before a function means one simple thing : a function always
// return a promises and values are wrapped in a resolved promise 
// automatically

// async function myfunction(){
//     return  Promise.resolve("Promise is resolved");
// }

// myfunction().then(console.log);


// Await is used to only inside async function (This await will tell us to wait for the data to be resolved or to be fetched )


// async function myfunction(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve("The promise is reolved");
//         },2000);
//     });

//     let result = await promise;
//     console.log(result);
// }

// myfunction();


//  Project

// async function myfunction(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     console.log(response);
//     let userData = await response.json();

// }
// myfunction();

//  Github Project

function loadData(url){
    return fetch(url).then(response=>{
        if(response.status == 200){
            console.log(response);
            return response.json();
        }else{
            throw new Error(response.status);
        }
    })
}
loadData("https://jsonplaceholder.typicode.com/todos").catch(alert);