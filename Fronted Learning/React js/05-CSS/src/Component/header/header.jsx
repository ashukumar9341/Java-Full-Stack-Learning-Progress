import React from 'react'
import second from './header.module.css'
const Header = (props) => {
    console.log(props.name);
    
  return (
    <div className= {second.Header}>
      <h1 className={second.ashu}>Ashu</h1>
      <h3> React Learning</h3>
      <button className= {second.button2}>Login</button>
    </div>
  )
}

export default Header
