import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function TechQ6() {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 6</h1>
      <h2>What industries are you interested in applying your technology skills to?</h2>
      <div className="answerGrid">
        <button className="answerButton">Healthcare</button>
        <button className="answerButton">Finance</button>
        <button className="answerButton">Entertainment</button>
        <button className="answerButton">Education</button>
        <button className="answerButton">Robotics/AI</button>
        <button className="answerButton">Transportation</button>
      </div>
    </div>
  )
}
export default TechQ6;