import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import Card from './Components/Card'
const App = () => {

  const [userData,setUserData] = useState([])
  const [index,setIndex] = useState(1)
  async function getData(){
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}`)
    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(function (){
      getData()
  },[index])

  let printUserData = <h3 className='text-white-400 text-2xl absolute top-1/2 lef-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>
  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){
    return <div key={idx} >
     <Card elem= {elem} />
    </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen text-white p-5'>
      {/* <button 
      onClick={getData}
      className='bg-green-700 text-white px-5 py-2 rounded m-4 active:scale-95'
      >get data
      </button> */}
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center p-7 '>
       {/* <h1>{index}</h1> */}
        <button
        style={{opacity:index == 1? 0.5:1} }
         className='bg-gray-500 px-9 py-4 border-amber-50 rounded-xl mx-2 cursor-pointer active:scale-95'
          onClick={()=>{
            console.log('prev button clicked');
            if(index >1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          >Prev
          </button>
          <h4> page {index}</h4>
        <button 
        className='bg-green-400 px-10 py-4 m-2 rounded-xl cursor-pointer active:scale-95'
        onClick={()=>{
          console.log('next button clicked');
          setUserData([])
          setIndex(index+1)
        }}
        >next
        </button>
      </div>
    </div>
  )
}

export default App
