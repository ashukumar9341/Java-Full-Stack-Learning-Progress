import React from 'react'

const Navbar = (props) => {
   
  return (
    <div>
        <p>theme {props.theme} setTheme{props.setTheme}</p>
      <button onClick={()=>{
        props.setTheme('dark')
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
