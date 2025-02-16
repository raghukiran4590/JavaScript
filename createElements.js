
const button = document.getElementById("clickButton");
const container = document.getElementById("my-container");

let count = 1;

button.addEventListener("click", ()=> {
    const el = document.createElement("li");
    const hd = document.createElement("h1");
    hd.innerText = "Raghu Kiran";
    el.innerText = count;
    container.appendChild(el);
    container.appendChild(hd);
    count++;
});