const score = 400

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));


/*toFixed(2) ;-	. ke baad 2 digits
    toPrecision(4) :- poore number ke total 4 digits
*/ 
const otherNumber = 123.8266

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000000
//console.log(hundreds.toLocaleString('en-IN'));



//***********Maths*****************
console.log(Math);
console.log(Math.abs(-4));  // -ve ko +ve bna deta hai
console.log(Math.round(5.425))
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
const number = Math.random() // 0-1 beech aayega
//console.log(number.toFixed(2));
console.log(Math.floor((number*10))+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1)) + min);

console.log((Math.min(8,5,6,9,7,2,3,4,8,5)));




