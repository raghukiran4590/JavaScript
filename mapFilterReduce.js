const arr = [1,2,3,4,5];

const output = arr.map((x) => x * 2);

console.log(output);

const output2 = output.filter((x) => x > 5);

console.log(output2);

const output3 = output2.reduce((acc, curr) => acc + curr, 0);

console.log(output3);