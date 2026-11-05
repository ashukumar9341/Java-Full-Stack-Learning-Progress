import React, { useState } from 'react'

const App = () => {
  const[num,setNum] = useState(10)
  function increseNum(){
    setNum(num+1)
  }
  function decreseNum(){
    setNum(num-1)
  }
  function jumpBy5(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increseNum}>increase</button>
      <button onClick={decreseNum}>decrese</button>
      <button onClick={jumpBy5}>jump by 5</button>
    </div>
  )
}

export default App


