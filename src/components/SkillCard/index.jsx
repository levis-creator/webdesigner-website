import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function SkillCard() {
  const percentage=66
  return (
    <div className="skill-card">
    <CircularProgressbar value={percentage} text={``}/>
    </div>
  )
}

export default SkillCard