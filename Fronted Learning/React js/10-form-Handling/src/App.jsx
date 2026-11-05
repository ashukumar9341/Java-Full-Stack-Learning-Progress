import React from 'react'

const App = () => {

  const submitHandler = (elemReceive)=>{
    elemReceive.preventDefault()
    console.log('form Submitted');
    
  }

  return (
    <div>
      <form onSubmit= {(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder='Enter Your Name'/>
       <button >Submit</button>
      </form>
    </div>
  )
}

export default App

