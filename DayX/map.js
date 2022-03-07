//  Map function is used when we want to perform opertaion on every element of the array

//  Previously

let arr = [2,3,4,5];

// let arr1= [];

// for(let i=0;i<arr.length;i++){
//     arr1[i] = arr[i] * 2;
// }

// console.log(arr1);

//  Anonymous Function
let arr2 = arr.map(function(val){
      return val * 3;
})

//  Arrow function

let arr1 = arr.map((val) => val *4);

console.log(arr1);