// modules === packages in java

//file1.js

export let name = "Raghu Kiran";

export function hello {
    console.log('export function');
}

export class user {

}

// how to include file1.js in html

{/* <Script type = "module" src = './file1.js'></Script> */}


//file2.js

import {name} from './file.js'

// import { Script } from 'vm';
import {hello} from './file1.js'

console.log(name);

hello();