class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh` //store 123 kiye the but user ko 123hitesh mila
    }
    set password(value){
        this._password = value
    }
}

const hitesh = new User("ashu123#.com","123")
console.log(hitesh.password);
