// IIFE - Imediately invoked function expression 
//aisa fun jo ki immediately execute ho jaye
//use karte hai jb global scope se hamre function pollute kar rahe hote hai

(
    function chai (){
    console.log(`DB CONNECTION`);
    
}
)();
 //chai() not a good practice

 //IIFE IN TERMS OF ARROW FUNCTION
 (() => {
    console.log(`DB CONNECTION TWO`);
    
 })();  //error

  ( function chai2() {
    //named iife
    console.log(`DB CONNECTION three`);
    
 })(); //fir se error(error isliye kyuki maine first iife ko abhi tak stop(;) nhi kiye)

   ( (name) => { 
    console.log(`DB CONNECTION through arrow fun ${name}`);
    
 })("Ashu") 


 /* ********** uses **********
 1. Situation: Website load hote hi database connection initialize karna
(Maan lo tum ek application bana rahe ho aur chahte ho ki initialization code turant execute ho.)

*/