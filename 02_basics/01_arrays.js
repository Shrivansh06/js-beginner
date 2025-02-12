//  arrays
//  arrays too have proto-type access

const myarr = [0,1,2,3,4,5]

const myarr2 = new Array(1,2,3,4,5,6)

// console.log(myarr[3]);
// console.log(myarr2);


            // METHODS OF ARRAY
// myarr.push(7)
// myarr.pop()
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr);

// // join() converts the array into string
// console.log(myarr.join());


//  SLICE AND SPILICE
console.log("A", myarr);
//  slice() don't changes the refrence array and it doesn't includes the end digit of the given input...
 const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B", myarr);
//  splice() changes the refrence array and includes the end digit of the input as well...
const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("C", myarr);

