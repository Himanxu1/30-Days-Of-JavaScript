//  Object Prototype is the method in which we can add method and properties to the object  Constructor later
//  Note: Prototype is a Class which every Class Inherited

// This is a Student Object 
function Student(first,last,age,course){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.course = course;
    // this.name = function (){
       // return this.firstname + " "+ this.lastname;
    // }
    
}

// Here I used prototype  to add property

Student.prototype.nationality = "Indian";

// Use Prototype to add Method

Student.prototype.name = function (){
    return this.firstname + " "+ this.lastname;
}

var s1 = new Student("Himanshu","Singh",19,"Btech");
var s2 = new Student("Mityam","kumar",20,"Btech");
var s3 = new Student("Lalit","kumar",17,"Bsc");

console.log(s1.nationality);
console.log(s1.name());


