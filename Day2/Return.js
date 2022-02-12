//  Returning a Value from function we Use Return Statement 

function add(a,b){
    return a+b;
}

// let c = add(1,20);
                        // output = undefined;
// console.log(c);

// let c = add(2,3);
// console.log(c);

//  what if we do not write return in the function then function will return Undefined



function compare(a,b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }else {
        return 0;
    }
}

let a = compare(2,3);
console.log(a);