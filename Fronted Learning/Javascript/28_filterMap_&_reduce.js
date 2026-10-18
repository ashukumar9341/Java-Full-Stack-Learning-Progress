// const coding = ["java","javascript","python","cpp"]

// const values = coding.forEach( (item)=>{
//   //  console.log(item);
//     return item
    
// })
//console.log(values); //problem :- ye kuch return nhi karta matlab kisi specific cheezo ko delete/update nhi kar sakte hai


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNUMS = myNums.filter( (num)=> num >4) // filter bhi call back hi leta hai (benefit ;- ye return karta hai)
// const newNUMS2 = myNums.filter( (num)=> {num >4})

// console.log(newNUMS);
// console.log(newNUMS2);
/*(num) => num > 4	Implicit return — automatically
(num) => { return num > 4; }	Explicit return — return likhna zaroori(scope lga diye islye)
(num) => { num > 4; }	undefined return hoga
*/ 

// const newNums = []
// myNums.forEach( (num) => {
//     if(num >4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const  books = [
    {title:'Book 1', genre:'Fiction',publish:1981,edition:1986},
    {title:'Book 2', genre:'science',publish:1982,edition:1990},
    {title:'Book 3', genre:'Fiction',publish:1986,edition:1995},
    {title:'Book 4', genre:'history',publish:1988,edition:2010},
    {title:'Book 5', genre:'Fiction',publish:1989,edition:2015},
    {title:'Book 6', genre:'science',publish:1990,edition:2026},
    {title:'Book 7', genre:'history',publish:1990,edition:2027}
    
]

const FAvGenre = books.filter( (bk)=> bk.genre == 'history')
//agar bk.genre history hai to return karega 
//console.log(FAvFiction);

const LatestEdition = books.filter(  (bk)=> bk.edition > 2000)
//console.log(LatestEdition);

const LatestEditionAndFAvGenre = books.filter( (bk)=>bk.genre == 'Fiction' && bk.edition >= 2015)
console.log(LatestEditionAndFAvGenre);
