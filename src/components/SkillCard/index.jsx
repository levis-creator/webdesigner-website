import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./skillCard.css"
function SkillCard() {
  const percentage=66
  return (
    <div className="skill-card">
    <CircularProgressbar 
    value={percentage}
     text={`${percentage}%`}
     strokeWidth={10}
     styles={
      buildStyles(
        {
          pathColor:"#f00"
        }
      )
     }
     />
     <h3>Figma</h3>
    </div>
  )
}

export default SkillCard