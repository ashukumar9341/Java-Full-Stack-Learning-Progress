//Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.getFullYear());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2026,0,23,5,3)  // javascript me months 0 se start hota hai
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2026-01-14")
//console.log(myCreatedDate.toLocaleString());


//quizes , poles ,jb fastest answers ko winner banane hai
let myTimeStamp = Date.now()
//console.log(myTimeStamp); // 1st jan 1970 se abhi tak ka milli sec - refrance
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()));
 
let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
    
})