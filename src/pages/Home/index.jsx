import "./home.css"
import mainImage from '../../assets/myimage.png'
function Home() {

  const homePage ={
    title:"Web designer",
    description:"A freelancer UI & UX designer"
  }
  return (
    <section id="hero-section" className="">
      <div className="content-container">
        {/* intro text */}
        <div className="intro-text">
          <h6>Hello</h6>
          <span>
            i&apos;m a <h1>{homePage.title}</h1>
          </span>
          <p>{homePage.description}</p>
          <div className="intro-btn">
            <button className="primarybutton">Hire me</button>
            <button className="outlinedbutton">My work</button>
          </div>
        </div>
        {/* image */}
        <div className="intro-image">
        <img src={mainImage} alt="main image"/>
        </div>
      </div>
    </section>
  );
}
export default Home;
