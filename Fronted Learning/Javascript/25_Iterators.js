//************ for Loop ***********
const Array = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < Array.length; i++) {
    const element = [i];
    if(element == 5) console.log("5 is the best number");
    
    console.log(element);
}

for(let i = 0; i < Array.length; i++) {
    console.log(`outer loop value: ${i}`);
    for(let j = 0; j < Array.length; j++) {
       // console.log(`inner loop value: ${j} and outer loop ${i}`); 
       console.log(i + '*' + j+ '=' + i*j );
       
    }
}

// let myArray = ["Ashu","kishan","Abhinav","afraj"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element); 
// }


//break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("detected 5");
        break
    }
    console.log(`Value of i is ${i}`);
}

