//    Reduce Function in JavaScript

let arr = [1,3,-1,2];

// let sum=0;
for(let n of arr)
     sum += n;

   console.log(sum);  

const sum = arr.reduce((accumulator,currentValue) => {
    return accumulator += currentValue;
},0);

console.log(sum);