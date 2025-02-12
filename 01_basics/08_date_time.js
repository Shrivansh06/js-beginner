// Dates 

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.toString());
// console.log(newdate.toDateString());
// console.log(newdate.toISOString());
// console.log(newdate.toLocaleDateString());

// let mydate = new Date(2020, 12, 25, 42,30)
let mydate = new Date("04-18-2024")

// console.log(mydate.toDateString());

let mytimestamp = Date.now()
// console.log(mytimestamp);      it gives output in milli seconds

// console.log(mytimestamp/1000);    it gives output in seconds but also gives decimal places

// console.log(Math.floor(mytimestamp/1000));    it gives output in seconds without any decimal places present

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

//  it can be customized by using below method...
newDate.toLocaleString('default', {
    weekday: "short" 
})

