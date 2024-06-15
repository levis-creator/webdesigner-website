import './about.css'
import myImage2 from '../../assets/myImage2.png'
import Table from '../../components/Table'
function About() {
  const userData={
    username:"Mac Doe",
  dob:"30th june 1957",
  address:"  Elice tower along Kangundo road",
  zip:"00900",
  email:"joedoe@email.com",
  phone:"+25498765432",
  }
  
  return (
    <section id="about">
    <div className='about-container'>
        {/* image */}
        <div className='about-image'>
        <img src={myImage2} alt="My image" />
        </div>
        {/* info */}
        <div className="info-text">
          <h2>About me</h2>
         <Table userDetails={userData}/>
        
         <button className="primary-button">Download CV</button>
        </div>
    </div>
    </section>
  )
}

export default About