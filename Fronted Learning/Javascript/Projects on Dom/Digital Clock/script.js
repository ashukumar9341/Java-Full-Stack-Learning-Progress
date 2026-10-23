const countryInput = document.getElementById('CounrtyInput')
//console.log(countryInput.value);

const country =  document.getElementById('country')
//console.log(country.value);

country.addEventListener('change', function(){
    countryInput.value = country.value
})

let is24 =  false

const clock = document.getElementById('ditalClock')
//console.log(clock);

function upadteClock(){
    const now = new Date()
  clock.textContent = now.toLocaleTimeString();
  if(country.value == 'Russia'){

  }
    
}

upadteClock()

setInterval(upadteClock,1000)

const twelve = document.getElementById('twelve')
const twentyFour = document.getElementById('twentyFour')

const active = document.getElementsByClassName('active')
console.log(twelve.value);

active.addEventListener('click',()=>{
    
    if(active.value == twelve){
        clock.textContent =  new Date().toLocaleTimeString();

        
    }
})