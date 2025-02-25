// In JavaScript everything is an object

const p1 = {
    fname:"Raghu",
    lname:"Kiran",
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
};

const p2 = Object.create(p1);

console.log("p1 is ", p1);
console.log("p2 is ", p2); //It shows as empty

console.log("p2 is ", p2.getFullName()); //But, we can still get the properties


//A __proto__ is created that is also called as prototype of object p1

// const p2 = {
//     --proto__ : p1;
// };

console.log("p2 prototype : ", p2.__proto__);


const t1 = {
    xp1:"this is t1"
};

const t2 = {
    xp2: "this is t2",
    __proto__ : t1
};

const t3 = {
    xp3:"this is t3",
    __proto__ : t2
};

let s = s.__proto__; //String
s = s.__proto__.__proto__;//Object
s= s.__proto__.__proto__.__proto__; //Null

// console.log(s);

console.log(t2.xp2);
console.log(t2.xp1);
console.log(t3.xp2);
console.log(t3.xp1);
