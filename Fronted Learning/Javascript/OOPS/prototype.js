// let myName = "Ashu          "
// console.log(myName.length);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
let heroPower2 = {
    thor:"1",
    spiderman: "2",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
//yaha maine parent class(top wala) me hi function define kar diya
Object.prototype.Ashu = function (){
    console.log(`Ashu is present in all object`);
    
}
//Array object ke andar function define karte hai
Array.prototype.Abhinav = function(){
    console.log(`Abhinav is also present in all object`);
    
}
// heroPower.Ashu()
// myHeros.Ashu()
// myHeros.Abhinav()
// heroPower.Abhinav()
//conclusion :- top level pe fun hai to arr. se acces ho but array obj m=ke andar bna hai sare obj acces nhi kar sakte 
heroPower2.Ashu()


//inheritance 

const user = {
    name: "Afraj",
    email:"raj@123"

}
 const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvaiable: false
}

const TaSupport = {
    makeAssisgnment:'js assignment',                 
    fullTime: true,
    __proto__: TeachingSupport 
}

Teacher.__proto__ = user //yaha teacher user ki property acces kar sakta hai

//modern
Object.setPrototypeOf(TaSupport,Teacher) // yaha teaching support teacher ki property acces karega