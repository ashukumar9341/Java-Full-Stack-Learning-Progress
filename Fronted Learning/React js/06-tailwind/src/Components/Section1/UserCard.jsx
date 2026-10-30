import React from 'react'

const UserCard = (props) => {
    console.log(props.img);
    
  return (
    <div
      className='h-full w-[30%] rounded-3xl border-2 border-b-black bg-cover bg-center '
      style={{ backgroundImage: props.img ? `url(${props.img})` : undefined }}
    >

     <div className='pt-30 text-white' >
   
         <div className='text-base font-medium'>Prime Customer</div>
     <div>
        <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
        <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
     </div>
        <button className='bg-blue-300 rounded-full px-2 py-1 mx-2 my-1'>Satisfied</button>
     </div>
      
    </div>
  )
}

export default UserCard
