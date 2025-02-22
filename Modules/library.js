export default function() {
    console.log("Default Function");
}

let message = "ES6 Modules";

function user(name) {
    console.log(`Hello ${name}`);
}


class test {
    constructor() {
        console.log("Constructor Method");
    }
}

function users() {
    return 'users';
}

export {users};

export {message, user, test};
