import { useEffect, useRef } from 'react';
import Pdf from '../Pdf/Anjali Shukla -RESUME.pdf';
import girl from './data/girl.json'

import Typed from "typed.js"


const Home = () => {

  const typedRef = useRef(null)
useEffect(() => {
  const options = {
  strings : ["Welcome to my profile", "My name is Anjali Shukla"],
  typeSpeed:50,
  backSpeed:50,
  loop: true
  }


  const typed = new Typed(typedRef.current , options)

  return () => {
  typed.destroy()
  }
}, [])

  return (
    <>
  <div className="container home" id="home">
  <div className="left"  
  data-aos="fade-up-right" data-aos-duration = "1000">



<h1 ref={typedRef}></h1>


<a style={{margin:'20px'}} href={Pdf} download="Anjali Shukla -RESUME.pdf"   className="btn btn-outline-warning my-3">Download Resume</a>

  </div>
  <div className="right">
  
  <div className="img"   
  data-aos="fade-up-left" 
data-aos-duration = "1000">

  <img src={`/asests/${girl.imgSrc}`} alt="" />
  </div>

  </div>
  </div>    
    </>
  )
}

export default Home
