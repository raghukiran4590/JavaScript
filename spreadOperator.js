function sum(name, ...args) {
    // ...args -> rest operator
    //name -> first param is name
    // rest operator shoukd be always be the last parameter defined in the function
    // console.log(name);
    // console.log(args);
    let sum = 0;
    for(let i in args) {
        sum += args[i];
    }
    // console.log(sum);
}

let arr = [10, 20, 30];

sum("Raghu", arr); // This will result in error as the function can't recognize the arr as argument

sum("Raghu", ...arr); //this way you can pass an array object as argument

var arr1 = [10,20,30,40];

// var arr2 = arr1;

var arr2 = [...arr1];

arr1.push(50);

// var arr3 = arr1.concat(arr2);

var arr3 = [...arr1, ...arr2];

console.log(arr1);

console.log(arr2);

console.log(arr3);


var obj1 = {name : "Raghu Kiran"};

var obj2 = {age : 35};

var obj3 = {...obj1, ...obj2};

console.log(obj3);