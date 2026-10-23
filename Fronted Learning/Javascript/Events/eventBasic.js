// document.getElementById('Somnath').onclick = function(){
//     alert("Somnath Temple is considered to be the first of the Jyotirlingas in India")
// } // this is not a good practice use event listner(because it gives onclick + propogation functionality)

// const { jsx } = require("react/jsx-runtime")

//attachEvent()
//jQurry - onEvent listener
//imoprtant events :- type,timestamp, defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX, clientY, screenX , screenY
//altKey, ctrlKey,shiftKey,keyCode
// document.getElementById('images').addEventListener('click',function(eventObj){
//     // alert("Somnath Temple is considered to be the first of the Jyotirlingas in India")
//     console.log("click inside the Somnath");
    
// },false)
//event propogation : - eventpubling and eventCapturing 
// document.getElementById('Somnath').addEventListener('click',function(eventObj){
//     // alert("Somnath Temple is considered to be the first of the Jyotirlingas in India")
//     console.log("Somnath clicked");
//     eventObj.stopPropagation();
// },false)

/*important :- agar third parameter false hai (bubbling) matlab bottom up traverse karega
/*important :- agar third parameter true hai (capturing) matlab top down traverse karega

*/
// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
// },false)


document.querySelector('#images').addEventListener('click',function(event){
console.log(event);
//event.target se pta chalta hai ki kis target se ye event occur ho raha hai
console.log(event.target.tagName);
if(event.target.tagName  === 'IMG'){
    console.log(event.target.id);
    
let removeIt = event.target.parentNode
    removeIt.remove()
}
    
   // removeIt.parentNode.removeChild(removeIt)
},false)