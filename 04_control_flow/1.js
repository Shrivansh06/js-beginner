const score = 200
if (score > 100 ) {
    let power = "play"
    // console.log("executed");
    // console.log(`power of the player : ${power}`);
    
}
// console.log(`power of the player  ${power}`);



//  IMPLICIT SCOPE
// if (score > 100) console.log("executed");



const balance = 900
if (balance <1000) {
    // console.log("BALANCE : less than 1000");
} 

else if (balance < 750) {
    // console.log("BALANCE : less than 750");
}

else if(balance<500){
    // console.log("BALANCE : less than 500");
}
else {
    // console.log("INSUFFICIENT BALANCE");
}



const userloggedin = true 
const debitcard = true 
const loginfromgoogle = false
const loginfromemail = true
if (userloggedin && debitcard){ //USE && TO CHECK MULTIPLE CONDITIONS AT ONCE
    console.log("ALLOW TO BUY COURSE ");
    
}

if (loginfromemail || loginfromgoogle) {  // USE || TO CHECK WETHER ANY OF THE CONDITION IS TRUE
    console.log("USER LOGGED IN"); 
    
}