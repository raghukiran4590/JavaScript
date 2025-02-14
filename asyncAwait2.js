const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value p1!!!");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value p2!!!");
    }, 10000);
});

async function handlePromise() {
    console.log("Hello World");

    const val = await p1;
    console.log("JavaScript Async/Await");
    console.log(val);

    const val2 = await p2;
    console.log("JavaScript Async/Await 2 ");
    console.log(val2);
}

handlePromise();



