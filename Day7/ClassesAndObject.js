class person{
  constructor(n,a){
      this.name = n;
      this.age = a;
  }

  sayHi(){
      console.log("Hi");
  }
//  Static method are called from parent/class name
 static hello(){
     console.log("Hello..");
 }

}

let person1 = new person("Himanshu",19);
person1.sayHi();

