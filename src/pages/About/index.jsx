import './about.css'
import myImage2 from '../../assets/myImage2.png'
import Table from '../../components/Table'
function About() {
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
         <Table/>
         <button className="primary-button">Download CV</button>
        </div>
    </div>
    </section>
  )
}

export default About