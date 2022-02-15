//  Getter and Setter 
//  If we want to return any value of object with Manupulation then we Use Getter and Setters

var person = {
    name:"Himanshu",
    age:19,

    //   getter
    // get getname(){
    //      return this.name.toUpperCase;
    // },
    //  setter
    set setname(n){
        this.name = n.toUpperCase();
    }

}
person.setname = "Arun";
console.log(person);




