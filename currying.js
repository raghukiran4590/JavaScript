function add(a) {
    return function(b) {
        return function(c) {
            return a+b+c; 
        }
    }
}

console.log(add(3)(2)(5));


function sendEmail(to) {
    return function(subject) {
        return function(body) {
            console.log(`Sending Email to ${to} with the subject ${subject} : ${body}`);
        }
    }
}

sendEmail("raghukiran@hotmail")("Currying in JavaScript")("Concept of Currying");

const sendAutoEmail = (to => subject => body => `Sending Email to ${to} with the subject ${subject} : ${body}`);

let step1 = sendAutoEmail("raghukiranus@gmail.com");
let step2 = step1("New Order Confirmation");
let step3 = step2("Hey Raghu, here is something for you");

console.log(step3);

