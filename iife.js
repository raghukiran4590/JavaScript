//IIFE - Immediately Invoked Function Expression

(function add(a,b) {
    console.log(a +b);
})(2,3);

(function say(){
    console.log("Hey");
})();

(()=> console.log("I am ES6 JS"))();

const value = (() => 100)();

console.log(value);


// const data = (async () => await fetch())() ;


const atm = function (initialBalance) {
    let balance = initialBalance;
    function withDraw(amt) {
        if(amt > balance) {
            return "Are you kidding?";
        } else {
            balance -= amt;
            return balance;
        }
    }
    return { withDraw };
};

const raghu = atm(1000);
console.log(raghu.withDraw(100));
console.log(raghu.withDraw(200));
console.log(raghu.withDraw(1000));


