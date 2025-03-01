const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggeredCount = 0;

// //Debounce effect using loadash.js library
// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggeredCount;
// }, 800);

const myDebounce = (cb, d) => {
    let timer;
    return function(...args) {
    if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    };
};

const myThrottle = (cb, d) => {
    let last = 0;

    return (...args) => {
        let now = new Date(). getTime();
        if(now - last < d) return;
        last = now;
        return cb(...args);
    };
};

const myDebouncedCount = myDebounce(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 800);

const myThrottleCount = myThrottle(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 1000); 

const start = new Date().getTime();

// //Throttle effect using loadash.js library
// const throttledCount = _.throttle(() => {
//     const now = new Date().getTime();
//     console.log(now-start);
//     count.innerHTML = ++triggeredCount;
// }, 800);

//wiritng our own debounce method


btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    // debouncedCount(); 
    // throttledCount();
    // myDebouncedCount();
    myThrottleCount();
});

