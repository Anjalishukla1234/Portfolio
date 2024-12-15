import projects from './data/projects.json';

export default function Projects() {
  return (
    <>
  <div className="container projectss my-4"  id="projects">

   <h1>Projects</h1> 
   <div className="row d-flex justify-content-center align-content-center ">
  {projects.map((data) => (
  <>
  <div key={data.id} className='my-4 col-sm-6 col-md-4 col-lg-3 mx-5 '>
  <div className="card bg-black text-light" style={{width:'18rem', border:'1px solid purple', boxShadow:'5px 5px 10px 10px rgb(168, 47, 168)'}}
  
  
  
  
  
  data-aos="flip-right" 
  data-aos-duration = "1000">


<div className="img  d-flex justify-content-center align-content-center p-2">

<img src={`/asests/${data.imageSrc}`} className="card-img-top" alt="..."
style={{
  width:'190px',
  height:'180px',
 
  backgroundColor:'black',
}}
/>
</div>

  

  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>

    <a href={data.source} className="btn btn-warning">Code</a>
  </div>
</div>

  </div>
  </>
  ))}
   </div>
  </div>    
    </>
  )
}
