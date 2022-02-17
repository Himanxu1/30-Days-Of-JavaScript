//  Object Destructor

let student ={
    name:"Himanshu",
    course:"Btech",
    Age: 19,
    address:{
        city:"Haridwar",
        country: "India"
    }
}

// let n = student.name;
// let c = student.course;
// let a = student.Age;

let{name : title,course,Age,address : { city,country}} = student;

// console.log(name);
console.log(course);
console.log(Age);
console.log(title);
// console.log(address);
console.log(city);

