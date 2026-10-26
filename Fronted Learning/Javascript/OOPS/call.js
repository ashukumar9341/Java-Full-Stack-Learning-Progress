function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser (username,email,password){
    setUsername.call(this,username) //.call refrance hold karke rakhta hai, ab set userUsername yahi this use kareaga
    this.email = email
    this.password = password
}

const user = new createUser("Ashu","ashu@123","123")
console.log(user);
