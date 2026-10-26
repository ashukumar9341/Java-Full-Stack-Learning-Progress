//object literals
const user = {
    username: "Ashu",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        // console.log("got user detail from database");
        //console.log(`username: ${this.username}`);
        console.log(this); // ye current context deta hai
        
    }
}
console.log(user.loginCount);
console.log(user.getUserDetails());
console.log(this); // {} - malb abhi global context me kuch nhi hai


// const promiseOne = new Promise()
// const date =  new Date() 
// ya new constructor fun hai - allow karta hai ek hi obj literal se multiple instances bna sakte hai
//constructor fun uses
function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username} , how are you`);
        
    }

   // return this
}
//without new (normal fun)  // userOne ka value pe userTwo overwrite
// const userOne =  User("Ashu Kumar",8,true)
// const userTwo = User("Abhinav",11,false)
// console.log(userOne); 

const userOne =  new User("Ashu Kumar",8,true)
const userTwo = new User("Abhinav",11,false)
console.log(userOne); 
console.log(userTwo);


