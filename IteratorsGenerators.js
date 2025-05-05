function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

const even = count();

console.log(even.next()); // { value: 2, done: false }