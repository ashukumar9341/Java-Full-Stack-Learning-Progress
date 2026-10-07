/*  stack (primitive) :- 
    stack me jo bhi variable declear kiya hai to uska copy milta hai
*/

/*heap (non-primitive) :-
heap me jo bhi variable declear kiya hai to uska refrance milta hai
*/ 

//example
let name = "Ashu"
let anotherName = name
anotherName = "Kishan"

console.log(name);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "ashu@gmail.com"

console.log(userOne);
console.log(userTwo);


