// Object Oriented Programming in ES6 JavaScript

class Hello{
    constructor(nm, age) { //Constructor Method
        this.studentNm = nm;
        this.studentAge = age;
        console.log("Constructor Function");
    }
    message() { //Prototype Method
        console.log("Hello "+this.nam);
        console.log(`Hello ${this.studentNm} with ${this.studentAge}`);
    }
    sorry() { // Prototype Method
        console.log("Sorry Everyone");
    }
    bye() { // Prototype Method
        console.log("Bye Everyone");
    }

    static staticMethod() { // Static Method
        console.log('Static Method');
    }
}

// Type of Methods in the Class:
// Constructor, Prototype, Static

let a = new Hello("Raghu", 35);
a.nam = "Raghu";

a.message();
a.sorry();
a.bye();

let b = new Hello("Neetha", 30);
b.nam = "Neetha";

b.message();
b.sorry();
b.bye();


Hello.staticMethod();


