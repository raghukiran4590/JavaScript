import {message as msg, user, test} from './library.js';

import {users} from './bridge.js';

import def from './library.js'; //import default function from library.js file

// import * as rk from './library.js';

console.log(msg.message);

// console.log(rk.message);

// document.body.innerHTML = message;

user('Raghu');

// rk.user('Raghu');

let a = new test();

// let a = new rk.test();

def();

console.log(users());