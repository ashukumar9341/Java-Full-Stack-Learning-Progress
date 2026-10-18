const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNum = myNumbers.map( (num) => num +10) // map automatically return karta hai(it is also kie filter scope open hai to return kro )
//console.log(newNum);

// ************ chaining ******************
const newNums =  myNumbers.map( (num) => num * 10 ) .map( (num)=> num +1).filter( (num) => num >=40 ) // matlb pehle first wla map value calculate karega fir wo num ko nhi dega wo second  map ko value dega fir second map value calulate karega then newNum me store karega 
//console.log(newNums);
// map()	Har element ko transform karna	2 → 20
// filter()	Condition ke basis par element select karna	31 reject, 41 select


//  *************** reduce ********************
//accumulator ko pta hi nhi ki m start kha se kru
const AshuNum = [1,2,3,4,5,6]
// const ashuRes = AshuNum.reduce( (acc,currVal)=>{
//     console.log(`acc: ${acc} and currval: ${currVal} `);
    
//     return acc+ currVal
// },0)
//console.log(ashuRes);
/* working of reduce
acc: 0 and currval: 1 
acc: 1 and currval: 2 
acc: 3 and currval: 3 
acc: 6 and currval: 4 
acc: 10 and currval: 5 
acc: 15 and currval: 6 
*/ 

//reduce using arrow function
const ashuRes = AshuNum.reduce( (acc,curr)=>acc + curr,0)

console.log(ashuRes);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "java course",
        price: 2199
    },
    {
        itemName: "html course",
        price: 9
    },
    {
        itemName: "css course",
        price: 99
    }
]

const priceToPay = shoppingCart.reduce( (acc ,item)=>acc+ item.price,0)

console.log(priceToPay);
