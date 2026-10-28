import React from 'react'
import card from './Components/card'
import Navbar from './Components/Navbar'
const App = () => {
  const user = "Afraj"
  const age = 22
  return (
    <div>
     <h1>Hello guys i am {user}</h1>
     <h2>i am {age} years old</h2>
     
      <Navbar />
      <Navbar />
      <Navbar />
      {/* {card()}
      {card()}
      {card()} */}
      {card()}
    </div>
  )
}

export default App


