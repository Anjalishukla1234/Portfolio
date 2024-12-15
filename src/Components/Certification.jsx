import certification from  './data/certification.json'

import csspdf from '../csspdf/css certificate.pdf';

import sqlpdf from '../sqlpdf/sql_basic certificate.pdf';


export default function Certification() {
  return (
    <>
  <div className='container ex'  id="certification"
  
  data-aos="zoom-in" 
data-aos-duration = "1000">

  <h1 style={{fontFamily:'poppins'}}>Certifications</h1>


<div className="box">
  <h3>HackerRannk Certificate <img src={`/asests/${certification.imgSrc}`} alt=""/>
  </h3>



<div className='hacker'>
<h6>CSS Certification</h6>
<a href={csspdf} download="CSS certificate.pdf"                     
className="btn btn-outline-warning">Download</a>




<h6>SQL Certification</h6>  
  <a href={sqlpdf} download="sql_basic certificate.pdf"                       className="btn btn-outline-warning">Download</a>
</div>

</div>
  </div> 

  </>
  )
}
