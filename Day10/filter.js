//  Filter Function is used when we want to filter out element from array with a specific condition

//  Previously

// let arr = [2,4,10,23,34,54]

// let arr1 = [];

// for(let i=0;i<arr.length;i++){
//     if(arr[i] > 10){
//         arr1[i] = arr[i];
//     }
// }


//  With Anonymous Fuction

// let arr1 = arr.filter(function(val){
//     return val > 10;
// });

//  with arrow fuction

// let arr1 = arr.filter((val) => val > 10);


let arr = [
    {
        name : "Himanshu",
        position: "developer"
    },
    {
        name : "shyam",
        position: "ui designer"
    },
    {
        name : "ram",
        position: "developer"
    },
    {
        name : "rohan",
        position: "content writer"
    },
    {
        name : "Max",
        position: "developer"
    }
]


let arr1 = arr.filter(val => val.position == "developer");

console.log(arr1);


