// DOM: Document Object Model

// document.getElementById(#id).textContent="";

// document.getElementsByClassName(.p).textContent="";

// document.getElementsByTagName(h).textContent="";

// document.querySelector(p).textContent="";

// document.querySelectorAll(li).textContent="";

// querySelector - selects the first occurrence Element in the Selection

// querySelectorAll - selects all the occurrences of the Element in the selection

const ele = document.querySelector(".block");
console.log(ele.parentElement.childNodes);

ele.forEach(element => {
console.log(element.innerHTML); 
});

console.log()