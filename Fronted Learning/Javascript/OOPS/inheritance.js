class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = password
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const user = new  Teacher("Ashu","ashu@123","7584")
user.addCourse()

const user2 = new User("abhi")
// user2.addCourse()
// user2.logMe()
// user.logMe()
console.log(user instanceof Teacher);
console.log(user instanceof User);

