//if
const isUserLoggedIn = true
if(isUserLoggedIn){

}
 
// <, >, <=, >=, ==(type equal not check), !=,===(ye type bhi check karata h ex:- 2 === "2"), !==
if(2 != "2"){ 
    //Loose inequality(!=)
    /*!= comparison karte waqt zaroorat padne par type conversion karta hai.
     2 → Number
     "2" → String
     Comparison ke waqt "2" convert hokar 2 ban jaata hai.
    2 != 2 → false
    Isliye if ke andar ka code execute nahi hoga.
    */ 
    console.log("hiii");
    
}
if(2 !== "2"){
    //strict inequality(!==) 
    /*!== value ke saath-saath type bhi compare karta hai.
    2 → Number
    "2" → String
    Dono ke types alag hain, isliye 2 !== "2" → true
    Isliye if ke andar ka code execute ho jaayega.
    */ 
    console.log("hello");
    
}

//if else
//  const temp = 40
// if(temp === 40){
//     console.log("temp is 40");
    
// } else{
//     console.log("temp is greater than 40");
    
// } 

// const score =  200

// if(score > 100){
//     const power = "good"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);



//short hand notation
 //const balance = 1000
// if(balance > 500) console.log("test1"),console.log("test2");
// ;

// *************nested if else***************
    // if(balance < 500){
    //     console.log("less than");
        
    // }else if(balance < 750){
    // console.log("less than 750");
    // }else if(balance < 950){
    // console.log("less than 950");
    // }else{
    //     console.log(balance);
        
    // }

//    const userLoggedIn = true
//    const debitCard = true
//    const loggedInFromGoogle = false
//    const loggedInFromGmail = true

//    if(userLoggedIn && debitCard){
//     console.log("Allow to buy courses");
//    } 
//    if(loggedInFromGmail || loggedInFromGoogle){
//     console.log("allow access");
    
//    }



// *********** switch ***********
//  const month = 3
//  switch (month) {
//     case 1:
//         console.log("January");
//         break;
 
//     case 2:
//         console.log("Febuary");
//         break;
//         case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     default:
//         break;
//  }

// *************** thruthy-falsi **********
// const userEmail = "ashu@gmail.com"

// if(userEmail){
//     console.log("got user email"); // yaha maan liya gya hai string true value h
// }else{
//     console.log("don't have user gmail");
// }


// const userEmail2 = ""

// if(userEmail2){
//     console.log("got user email2"); // yaha maan liya gya hai string true value h
// }else{
//     console.log("don't have user gmail2");
// }


// const userEmail3 = []

// if(userEmail3){
//     console.log("got user email3"); // yaha maan liya gya hai string true value h
// }else{
//     console.log("don't have user gmail3");
// }


/*falsy values
false,0,-0, BigInt, "", null, undefined , nan
*/

/*truthy values
"0", 'false' ," , " false",[],{},function(){}
*/
//array check karna hai - empty hai ya nhi
//  if(userEmail.length === 0){
//     console.log("Array is empty");
    
//  }

 //object karana hai - empty hai ya nhi
 //const emptyObj = {}
 //if(Object.keys(emptyObj).length === 0){
// Object.keys(emptyObj) ye object ko array me convert kare deta hai
//console.log("object is empty");
// }

//nullish coalescing Operator(??): null undefined

let value1;
//value1 = 5 ?? 10
//value1 = null ?? 10
//value1 = undefined ?? 15
value1 = null ?? 10 ?? 15

console.log(value1);

//terniary operator
//condition ? true : false

const price = 100
price >= 80 ? console.log("more than 80"): console.log("less than 80");
;
