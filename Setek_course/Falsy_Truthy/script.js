// Flasy - false, 0, empty string, null, NaN
// Truthy - all except things above

const products = ['toys'];
const product = products[1];

console.log(product)

if(product){
  console.log('Product was found');
} else {
  console.log('Product was not found');
};