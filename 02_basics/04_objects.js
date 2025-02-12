
const user={
    namae: "shrivansh",
    "full name": "SHRIVANSH",
    //[mysym] : "my key 1" , // to access a defined symbol as a key... we use [symbol name]
    age: 18,
    location: "greater noida",
    email: "xyz@gmail.com",
    isloggedin: true,
}


const regularuser = {
    email : "xyz@gmail.com",
    fullname: {
        userfullname :{
            firstname : "shrivansh",
            lastname : "singhal",
        }
    }
} 
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = { obj1, obj2, obj3 } // this will treat every object as one element
// console.log(obj4);  

const obj5 = Object.assign({}, obj1, obj2, obj3) //this will treat every key value pair as one element
// console.log(obj5);

// best syntax for this is spread method
const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);


// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)); // this gives all key: value pairs in separate arrays
console.log(user.hasOwnProperty('age'));  //this checks wether the given input is present in object or not


const a = Object.entries(user)
// console.log(a);
