const { get } = require("http");

const p1 = {
    fname : "Raghu", 
    lname : "Kiran",
    age: 35
};

console.log(p1);

const p1Proxy = new Proxy(p1, { get(target, prop) {
    if(prop in target) return target[prop];
    return false;
},
set(target, prop, value) {
    if(!(prop in target)) throw new Error(`${prop} does not exist`);
    switch(prop) {
        case 'fname':
        case 'lname':
            if(typeof(value) !== 'string')
                throw new Error(`${prop} must be a string`);
            break;
        case 'age':
            if(typeof(value) !== 'number')
                throw new Error(`${prop} must be a number`);
            if(value<=0) 
                throw new Error(`${prop} must be > zero`);
        }
        target[prop] = value;
        Reflect.set(target,prop,value); // Reflect helps us to avoid missing nay edge cases in case of writing our own logic to handle the operations Get/Set as above
}
});

p1Proxy.age = -10;

console.log(p1Proxy.age);