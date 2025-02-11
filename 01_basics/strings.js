const name = "aadi"
const age = 18

// console.log(name + repoCount + " value");     (OLD WAY)

//NEW WAY...
console.log(`my name is ${name} and my age is ${age}`);



//ANOTHER WAY TO DEFINE A STRING 
const game = new String('VALORANT-GTA-BGMI-CYBERPUNK-GARENA')
// console.log(game[0]);
//console.log(game[1]);
// console.log(game.length);
// console.log(game.toLowerCase());
// console.log(game.charAt(2));
// console.log(game.indexOf('t'));

// dividing into sub strings...

const newstring = game.substring(0,4)
//console.log(newstring);

//substring() is used to divide the string....

const anotherstring = game.slice(-8,8)
//console.log(anotherstring);

// slice() same as substring but can take -ve values as well...

const str1 = "    aadi    "
// console.log(str1);
// console.log(str1.trim());

// trim() is used to remove the blank spaces present in the string...

const url = "https://shrivansh.com%20singhal"
//console.log(url);

//replace() is used to replace any character from the string...
//console.log(url.replace('%20',"-"));

//includes() checks wether the given charachter is present in the string or not...
// console.log(url.includes('shrivansh'));
// console.log(url.includes('vroomm'));

console.log(game.split('-'));
