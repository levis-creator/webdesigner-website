import { AlignJustify } from "lucide-react"
import "./navbar.css"

// Home
// resume
// services
// skills
// projects
// about
// Contact
// lets talk button
function Navbar() {
  return (
    <nav>
      <div>Logo</div>
      <button className="iconbutton toggle"><AlignJustify/> </button>
      <ul className="navlinks">
        <li>Home</li>
        <li>Resume</li>
        <li>Services</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
        <li><button className="primarybutton">
          Lets talk
        </button></li>
      </ul>
    </nav>
  )
}

export default Navbar;