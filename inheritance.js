class fruits {
    constructor(name) { //constructor method
        this.empname = name;
        console.log("Parent Class");
    }
    info() { //prototype method
        console.log("Employee Name :  "+this.empname);
    }

    static message() {
        console.log("Static Method called");
    }
}

class mango extends fruits {
    constructor() {
        super("Raghu Vriha");
        fruits.message();
        console.log("Child Class");
    }
}

// let a = new fruits();

let b = new mango();

b.info();

