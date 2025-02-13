let a = 300  //value declared outside the scope braces are called global scope

if(true){
    let a = 10  // value declared inside scope is called block scope which don't relate with outer values
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);


function one (){
    const username = "aadi"

    function two(){
        const website = "youtube"
        // console.log(username);  //for two global environment is one hence it can access it's elements
        
    }
    // console.log(website);  //one can't access two's elements hence it will give an error
    two()
}
one()


if (true){
    const naam = "aadi"
    if (naam=== "aadi"){
        const website = "youtube"
        // console.log(naam + website);
        
    }
    // console.log(website);
    
}
// console.log(naam);



//+++++++++++++++++ INTERESTING +++++++++++++ 

console.log(addone(5)); //we can access a function from where ever we want to...

function addone(num){
    return num + 1
}


// console.log(addtwo(5));  // here the function is declared in other way as an expression hence can't be accessed before declaration...
const addtwo = function(num){
    return num+2
}

console.log(addtwo(5));
