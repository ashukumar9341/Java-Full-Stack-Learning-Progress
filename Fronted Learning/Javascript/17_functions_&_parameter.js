

//function defination
function sayMyName(){
console.log("A");
console.log("S");
console.log("H");
console.log("U");
}


//sayMyName(refrance of function)  () :- ye execute hai
//sayMyName()

function addTwoNumbers(number1,number2){
   // console.log(number1 + number2);
//    let result = number1 + number2
//    return result
return number1 + number2
}

const res = addTwoNumbers(2,3)
//console.log("result: ",res);

// addTwoNumbers(2,"3")
// addTwoNumbers(2,null)


function loginUserMessage(userName){
    if(userName === undefined){
        console.log("please enter username ");
        return
        
    }
    return `${userName} justLoggedIn`
}

console.log(loginUserMessage("Ashu"));
console.log(loginUserMessage());

