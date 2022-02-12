//  Objects In JavaScript

let person = {
    firstName :"Himanshu",
    lastName: "Singh",
    college: "Shivalik College Of Engineering ",
    course: "Btech"
};

// console.log(person.college);
// console.log(person['college'])

person.age = 19;

// console.log('height' in person);

for(keys in person){
    console.log(keys);
}