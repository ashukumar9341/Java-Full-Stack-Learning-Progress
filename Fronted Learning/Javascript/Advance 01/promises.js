// //promise creation
// const promisesOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls , cryptography , network call
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// //promise consumption :- promise complete hone ke baad result ke saath kaam karna
// promisesOne.then(function(){
//     console.log("promise consumed");
// })

// // new Promise(function(resolve,reject){
// //      setTimeout(function(){
// //         console.log('Async task 2');
// //         resolve()
// // },1000).then(function(){
// //     console.log("Async 2 resolve");
    
// // })

// const promiseThree =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Ashu",email : "ashu789@gmail.com"});// resolve me hum data bhi pass kar sakte hai mostly objects pass kiya jata hai
//     },1000)
// })
// promiseThree.then(function(user){
//     //ab hume pta hai ki resolve then se connected ho hai but abhi resolve me object hai to obj se data lunga kaise
//     //to hum expect kar sakte hai user(resolve ke andar ke obj ko user bol rahe hai) me kuch data ayega kyuki connected hai
//     console.log(user);
// })

// const promiseFour =  new Promise(function(resolve,reject){
    
//     setTimeout(function(){
//          let error =  true
//     if(!error){
//         resolve({username:"Ashu",Password:"123"})
//     }else{
//         reject('ERROR: Something went wrong')
//     }
//     },1000)
   
// })
// promiseFour.then( (user)=>{
//     console.log(user);
//     return user.username //ex:- returning username from databse
// }).then((UserName)=>{ //promise consume chaining :- matlb first then ka result ya aayega
//     console.log(UserName);
    
// }).catch(function(error){
//     console.log(error);
// }).finally( ()=>{
//     console.log("The promise either resolved or rejected");
    
// })
// // finally hamesha execute hota hai 
// //use:- kaam sucessful ho ya fail ho dono situation me

// const promiseFive = new  Promise(function(resolve,reject){
//          setTimeout(function(){
//          let error =  true
//     if(!error){
//         resolve({username:"javascript",Password:"123"})
//     }else{
//         reject('ERROR: js went wrong')
//     }
//     },1000)
// })
// async function consumePromiseFive(params) {
//    try {
//     const response = await promiseFive
//    console.log(response);
//    } catch (error) {
//         console.log(error);
        
//    }
   
// }

// consumePromiseFive()

// async function getAllUser() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data);
//    } catch (error) {
//     console.log("E:",error);
    
//    }
  
// }

// getAllUser()

//directly .then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((responseChain)=>{
    console.log(responseChain);
    
})
.catch((error) => {console.log(error);
})
/*1. Pehle fetch() ko samajh
const response = await fetch(URL);


fetch() server ko request bhejta hai. Server ka response aane mein time lagta hai, isliye fetch() ek Promise return karta hai.

await us Promise ke fulfill hone ka wait karta hai. Uske baad response mein HTTP Response object aata hai.

Lekin bhai, abhi users ka actual data nikaala nahi hai! 😄
2. Ab response.json() kyun?
const data = await response.json();


Server se jo response aaya hai, uski body ko abhi read aur parse karna hai.

Yahan do important baatein hain:
- response.json() response ki body ko read karke JSON ko JavaScript value mein convert karta hai.
- response.json() khud bhi ek Promise return karta hai, kyunki body ko read karne mein time lag sakta hai.
Isliye yahan bhi await chahiye.
*/ 