 class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username:${this.username}`);
        
    }
    static createId(){
        return `123`
    }
 }

 const Ashu  = new User("ashu")
console.log( Ashu.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Abhi = new Teacher("abhi","abhi123@")
console.log(Abhi.logMe());
console.log(Abhi.createId());
