import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Certification from './Components/Certification'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from "aos";
import 'aos/dist/aos.css'

import './App.css'
import Skills from './Components/Skills'
import { useEffect } from 'react'

function App() {

useEffect(() => {
Aos.init();

}, [])

  
  return (
   <>
  <NavBar/>
  <div className="container">
  <Home/>
  <Certification/>
  <Skills/>
  <Projects/>
  <Contact/>
  </div>
  </>
  )
}

export default App
