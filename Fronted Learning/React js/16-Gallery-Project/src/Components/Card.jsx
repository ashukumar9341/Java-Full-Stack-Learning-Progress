import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
      <a href={props.elem.url}>
       <div className='h-40 w-44 overflow-hidden  rounded-xl'>
      <img className='h-full w-full object-fill' src={props.elem.download_url} />
    </div>
    <h2 className='font-bold text-xl'>{props.elem.author}</h2>
     </a>
    </div>
  )
}

export default Card
