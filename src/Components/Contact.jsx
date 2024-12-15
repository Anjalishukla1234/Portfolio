import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <>
  <div className="container contact" id="contact">
  <h1>Contact Me</h1>
  <div className="contact-icon"       
  data-aos="zoom-in" 
  data-aos-duration = "1000" >





   <a href="https://www.instagram.com"  target="_blank"         className="items"><FaInstagramSquare  className="icon"/></a>

   <a  href="https://www.linkedin.com"   target="_blank"  
  className="items"><FaLinkedin  className="icon"/></a>

   <a    href="https://www.github.com"     target="_blank"             
  className="items"><FaGithub  className="icon"/></a>

   <a  href="mailto:anjalishukla@gmail.com"  target="_blank"  
  className="items"><SiGmail  className="icon"/></a>
    
  </div>  
  </div>    
    </>
  )
}
