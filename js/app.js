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

console.log(totalPrice.innerText);
console.log(phoneQuantity.value);
console.log(caseQuantity.value);


// increment and decrement handler