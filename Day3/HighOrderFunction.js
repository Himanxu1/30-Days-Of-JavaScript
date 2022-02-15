
function morning(name){
    return `Good morning,${name}`;
}

function evening(name){
    return `Good evening,${name}`;
}
function happyBirthday(name){
    return `Happy Birthday,${name}`;
}
function greet(name,func){
    return func(name);
}

console.log(greet("Golu",morning));
console.log(greet("Devansh",evening));
console.log(greet("Rohan",happyBirthday));

