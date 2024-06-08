import "./home.css"
import mainImage from '../../assets/myimage.png'
function Home() {
  return (
    <section id="hero-section" className="">
      <div className="content-container">
        {/* intro text */}
        <div className="intro-text">
          <h6>Hello</h6>
          <span>
            i&apos;m a <h1>Web Designer</h1>
          </span>
          <p>A freelancer UI & UX designer</p>
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
