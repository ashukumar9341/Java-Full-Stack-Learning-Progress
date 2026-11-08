// import axios, { Axios } from 'axios'
import axios from 'axios';
import { useState } from 'react';
const App = () => {

  // async function getData(){
  //  const response =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //  console.log(response);
  //   console.log('data aa gya');
  // }
  //  const getData = async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(await response.json());
    
  //  }

  const [data,setData] = useState([])

  const getData = async ()=>{
   const response = await axios.get('https://picsum.photos/v2/list')
   setData(response.data)
   console.log(response.data);
   
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3><img src={elem.url} /></h3>
        })}
      </div>
    </div>
  )
}

export default App
