// Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["amitab-bachhan", "kishore kumar"]

const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr[0]);
// Arrays methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);


//kuch questions puch sakte hai array methods ke through:- true ya false
//   console.log(myArr.includes(9));
//  console.log(myArr.indexOf(5));
 
//  const newArr = myArr.join()
//  console.log(typeof myArr);
//  console.log(typeof newArr);

//slice , splice
 
 console.log("A ", myArr); //yaha origional hai
 
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);  // b jha slice use kiya

const myn2 = myArr.splice(1,3)
console.log("c ",myArr);  //c jha splice use kiye 
console.log(myn2);



 
 