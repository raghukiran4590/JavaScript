function sum() {
    let sum = 0;
    for(let i in arguments) {
        sum += arguments[i];
    }
    console.log(sum);
}

sum(20,30,40,50);

sum("Yahoo Gmail", 30, 40, 50); // Rest Operator


function sum(name, ...args) {
    // ...args -> rest operator
    //name -> first param is name
    // rest operator shoukd be always be the last parameter defined in the function
    console.log(name);
    console.log(args);
    let sum = 0;
    for(let i in args) {
        sum += args[i];
    }
    console.log(sum);
}