//nested scope
// function one(){
//     const username = "Ashu"

//     function two(){
//         const website = "youtube"
//         console.log(username); // inn3er fun outer function ka variable ko access kar paa raha hai (closure) 
        
//     }
//    // console.log(website);
//    two()
// }
// one()


if(true){
    const username = "Ashu"
    if(username === "Ashu"){
        const website = "youtube"
      //  console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

// +++++++++++++++++ Interesting ++++++++++++
console.log(addone(5));

function addone(num){
    return num+1
}
// addone(5)

console.log(addTwo(5)); //ReferenceError: Cannot access 'addTwo' before initialization (hoisting ke karan)

const addTwo = function(num){ //addTwo ek varble ki tarah hai (expression)
    return num + 2
}
