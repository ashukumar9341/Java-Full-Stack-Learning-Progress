import React from 'react'
import Nav2 from './Nav2'
const Navbar = (props) => {
    console.log(props.children);
    
  return (
    <div className='nav'>
        <h2>Ashu</h2>
        {props.children[0]}
        {props.children[1]}
      <Nav2 theme= {props.theme}/>
    </div>
  )
}

export default Navbar
