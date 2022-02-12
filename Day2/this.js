// "This" Keyword in JavaScript

let person = {
    firstName: "Himanshu",
    lastName: "Singh",
    sayHi (){
        console.log("Hello I am "+this.firstName+" I have " +car.brand+" car");
    }

};

let car = {
    brand:"Audi",
    price:12200

};

person.sayHi();