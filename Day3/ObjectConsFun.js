//  Before ES6 come into play which introduce the Class in javascript , before thant we
//  use Object constructor to create object with same properties

    // var student1 = {
    //     firstname: "Himanshu",
    //     lastname: "Singh",
    //     age: 19,
    //     Course: "B.Tech"
    // }

    // var student2 = {
    //     firstname: "Mityam",
    //     lastname: "kumar",
    //     age: 19,
    //     Course: "B.Tech"
    // }

function Student(first,last,age,course){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.course = course;
    this.name = function (){
        return this.firstname + " "+ this.lastname;
    }
    
}

var s1 = new Student("Himanshu","Singh",19,"Btech");
var s2 = new Student("Mityam","kumar",20,"Btech");
var s3 = new Student("Lalit","kumar",17,"Bsc");
var s4 = new Student("Rohan","Singh",19,"B.com");
console.log(s1.firstname);
console.log(s1.lastname);
console.log(s1.age);
console.log(s1.course);