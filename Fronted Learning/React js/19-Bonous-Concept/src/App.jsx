import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
   const [theme,setTheme] = useState('light')
   console.log(setTheme);
   
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme = {setTheme} />
      App
    </div>
  )
}

export default App
