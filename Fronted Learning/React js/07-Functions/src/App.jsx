
import React from 'react'

const App = () => {
  function btnClicked (val){
    console.log("button is clicked");
    console.log("hello",val.value);
    
  }
  function mouseEnter(){
    console.log("mouse entered");
    
  }
  const pageScroll= (elem) => {
    if(elem >0){
      console.log("chusiya sidha scroll kar raha hai");
      
    }else{
      console.log("chusiya ulta scroll kar rahha hai");
      
    }
    
  }
  return (
    <div>
  
      {/* <input onChange = {(elem)=>{
        // console.log('bhai input per click hua hai');
        console.log(elem.target);
        
      }}  type="text" placeholder='EnterName'/>
    </div> */}
  
      {/* <input onChange = {(elem)=>{
        console.log("hi",elem.target.value);
        
        btnClicked(elem.target)
      }}  type="text" placeholder='EnterName'/> */}
    

    
      <div onWheel ={(elem)=>{
          pageScroll(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page1"></div>
        <div className="page1"></div>
      </div>
    </div>
  )
}

export default App

