const API_URL = "https://api.github.com/users/raghukiran4590";

async function fetchPromise(){

    //fetch() function gives you a response object that is a readable stream
    //fetch() => Response.json() => jsonValue
    try {

        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        // fetch().then(res => res.json()).then(res => console.log(res));
        console.log(jsonValue);
    } catch(err) {
        console.log(err);
    }
}

fetchPromise();

// or
// fetchPromise().catch((err) => console.log(err));
