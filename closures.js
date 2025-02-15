function main(name) {
    function sayMyName() {
        console.log(name);
    }
    return sayMyName; 
}

let consoleRaghu = main("Raghu");

console.log(consoleRaghu);

consoleRaghu();

function adder(num) {
    function add(b) {
        console.log(num + b);
    }
    return add;
}

const addTo5 = adder(5);

const addTo10 = addTo5(10);

addTo10;