// import React, { useEffect, useState } from 'react'

// const App = () => {

// let [num,SetNum] = useState(0)
// let [num2,setNum2] = useState(20)
//   useEffect(function(){
//     console.log('use effect is running....');
    
//   },[num2])

//   return (
//     <div>
//         <h1>The value of num is: {num}</h1>
//         <h2>The value of num2 is:{num2}</h2>
//       <button onClick={()=>{
//         SetNum(num + 1)
       
//       }}
//       onDoubleClick={()=>{
//          setNum2(num2 + 1)
//       }}
//       >click</button>
      
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  function aChanging(){
    console.log('a change ho gya..');
  }
  function bChanging(){
    console.log('b change ho gya..');
    
  }
  useEffect(function(){
   aChanging()
    
  
    console.log('use effect running..');
    
  },[a])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}>change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}

export default App
