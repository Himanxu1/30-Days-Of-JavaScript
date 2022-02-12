//  Maths Objects

var x = Math.round(4.5);
var y = Math.floor(4.1);
var z = Math.ceil(4.5);
var a = Math.pow(2,3);
var b = Math.sqrt(4);
var x1 = Math.min(2,3,4,5);
 
let c = Math.floor(Math.random()*10)+1;

function getRandom(min,max){
    let x = Math.floor(Math.random()*(max-min))+min;
    return x;
}

let d = getRandom(25,15);

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);

console.log(d);
