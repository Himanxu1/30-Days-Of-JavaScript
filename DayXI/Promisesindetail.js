// const  meetingFriends = new Promise((resolve,reject) => {
//     meeting = false;
//     if(meeting){

//         resolve("Yayy you meet your friends")
//     }else{
//         reject("You not met with your friends")
//     }
// });

// //  Then is used to display the data and catch is used to display error in correct format
// //  without then you didn't able to show the data
// meetingFriends.then((data) => {
//     console.log("Thanks you for meeting "+ data);
// }).catch((err)=>{
//     console.log("you did not come "+err)
// }) 



// const colorDisplay = new Promise((resolve,reject)=>{
    
//     setTimeout(() => {
//         let color = ["blue","red","green"];
//        resolve(color);
//        reject("Error while displaying colors")
//     },3000);

// });

// colorDisplay.then((data)=>{
//     console.log("Colors are: "+ data);
// }).catch((err) => {
//     console.log("wrong"+err)
// })


// Third Example 

// let walk = function(){
//     return new Promise((resolve,reject)=>{
//          resolve("Finished walking")
//     })
// }

// let breakfast = function(){
//     return new Promise((resolve,reject)=>{
//          resolve("Finished breakfast")
//     })
// }

// let lunch = function(){
//     return new Promise((resolve,reject)=>{
//          resolve("Finished lunch")
//     })
// }

// walk().then((data)=>{
//     console.log(data);
//     return breakfast(data);
// }).then((data)=>{
// console.log(data);
// return lunch(data)
// }).then((data)=>{
//     console.log(data)
// })

// Promise.all([walk(),breakfast(),lunch()]).then((data)=>{
//     console.log(data);
// })



