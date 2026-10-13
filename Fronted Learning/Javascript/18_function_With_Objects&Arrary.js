//this is used when we don't know how much parameter will be present(ex:- shopping card)
 

function calculateCardPrice (winner1,winner2,...num1 ){
     console.log(winner1); //yaha first aur second value winer 1&2 me jayega aur rest array me
    console.log(winner2);

return num1
 }
 console.log(calculateCardPrice(200,300,400,500,600,700,800,900)); // agar without rest(rest and spread operator has same syntax but diff uses) operator sirf pehla wala hi aayega
 //maan lo first and second purchase karne wala winners h

 
 const user = {
    username : "Ashu",
    employeeId: 2005
 }

 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and employeeId is ${anyObject.employeeId}`);
    
 }

 //handleObject(user)  // yaha object bna kar pass

 handleObject({  //direct object bhi pass kar sakte hai
    username:"abhi",
    employeeId:789
 })

 const myNewArray = [100,400,700,880]
 function returnSecondVal(getArray){
    return getArray[0]
 }
// console.log(returnSecondVal(myNewArray)); // yaha pehle array bna fir pass kiye
 console.log(returnSecondVal([7,8,9,4,56,1,23])
 );
 