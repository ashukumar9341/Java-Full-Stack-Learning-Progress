import Card from './Components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} img='https://plus.unsplash.com/premium_photo-1792767118399-602467074460?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
      <Card user='Ashu' age={22} img='https://plus.unsplash.com/premium_photo-1769322611063-a00b856e79c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
      <Card user="Afaraj" age={20} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIS69_XJp-B5IBvSEmk0LvbA3_umbbr5xNaeijQKhyZzmaEgi-f3HjhHc5&s=10' />
    </div>

  )
}

export default App



