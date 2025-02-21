const colorCodeContainer = document.getElementById("color-code");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score");
let randomColor;
let score = 0;

function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function incrementScore() {
    score += 1;
}

function validateColor(el) {
    const selectedColor = el.target.style.backgroundColor;
     if(selectedColor == randomColor) {
        incrementScore();
      } else {
        score = 0;
      }
      window.localStorage.setItem("score", score);
     startGame();
}

function generateRandomColorRGB() {
      const red = generateRandomNumberBetween(0,255);
      const green = generateRandomNumberBetween(0,255);
      const blue = generateRandomNumberBetween(0,255); 

      return `rgb(${red}, ${green}, ${blue})`;
}

const ans = generateRandomNumberBetween(0,6);

function startGame() {
    score =  Number(window.localStorage.getItem("score"));
    scoreContainer.innerText = score;
    optionsContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    for(let i=0; i<6; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = 
        i === ans ? randomColor : generateRandomColorRGB();
        optionsContainer.append(div);
        div.addEventListener("click", validateColor);
    }
}

window.addEventListener("load", () => startGame());