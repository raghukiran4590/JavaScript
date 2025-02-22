let user = ["Raghu Kiran", 35, "Delhi", ["Male", 24000]];

//  let name = user[0];

// let age = user[1];

// new ES6

let[name, age = 20, [gender, salary]] = user;

//age=20 is the default value

// console.log(name, age);


function user() {
    return ["Vriha Kiran", 4, "Hyd"];
}

let [nm, dob, city] = user();