//generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random()*16)];
        
    }
    return color;
}
console.log(randomColor());
let intervalId ;
const changeColor =  function(){
     if (!intervalId) {
        intervalId = setInterval(changeBgColor,500)
     }
    
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
    }
}
    function stopped(){
        clearInterval(intervalId)
        intervalId = null // intervalId ka value flush kar diye 
    }
document.querySelector('#start').addEventListener('click',changeColor)
document.querySelector("#stop").addEventListener('click',stopped)