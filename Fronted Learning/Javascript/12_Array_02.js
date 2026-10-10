const favHeros = ["Rithik Roshan","Ram Charan","Allu-Arjun"]
const favFood = ["Chicken","Egg","Motton"]

//favHeros.push(favFood)
//console.log(favHeros[3]); // yaha favFood array ko favHero as a element treat kar raha hai

// const allFav = favHeros.concat(favFood)
// console.log(allFav);

// Important :- concat() origional array ko mutate nhi karta wo ek new array return karta hai jabki push origional array ko hi mutate karta hai

//spread operator
// const all_new_heros = [...favHeros,...favFood]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,5,2]]]

const real_another_array = another_array.flat  (Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

//sometimes data comes into string,node etc..
console.log(Array.isArray("Ashu"));
console.log(Array.from("Ashu")); // kuch bhi data do array me convert kar dega
console.log(Array.from({name:"Ashu"})); // confuse key ko array me convert kru ya value ko

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements.
