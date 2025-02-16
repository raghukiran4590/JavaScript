<button id="clickButton">Click Me</button>

function handleButtonClick() {
    console.log("I am Clicked");
    alert("This is clicked");
}

const el = document.getElementById("clickButton");
const nameBlock = document.getElementById("name-block");

el.addEventListener("click", handleButtonClick);

el.addEventListener("click", () => {
    if(nameBlock.style.color === "red")
        nameBlock.style.color = "blue";
    else
        nameBlock.style.color = "red";
});

const allChildren = document.querySelector("body").children;

for(let i =0; i<allChildren.length; i++) {
    allChildren.item(i).addEventListener("click", () => {
        allChildren.item(i).remove();
    });
}