import products from './product';

const productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = 'New York';

const product = products.filter(product => {
    return product.name === productName;
})[0]

if (product.preOrder === true) {
    console.log('We will send a message when it’s on the way.');
}

if (product.price > 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
  } else {
    shipping = 5;
  }
  
  console.log(`Shipping cost: $${shipping}`);

  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = .05;
  }
  
  taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);