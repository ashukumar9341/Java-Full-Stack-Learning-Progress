import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {
     const navigate = useNavigate()
  return (
    <div className='flex gap-5 bg-gray-400 rounded-2xl mx-15 px-2 py-3'>
      <button 
      onClick={()=>{
       navigate('/')
      }}
      className='h-10 border-2 bg-fuchsia-300 p-2 rounded-2xl flex items-center cursor-pointer active:scale-115 '>Return to Home Page</button>
      <button 
      onClick={()=>{
       navigate(-1)
      }}
      className='h-10 border-2 bg-fuchsia-300 p-2 rounded-2xl flex items-center  cursor-pointer active:scale-115 px-10'>Back</button>
      <button 
      onClick={()=>{
       navigate(+1)
      }}
      className='h-10 border-2 bg-fuchsia-300 p-2 rounded-2xl flex items-center  cursor-pointer active:scale-115 px-10'>next</button>
    </div>
  )
}

export default Navbar2
