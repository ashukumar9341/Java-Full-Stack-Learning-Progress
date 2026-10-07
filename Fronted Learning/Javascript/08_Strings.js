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
const gameName = new String('Ashu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);



