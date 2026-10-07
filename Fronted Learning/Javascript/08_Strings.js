const name = "Ashu"
const repoCount = 50

// console.log(name + repoCount);

/* modernly we use back ticks '' 
benefit of back tics :- String interpolation

String interpolation ka simple matlab hai:-
String ke andar directly variables ki value insert kar dena, bina + se strings ko jodne ke.
*/
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);  // modern way
console.log("Hello my name is " + name + " and my repo count is " + repoCount); // with interpolation(old way)

// one more way to declear string
const gameName = new String('Ashu-singh-rajput')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) //here we can give -ve value also
console.log(anotherString);

const newStringOne = "    Ashu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashu.com/ashu%20singh"

console.log(url.replace('%20','-'));
console.log(url.includes('Ashu'));

console.log(gameName.split('-'));



