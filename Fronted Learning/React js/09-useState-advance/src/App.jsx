import React, { useState } from 'react'

const App = () => {
 const[num,setNum] = useState({user:'Ashu',age:22})

 const btnClick = ()=>{
  // console.log({...num});
  
// const newNum = {...num}
//   newNum.user = 'Kishan'
//   newNum.age = '23'
//   setNum(newNum)

  setNum( num =>({...num,age:50}))
 }
const [n, setN] = useState(0)
 function clickHandle(){
  console.log("Batching = React multiple state updates ko collect karke ek saath process karta hai, jisse unnecessary re-renders kam hote hain.");
  
    // setN(n+1)
    // setN(n+2)
    // setN(n+3)
    // setN(n+4)
    setN((prev)=>{
       return prev+1})
    setN(prev=>prev+1)
    // setN(prev=>prev+1)
    // setN(prev=>prev+1)
    // setN(prev=>prev+1)
    // setN(prev=>prev+1)

 }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClick}>click</button>
      <h1>{n}</h1>
      <button onClick={clickHandle}>Batching Concept</button>
    </div>
  )
}

export default App
