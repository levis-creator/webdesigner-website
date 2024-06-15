import SkillCard from "../../components/SkillCard"
import "./skills.css"
const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-items">
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
      </div>
    </section>
  )
}

export default Skills