const currButton = document.getElementById("stop-btn");

function getTime() {
     const currentTime = new Date();
     const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
     document.getElementById("time").innerText=time;
    //  console.log(time);
}

let interval = setInterval(getTime, 1000);

currButton.addEventListener("click", () => {
    clearInterval(interval);
});

// setTimeout runs only one time after entered time
// setInterval runs everytime frequently for the time entered

