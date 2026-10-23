const buttons = document.querySelectorAll('.button')
//console.log(buttons);
const body = document.querySelector('body')

buttons.forEach((button) => {
    //console.log(button);
        // we will put event listner on every button
        button.addEventListener('click',function(event){
            //click hone par jo kaam karna hai
            console.log(event);
           // console.log(event.target); 
            //console.log(event.target);
            if(event.target.id == 'black'){
               body.style.backgroundColor =  'black'
            }
            if(event.target.id == 'red'){
               body.style.backgroundColor =  'red'
            }
            if(event.target.id == 'yellow'){
               body.style.backgroundColor =  'yellow'
            }
            if(event.target.id == 'blue'){
               body.style.backgroundColor =  'blue'
            }
            if(event.target.id == 'beige'){
               body.style.backgroundColor =  'beige'
            }
           document.body.style.backgroundColor = event.target.id;
        })

        
})