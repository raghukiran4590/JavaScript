const myName = document.getElementById("my-name");
const myBtn = document.getElementById("my-btn");

function changeTextSize(size) {
    function changeSize(){
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}


const size12 = changeTextSize(12);
const size32 = changeTextSize(32);
const size52 = changeTextSize(52);
const size72 = changeTextSize(72);

myBtn.addEventListener("click", size52);
