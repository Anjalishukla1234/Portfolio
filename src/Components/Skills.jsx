import skills from './data/skill.json'




export default function Skills() {
  return (
<>
<div className="container skills max-6" id="skills">

  <h1>Skills</h1>
  <div className="items">
  {skills.map((data) => (
  <>
 
    <div className="item" key={data.id}
    
    data-aos="flip-left" 
data-aos-duration = "1000">
      <img src={`/asests/${data.imageSrc}`} alt="" />
      <h3>{data.title}</h3>
    </div>
  
  </>
  ))}
</div>
</div>
</>
  )
}
