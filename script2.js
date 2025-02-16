const username = document.getElementById("username");
const userInput = document.getElementById("user-input");
const userButton = document.getElementById("user-button");

userButton.addEventListener("click", ()=> {
    const name = userInput.value;
    console.log(name);
    localStorage.setItem("name", name);
    // username.innerText=localStorage.getItem("name");
    location.reload();
})

window.addEventListener("load", ()=> {
    const value = localStorage.getItem("name");
    username.innerText = value; 
})