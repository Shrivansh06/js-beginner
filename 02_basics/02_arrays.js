
const marvelheros = ['spiderman', 'thor', 'hulk']
const dcheros = ['flash', 'super man', 'batman']

       

// if we push 1 array to another the 2 array will be treated as an element of 1 array
// marvelheros.push(dcheros)
// console.log('A ', marvelheros);

           

//  when we concat 1 array to another the 2 array will get merged within 1 and becomes 1 complete array
// const allheros = marvelheros.concat(dcheros)
// console.log(allheros);




//  ...Array it is a spread operator which can be used to merge multiple arrays at once
const all_new_heros = [...marvelheros , ...dcheros]
// console.log(all_new_heros);




// flat() is used to convert multiple nested array into one single array...
const another_array = [1,2,3,[4,5,6],7,8,[3,4,5,[8,7,6],9]]
const real_array = another_array.flat(Infinity)
// console.log(real_array);



console.log(Array.isArray("shrivansh"));
console.log(Array.from("shrivansh")); //Array.from can convert any string, object into an Array...



let sc1 = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc1, sc2, sc3));
