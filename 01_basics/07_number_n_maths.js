const number = new Number(69.89)
// console.log(number);

// console.log(number.toString());

// console.log(number.toFixed(2));

const othernumber= 69.98
// console.log(othernumber.toPrecision(2))

const digit = 1000000000
// console.log(digit.toLocaleString('en-In'))


// +++++++++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++

// console.log(Math)

// // abs() is used to convert -ve value to +ve...
// console.log(Math.abs(-69));

// // round() is used to round off...
// console.log(Math.round(4.9));
// console.log(Math.round(4.3));

// // ceil() takes the above value only... agr 4 se ek point bhi upar to 5 output
// console.log(Math.ceil(4.3));

// // floor() takes the lower value only... 4 se upar hoga to bhi 4 hi output hoga
// console.log(Math.floor(4.3));

// console.log(Math.min(2,5,3,43,5,55));
// console.log(Math.max(2,5,3,43,5,55));

console.log(Math.random())

const   min = 10
const max = 20

// console.log(Math.random() * (max-min+1) )
console.log(Math.floor(Math.random() * (max-min+1) )+min);
