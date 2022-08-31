// Coercion

console.log('5' + 5);
console.log('5' - 5);

const result1 = '5' + 5;
const result2 = '5' - 5;

console.log(typeof result1);
console.log(typeof result2);

const result3 = true + 5;   // true is number 1, false is number 0
console.log(result3);
console.log(typeof result3);
console.log(typeof true + 5);

// look after type; use this instead of ==
console.log(5 === 5);
console.log('5' === 5);
// don't look after type
console.log(5 == 5);
console.log('5' == 5);
