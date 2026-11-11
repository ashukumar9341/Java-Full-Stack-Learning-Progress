import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
      <div className='nav'>
        <div className='Photo'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0INzRAdfDexLX_7UwN1CeslQyQzVZBIzsNWZTUwt8HNOpn5SOjC0rqlvM&s=10" alt="" />
        </div>
        <div className='A'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </div>
      </div>
    
  )
}

export default Navbar
