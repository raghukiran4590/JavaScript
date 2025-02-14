const pr = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!!");
});


async function getData() {
    return pr;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));

//Async and Await are used to handle promises
//Using above logic using await keyword

async function handlePromise() {
    console.log("Hello World");
    const val = await pr;
    console.log("JavaScript Async/Await"); // JS Engine waits for the pr promise to be resolved before executing this line
    console.log(val);
}

handlePromise();

//Await can only be used inside an async function



