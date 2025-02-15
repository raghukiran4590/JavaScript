//map, filter, reduce, some, every, foreach, sort

let list = [1,2,3];

for(let i of list) {
    console.log(i);
}

list.forEach(function(i) {
    console.log(i);
});

list.forEach(i => console.log(i));

let foundElement = array.find(function (element) {
    return element > 3;
});

console.log(foundElement);

const alleven = array.every(function(element) {
    return element%2===0;
});

console.log(alleven);

const hasEven = array.some(function(element) {
    return element%2===0;
});

console.log(hasEven);

let a = [1,2,3,4,56,1,2,9,78,99];

a.sort((a,b) =>a - b); //ascending

a.sort((a,b) => b-a); //descending

console.log(a);