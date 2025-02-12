console.log('Starting index.js');

function cb() {
    console.log('Callback called');
}

setTimeout(cb, 1000);

console.log('Ending index.js');
