import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme,setTheme] = useState('light')
  return (
    <div className='parent'>
      <Navbar theme={theme}>
        <h2>This is navbar</h2>
        <h3>navbar2</h3>
      </Navbar>
    </div>
  )
}

export default App
