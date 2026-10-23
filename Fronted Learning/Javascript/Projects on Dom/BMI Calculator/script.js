const height = document.getElementById('height')
console.log(height);
//console.log(Number(height.value));

const weight = document.getElementById('weight')
console.log(weight);
//console.log(Number(weight.value));

const buttons = document.getElementById('button')
console.log(buttons);
const res = document.getElementById('para')
buttons.addEventListener(('click') , function(event){
   console.log(Number(height.value));
   console.log(Number(weight.value));
   
    const heightInMeter = Number(height.value)/100;
    console.log(heightInMeter);
    
    const weightInKg = Number(weight.value)
    
    const bmi = (weightInKg/(heightInMeter*heightInMeter))
    console.log(Number(bmi));
    
    const res = document.getElementById('para')
    console.log(res);
    
    res.innerHTML = bmi.toFixed(2)
})