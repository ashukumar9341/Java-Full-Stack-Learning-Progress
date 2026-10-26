function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // function obj bhi hai

function createUser(username,score){
    this.username = username
    this.score = score

}
//createUser object ke andar m khud ka custom function bna sakta huu aur uska as a property use kar sakta huu
createUser.prototype.increament =  function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
const user1 = new createUser("ashu",25)
const user2 = new createUser("ashu",26)

user1.printMe()