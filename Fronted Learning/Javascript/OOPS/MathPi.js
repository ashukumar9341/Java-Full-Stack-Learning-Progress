const descriptor  = Object.getOwnPropertyDescriptor(Math,"PI")   //object ke bare me hidden hiddeninfo 
//console.log(descriptor);

// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI); // we can't change value after overwriting it

//const myNewObj = Object.create(null)
const chai = {
    name:"ginger chai",
    price:"250",
    isAvailable: true,

    orderChai:function(){
        console.log("chai nhi bna");
        
    }
}
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable: false,
  enumerable: false,
  configurable: true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
         console.log(`${key},${value}`);
    }
   
                     
}