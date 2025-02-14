//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS....
// used to avoid the pollution from global scope 
// (function definition)(calling of function)

(function chai(){    //named IIFE
    console.log(`DB CONNECTED`);
    
})();  // IIFE must be ended using a ";"...

( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
}) ("aadi");