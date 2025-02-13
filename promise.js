const cart = ["apple", "orange", "banana"];

const promise = createOrder(cart);

createOrder(cart).then((orderId) => {
    console.log(orderId);
    return orderId;
}).catch((error) => {
    console.log(error);
    //showErrorMessage(error);
})
.then(function(orderId) {
    return proceedToPayment(orderId);
}).then (function(PaymentInfo) {
    console.log(PaymentInfo);
}).then(function() {
    console.log("No matter what happens this will execute");
});

//Promise Producer

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const error = "Invalid Cart";
            reject(error);
        }

        const orderId = "ORD1234";

        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
}

function proceedToPayment(order) {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful");
    })
}

function validateCart(cart) {
    return true;
}