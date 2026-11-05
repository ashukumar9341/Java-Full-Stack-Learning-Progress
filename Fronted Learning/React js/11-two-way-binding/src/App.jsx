import { useState } from "react"

const App = () => {

  const [title,setTitle] = useState('Ashu')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('form submitted by ',title);
    setTitle('')
  }
  return (
    <div>
      Two way binding
      <form onSubmit= {(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder='Enter Your Name' 
        value={title}
        onChange={(e)=>{
         setTitle(e.target.value)
          
        }} />
       <button >Submit</button>
      </form>
    </div>
  )
}

export default App