import React from 'react'
import {useContext} from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
const Button = () => {

   const [theme,setTheme] = useContext(ThemeDataContext)

    function changeTheme(){
        setTheme('dark')
        
    }
  return (
    <div>
      <button
      onClick={()=>{
        changeTheme()
      }}
      >Change Theme{theme}</button>
    </div>
  )
}

export default Button
