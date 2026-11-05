import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

   const [title,setTitle] = useState('')
    const[text,setText] = useState('')
    const[task,setTask] = useState([])
    const copyTask = []
  const submitHandler = (e)=>{
    e.preventDefault()
      const copyTask = [...task]
      copyTask.push({title,text})
      // console.log(copyTask);
      
      setTask(copyTask)
      console.log(task);
      
      
      setTitle('')
      setText('')
  }

  const deletes = (idx)=>{
    const copyTask = [...task]
    console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  

  return (
    <div className='h-screen lg:flex bg-black text-white '>
        
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }}

      className=' p-10 flex lg:w-1/2 items-start flex-col '>
      <h1 className='text-3xl font-bold p-5'>Add Notes</h1>
       {/* first input for heading*/}
        <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 py-2 border-2 rounded w-full outline-none font-medium'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
        
         }}
         />
         {/* description input */}
       <textarea
        type="text"
        className='px-5 py-2  h-40 rounded w-full outline-none font-medium'
        placeholder='Write details'
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
        />
        <button 
        className='bg-white text-black px-5 font-medium active:scale-94 w-full outline-none'>
          Add Notes
          </button>
       
        {/* <img className = 'h-52 rotate-y-180' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbXfQpqB0f6eKPLkI5nq5hOZhu6KsJRHwpF_s_4XUPw&s=10" alt="" /> */}
      </form>
      <div className='px-5 overflow-auto lg:w-1/2  gap-5 lg:border-l-2'>
        <h1 className='text-3xl font-bold p-5'>Recent notes</h1>
      
       <div className='flex gap-5 items-start justify-start h-[90%] flex-wrap overflow-auto  '>
         {/* <div className='h-52 w-40  rounded-2xl bg-white' ></div>
        <div className='h-52 w-40 rounded-2xl bg-white' ></div>
        <div className='h-52 w-40 rounded-2xl bg-white' ></div> */}
       {task.map(function(elem,idx){
        return <div key={idx} className='relative h-52 w-40 rounded-2xl bg-cover bg-auto bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] text-black p-4' >
          <h2 onClick={()=>{
            deletes(idx)
          }} className = 'absolute top-5 right-5 bg-red-50  rounded-full'><X strokeWidth={0.5} /></h2>
          <h2 className=' mt-1 leading-tight text-xl font-bold px-4 py-4'>{elem.title}</h2>
          <p className=' leading-tight font-mono text-gray-800 px-3 '>{elem.text}</p>
        </div>
       })}
      
       </div>
      </div> 
    </div>
  )
}

export default App
