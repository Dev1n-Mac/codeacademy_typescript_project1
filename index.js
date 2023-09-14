"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var productName = 'beanie';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = 'New York';
var product = product_1.default.filter(function (product) {
    return product.name === productName;
})[0];
if (product.preOrder === true) {
    console.log('We will send a message when it’s on the way.');
}
if (product.price > 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
}
else {
    shipping = 5;
}
console.log("Shipping cost: $".concat(shipping));
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = .05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
