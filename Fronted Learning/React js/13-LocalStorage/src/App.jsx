import React from 'react'

const App = () => {
 
//  const user = {
//   username:'Ashu',
//   age:22,
//   city:'Sitamarhi',
//   state:'Bihar'
//  } 
 
//     console.log(user);
//     localStorage.setItem('user',JSON.stringify(user))
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    console.log(typeof user);
    
  return (
    
    <div>
      App
    </div>
  )
}

export default App
