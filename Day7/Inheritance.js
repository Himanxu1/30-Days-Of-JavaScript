class emp{
    constructor(){
        console.log("Emp constructor called");
    }

    sayHi(){
        console.log("Hi..");
    }


}


class manager extends emp{
   sayHello(){
       console.log("Hello");
   }
}


let m1 = new manager();

m1.sayHi();42