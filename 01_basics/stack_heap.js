// stack(primitive)  heap(refrence)

let name = "shrivansh"
let username = name
username = "aadi"

console.log(name);
console.log(username);

// in stack primitive data types are used and changes made are done in the copy 



let userone = {
    email : "xyz@gmail.com",
    upi : "xyz@sbi",
}

let usertwo = userone

usertwo.email = "abc@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

// in heap refrence data types are used and changes are done in the refrence part  