const user = {
    username: "Ashu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);  // iss scope ke andar ke variable access karne ke liye maine this(current context ko refer karta h)keyword use kiya
        console.log(this);

    }
}
//user.welcomeMessage()
//user.username = "Afraj"//contex(jiske bare me baat kar) change kar
//user.welcomeMessage()
//console.log(this); 
/*
 {} - kyuki hum node enviroment ke andar isliye this empty object ko refer kar raha h (global ke andar context hi nhi h) 

 lekin jo browser ke andar jo global object h wo windows object hai
*/

//   function chai(){
//     let username = "Ashu"
//     console.log(this.username); // o/p -> undefined(kyuki ye context h object ke andar hi kaam karta hai function ke andar nhi)    
//   }
// chai()




// declearing a function through arrow function

// const chai = function(){
//     let username = "Ashu"
//     console.log(this.username);

// }



//arrow function syntax
const chai = () => {
    let username = "Ashu"
    console.log(this);
}
chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// Implicit return(of arrow fun)
// const addTwo = (num1,num2) =>  num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
/* note
 if we are using curely braces then we have to use return keyword while if we are using paranthesis then no need write return  keyword */
const addTwo = (num1, num2) => ({ username: "Ashu" })
console.log(addTwo(7, 9));

/* explecit return : jb return keyword use karna hi pre
implicit return : jb return keyword use nhi karna pre 
