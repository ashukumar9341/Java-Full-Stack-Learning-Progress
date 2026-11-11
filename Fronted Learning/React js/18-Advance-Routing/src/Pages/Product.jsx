import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-bold' to='/Product/Men'>Mens</Link>
        <Link className='text-xl font-bold' to='/Product/Women'>Women</Link>
        <Link className='text-xl font-bold' to='/Product/Kids'>Kids</Link>
        
      </div>
      

      <Outlet />
    </div>
  )
}

export default Product
