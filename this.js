function sayHello() {
    console.log("Hello "+this.name);
}

let user = {
    name: "Raghu",
    greet: sayHello
}

user.greet();