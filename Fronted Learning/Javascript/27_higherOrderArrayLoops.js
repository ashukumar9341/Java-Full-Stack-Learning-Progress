//************* for of  **************
//["","",""] strings inside arrays
//[{},{},{}] objects inside arrays

//for of loop on array
// const arr = [1,2,3,4,5,6]
// for (const element of arr) {  // yaha object kan matlb kis pe loop lagana hai
//     console.log(element);  
// }

//for of loop on strings
// const greetings = "hello world"
// for (const element of greetings) {
//     console.log(`each character is ${element}`);   
// }

// ****************** Maps ***********
// no duplicate + order maintained
// const map = new Map()
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// console.log(map.get("a"));
// map.set("a",97)
// console.log(map.get("a"));
// console.log(map.size);
// map.delete("b")
// console.log(map.size);

const map1 = new Map()
map1.set('IN', "India")
map1.set('USA',"united states of america")
map1.set('Fr',"france")
map1.set('IN', "India")
//console.log(map1);

for (const [key,value] of map1) {
   // console.log(key,':-', value);
}

// map on array through for-of 
const development = ["fronted","backend","database","cloud"]
for (const element of development) {
    //console.log(element);
    
}
//for of on objejct
// const myObject = {
//     'game1': 'cricket',
//     'game2': 'chess',
//     'game3': 'badminton'
// }
// for (const [key, value] of myObject) {
//     console.log(key,':-', value);
// }
//note :- map ke through object ko iterate nhi kar sakte

//************* for in loop ****************** 

const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift for apple"

}
/* if we only want key */
// for (const key in myObject) {
//     console.log(key); 
// }

//key-value of obj through for-in
// for (const key in myObject) {
//     console.log(`${key} fileName is ${myObject[key]}`);
// }

//key-value of Array through for-in
const programming = ["java","c++","python"]
for (const key in programming) {
    //console.log(`${key}th index and their values ${programming[key]}`);  // yaha sirf key print kare to sirf idx print hoga jab ki for-of me value hota hai
}

//for-in on map
const map3 = new Map()
map3.set('1', "Ashu")
map3.set('2',"afraj")
map3.set('3',"abhinav")
map3.set('4',"ankit")

for (const key in map3) {
   console.log(key); //nothing print because map is not iterable
}

// ***************** for-each loop *******************
/*note :- 
call back function :-
    Callback ka matlab hai ek function jo doosre function ko argument ke roop mein diya jaata hai, taaki woh use call kar sake.
*/ 

// easy example on callback function
function greet(name,callback){
    console.log("hello", name);
    callback()
}
// function bye(){
//     console.log("good bye"); 
// }
greet("Ashu",()=>{console.log("good boy"); // yaha argument me ek function pass ho raha hai
})


//using callbac function in for-each function(method)
 const coding = ["js","java","cpp","ruby"]
// coding.forEach( function (item){
//     console.log(item);
    
// })



//arrow fun ke term me 
// coding.forEach((val)=>{
//  console.log(val);
 
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})


// for each on array of objects
const mycoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "c++",
        languageFileName: "cpp"
    }
]
mycoding.forEach((objectsAccess)=>{
   // console.log(objectsAccess.languageName + '->' + objectsAccess.languageFileName);
    
})

