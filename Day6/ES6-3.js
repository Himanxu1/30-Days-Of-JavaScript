//  The Rest Parameter


//  The Problem

// function sum(a,b){
//     return a+b;
// }


// sum();
// sum(1);
// sum(22,3);
// sum(2,5,6);


function sum(...args){
    let result =0;
    for(let i=0;i<args.length;i++){
        result += args[i];
    }

    console.log(result);
}

sum(1);
sum(1,2,43);
sum(3,4,5,6,6,7,8,);


