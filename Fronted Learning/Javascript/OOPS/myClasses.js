// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const user = new User("Ashu","email@123","112")
// console.log(user.encryptPassword());


// behind the scene

function User(username,email,password){
      this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const user2 = new User("Abhinav","abhi@123","791")
console.log(user2);
