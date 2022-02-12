//  Objects In JavaScript

let person = {
    firstName :"Himanshu",
    lastName: "Singh",
    college: "Shivalik College Of Engineering ",
    course: "Btech",
    // sayHi : function (){
    //     console.log("Hello");

    // }

    sayHi (){
        console.log("Hello");
    }


   
};

// console.log(person.college);
// console.log(person['college'])

person.age = 19;

// console.log('height' in person);

// for(let keys in person){
//     console.log(keys);
// }

// for(let key in person){
//     console.log(person[key]);
// }

//   1st Method

// person.sayHi = function (){
//     console.log("Hello");
// }

// person.sayHi();

//  2nd Method


// function greet(){
//     console.log("Hello");
// }

// person.sayHi = greet;

// person.sayHi();

//  3rd Method

// person.sayHi();