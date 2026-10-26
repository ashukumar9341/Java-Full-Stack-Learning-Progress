
function callMe(){
    console.log(this);
}
// callMe()

function outer(){
    callMe()
}
outer()