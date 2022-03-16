const age = 20 + " ";
// console.log(age);


const user = Array(5).fill(1);
// console.log(user);

 const users= [
     "Ed",
     "Aman",
     "Unemployed tech lead",
     "Aman",
     "rohan",
     "rohan"
 ];

 const unique = Array.from(new Set(users));

//  console.log(unique);
const dynamic  = 'hobbies';

const use = {
    name : "Ed",
    email:"edmamc@gmail.com",
    [dynamic]: "sleep "

}


// console.log(use.hobbies);

const userss = [1,2,3,4,5,6,7];
// userss.length = 5;
// console.log(userss);
// console.log(userss.slice(-3));

const userObject = { ...userss};
// console.log(userObject);


const student = {
    name: "Himanshu",
    email: "singh@gmail.com",
    address: "Haridwar"
}

const stArray = Object.keys(student);
// console.log(stArray);


//  Performance

let startAt = performance.now();

for(let i=0;i<1500;i++){
    console.log(i);
}

let endAt = performance.now();

console.log(`${endAt - startAt} milli seconds`);