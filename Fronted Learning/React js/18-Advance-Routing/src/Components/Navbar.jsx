import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
     <div className='flex justify-between  py-5  border-2 border-[rgb(33,31,31)] pt-5 rounded-2xl pt-5 px-5 mt-5 mx-15 '>
        
        <div className='text-2xl px-10'>Ashu</div>
        <div className='flex justify-between  gap-10 text-amber-50 px-7'>
        <Link to='/' >Home</Link>
        <Link to='/About' >About</Link>
        <Link to='/Contact' >Contact</Link>
        <Link to='/Product' >Product</Link>
        <Link to='/Courses' >Courses</Link>
      </div>
      
    </div>
     
  )
}

export default Navbar
