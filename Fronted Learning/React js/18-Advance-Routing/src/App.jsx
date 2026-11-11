import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Women from './Pages/Women'
import Men  from './Pages/Men'
import Kids from './Pages/Kids'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import CourseDetail from './Pages/CourseDetail'
import Navbar2 from './Components/Navbar2'
const App = () => { 
  return (
    <div className=' flow-root h-screen bg-black text-amber-50 '>
       <Navbar />
       <Navbar2/>
       <Footer />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Courses' element={<Courses/>} />
          <Route path='/Courses/:CourseId' element={<CourseDetail/>}/>
          <Route path='/Contact' element={<Contact/>}  />
          <Route path='/Product' element={<Product/>}> 
            <Route path='Men' element={<Men/>}/>
          <Route path='Women' element={<Women/>}/>
          <Route path='Kids' element={<Kids/>}/>
          </Route>
          
          <Route path='*' element={<NotFound/>}  />
        </Routes>
     
    </div>
  )
}

export default App
