const User = {
    _email: 'ashu@', 
    _password:'abc', // private using _
                                    
    get email(){ //get ka kaam memeory se leke aana aur chor ke aane ka 
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
//factory method to create object
const tea = Object.create(User)
console.log(tea.email);
