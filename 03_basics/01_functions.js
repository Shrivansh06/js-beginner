function first (){
    console.log("S");
    console.log("h");
    console.log("r");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    
}

// first() //calling of fucntion...

// function add (n1,n2){   // here n1 and n2 are called parameters...
//     console.log(n1 + n2);
// }

function add (n1,n2){   // here n1 and n2 are called parameters...
    // let result = n1 + n2
    // return result  // after return no argument will work

    return n1+n2  // for shortening of code...  
}

const result = add(5,6)
// console.log("Result :", result);


// add(1,2)      // here 1 and 2 are called arguments....
// add(1,"3")
// add(1, "a")
// there is a issue js can't determine the data type itself ...


function newLogIn (username){
    if (username === undefined){
        // console.log("please enter a valid username");
        
    }
    return `${username}!! just logged in...`
}
// console.log(newLogIn());

// newLogIn () // it will not give any output as return don't print any value 
const entry = newLogIn()
// console.log(entry);




function calculatedcartprice (val1, val2, ...num1){  // ... is used as rest operator which collects all the input values and put it into an array
    return num1
}
// console.log(calculatedcartprice(2,4,5,6));


// calling an object in a function...
const user = {
    username : "aadi",
    age : 18
}

function callObject (anotherobject){
    // console.log(`Username is ${anotherobject.username} and age is ${anotherobject.age}`);
    
}
callObject(user)


// Calling any array in a function..
const myarr =[200,300,400,500]

function newfunc(getarr) {
    return getarr[2]
    
}

// console.log(newfunc(myarr));


