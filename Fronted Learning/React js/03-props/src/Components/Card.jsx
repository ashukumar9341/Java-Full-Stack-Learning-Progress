
// const Card = (probs) => {
//     console.log(probs);
    
//   return (
//     <div className="card">
//        <img src="https://plus.unsplash.com/premium_photo-1792767118399-602467074460?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
//        <h1>Ashu</h1>
//        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, necessitatibus.</p>
//        <button>view profile</button>
//       </div>
//   )
// }

function Card (props){
  
    console.log(props);
    
console.log(props.user,props.age);
return (
    <div className="card">
        <img src = {props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, necessitatibus.</p>
        <button>view profile</button>
      </div>
)   
}
export default Card

