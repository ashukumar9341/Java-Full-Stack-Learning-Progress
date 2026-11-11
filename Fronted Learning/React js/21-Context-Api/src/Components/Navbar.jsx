
import Nav2 from './Nav2'
import {useContext} from 'react'
import { ThemeDataContext } from '../Context/ThemeContext';
const Navbar = () => {
    
    
  const [theme] = useContext(ThemeDataContext)
  
  return (
    <div className={theme}>
        <h2>{theme}</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
