//  Global VS Local;
 
 let car = "Audi";  // Global Variable

//  let car = "BMW";   => already been declared

function add(){

    let result = 33;  // Local Variable 
    console.log(result);

}

add();

// console.log(result);   => not defined here
