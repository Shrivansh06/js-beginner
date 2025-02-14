const user = {
    username : "aadi",
    price : 999,

    welcomemessage : function (){
        // console.log(`${this.username} welcome to the site...`);     
        // console.log(this);  //talks about current context...
         
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()



// function chai(){
//     let name = "aadi"
//     console.log(this.name);  // this can only access things in an object function m nhi kr skta...
// }
// chai()

const chai = () => {  // +++++++++++++ ARROW FUNCTION ++++++++++++++ \\
    let name = "aadi"
    console.log(this);
}
// chai ()


                // basic way to write an arrow function
// const addTwo = (num1,num2) => {
//     return (num1 + num2)
// }

//  IMPLICIT WAY : () is required to return the value 
// const addTwo = (num1, num2) => num1 + num2  // a single line function without {}
const addTwo = (num1, num2) =>( num1 + num2 ) 
const obj = () => ({username: "aadi"})
console.log(addTwo(3,4));
console.log(obj());

