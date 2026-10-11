//const tinderUser  = new Object() //singleton obj
const tinderUser = {} //non-SingleObj
tinderUser.id = "123abc"
tinderUser.name = "Ashu"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

// example of nested object
const regularUser = {
   email: "ashu@gmail.com",
   fullname:{ // yaha full name bhi ek object hai
    userFullName : {  //ye bhi ek object hai
        firstName: "Ashu",
        lastName: "Kumar"
    }
   }

}

console.log(regularUser.email);
console.log(regularUser.fullname.userFullName.firstName);

// Merging of two objects
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2) // ek empty array use({}) for more than one obj 

// merge using spread operator
const obj3 = {...obj1,...obj2}
console.log(obj3);
//console.log(obj2);

//database se value array of objects ke form
const user = [
    {
        id:1,
        email:"Ashuu@gmail.com"
    },
    {

    }
]
//accesing array of obj
user[1].email

//cocept
console.log(Object.keys(tinderUser)); // o/p data array(we can use loop on it)
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // o/p :- array ke andar multiple array

//to prevent program from gatting crash whlie using loop on array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
