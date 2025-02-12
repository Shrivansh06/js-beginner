
// object literals

const mysym = Symbol("key1") //defining a symbol...


const JSuser={
    namae: "shrivansh",
    "full name": "SHRIVANSH",
    [mysym] : "my key 1" , // to access a defined symbol as a key... we use [symbol name]
    age: 18,
    location: "greater noida",
    email: "xyz@gmail.com",
    isloggedin: true,
}

// console.log(JSuser.email);

//keys of objects are always treated as string hence [] this is the correct method to acces any key from the object
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]); 
// console.log(JSuser[mysym]);


//  to change the value of a key in an object...
JSuser.email = "Aadi@gmail.com" // = is used to define a new value

// Object.freeze(JSuser) // freeze is applied on an object so that its value can't be changed...
JSuser.email = "aadi@chatgpt.com"
 // console.log(JSuser);


 JSuser.greeting = function(){
    console.log("hello there!! ");
}

JSuser.greetingTWO = function(){
    console.log(`hello there!!, ${this.namae}`); // ${this. } is used to access all the properties of the given object
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTWO());

