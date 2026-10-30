import React from 'react'
import Page1Content from './Page1Content'
import Page2Content from './Page2Content'
const Center = () => {
  return (
    <div className='flex gap-8 w-[100%]'>
       <div className='w-[55%]'> <Page1Content /></div>
        <div className='w-[60%] pb-5 mx-5'>
            <Page2Content  />
        </div>
      
       
    </div>
  )
}

export default Center
