function add(a,b) {
    return a + b;
}

function square(val) {
    return val * val;
}

function composeTwoFunctions(f1, f2) {
    return function (a,b) {
        return f2(f1(a,b));
    }
}

const c2f = (f1, f2) => (a, b) => f2(f1(a,b));

const task = composeTwoFunctions(add, square);

const newTask = c2f(add, square);

console.log(task(2,3));

console.log(newTask(3,4));

function compose(...fns) {
    return function(...value) {
        return fns.reduce((a,b) => b(a), value);
    };
}

const composeAll = (...fns) => (...val) => fns.reduce((a,b) => b(a), val);


