// javascript learning = objects + event
/*objects can be decleared in two ways:-
1. object literals
2.constructor(singleton banta hai) :- Object.create (Creates an object that has the specified prototype or that has null prototype.)
*/ 

//objects literals

const mysym = Symbol("key1") //ab iss symbol ko object ka as a key use kro
const jsUser = {
   // name:"Ashu", //key-value pair(yaha jo name likkha hai javascript isko bydefault string treat karta hai)
   "full name": "Ashu Kumar", // isko .name se acces nhi hoga
    mysym : "hello", // javascript treat as string
    [mysym] : "hii", //javascript treat as symbol
    age : 18,
    location: "Bihar",
    email: "ashu@google.com",
    lastLoginDays: ["Monday","Saturday"]
}

//accessing objects
// console.log(jsUser.name);
// console.log(jsUser.age);
// console.log(jsUser.email);
// console.log(jsUser.location);
// console.log(jsUser.lastLoginDays);

// console.log(jsUser.email);
// console.log(jsUser["email"]);
//console.log(jsUser.full name);//acess nhi hai isliye [""] use karna hoga
// console.log(jsUser["full name"]);
// console.log( typeof jsUser.mysym); 
// console.log(typeof jsUser[mysym]);

// Reflect.ownKeys(jsUser).forEach(key =>{
//     console.log(key, typeof key);
    
// })
/*1. Pehli baar: mysym: "hello"
mysym: "hello"


Yahan JavaScript mysym ko normal string key maanta hai. Matlab property ka naam "mysym" hai aur value "hello" hai.
2. Doosri baar: [mysym]: "hii"
[mysym]: "hii"


Yahan square brackets ke kaaran JavaScript mysym variable ki value dekhta hai. Us variable mein Symbol("key1") hai, isliye property ki key Symbol ban jaati hai.
Dono keys alag hain!

mysym: "hello"
String key: "mysym"
Value: "hello"


[mysym]: "hii"
Symbol key: Symbol(key1)
Value: "hii"


Isliye tumhare output mein:
mysym string
Symbol(key1) symbol
*/ 



//object value update
jsUser.email = "kishan@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "kishan@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("good morning");
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting); //[Function (anonymous)] :- matlb fun execute nhi hua hai only refrance mila hai
jsUser.greetingTwo = function(){
    console.log(`good morning, ${this.age}`); // jab bhi same obj refrance karna hai to use kro this
}

console.log(jsUser.greetingTwo());






