console.log("connected");;

// variable declare section
const totalPrice = document.getElementById("total");
const tax = document.getElementById("tax");
const subTotal = document.getElementById("subtotal");


const phoneDecrementBtn = document.getElementById("phone-price-decrement");
const phoneIncrementBtn = document.getElementById("phone-price-increment");
const phonePrice = document.getElementById("phone-price");
const phoneQuantity = document.getElementById("phone-quantity");

const caseDecrementBtn = document.getElementById("case-price-decrement");
const caseIncrementBtn = document.getElementById("case-price-increment");
const casePrice = document.getElementById("case-price");
const caseQuantity = document.getElementById("case-quantity");

// Fixed Price
// const eachPonePrice = getIntegerValue(phonePrice.value);
// const eachCasePrice = getIntegerValue(casePrice.value);
const eachPrice = [getIntegerValue(phonePrice.innerText), getIntegerValue(casePrice.innerText)];

console.log(totalPrice.innerText);
console.log(phoneQuantity.value);
console.log(caseQuantity.value);



// utility function

function debug(value) {
    console.log(value);
}

function getIntegerValue(number) {
    return parseInt(number);
}

function updateTotalPrice() {
    let subtotal = getIntegerValue(phonePrice.innerText) + getIntegerValue(casePrice.innerText);
    subTotal.innerText = subtotal;

    let total = subtotal + getIntegerValue(tax.innerText);
    totalPrice.innerText = total;
}

function updateAllPrice(quantity, currentPrice, indexPrice) {
    // debug(eachPrice[indexPrice])
    currentPrice.innerText = getIntegerValue(quantity.value) * eachPrice[indexPrice];
    updateTotalPrice();
}

function incrementDecrementBtn(quantity, noQuantity, currentPrice, indexPrice) {
    debug(indexPrice);
    let totalQuantity = getIntegerValue(quantity.value) + noQuantity;
    if (totalQuantity > 0) {
        quantity.value = totalQuantity;
        updateAllPrice(quantity, currentPrice, indexPrice)
    }
    // debug(quantity.value);
}
// increment and decrement handler

phoneIncrementBtn.addEventListener('click', function(e) {
    incrementDecrementBtn(phoneQuantity, 1, phonePrice, 0);
});
phoneDecrementBtn.addEventListener('click', function(e) {
    incrementDecrementBtn(phoneQuantity, -1, phonePrice, 0);
});
caseIncrementBtn.addEventListener('click', function(e) {
    incrementDecrementBtn(caseQuantity, 1, casePrice, 1);
});
caseDecrementBtn.addEventListener('click', function(e) {
    incrementDecrementBtn(caseQuantity, -1, casePrice, 1);
});