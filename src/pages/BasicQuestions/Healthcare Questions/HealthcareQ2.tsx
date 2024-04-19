import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function HealthcareQ2() {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 2</h1>
      <h2>What area of medicine or healthcare are you passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton">Pediatrics</button>
        <button className="answerButton">Dentistry</button>
        <button className="answerButton">Psychiatry</button>
        <button className="answerButton">Emergency Medicine</button>
      </div>
    </div>
  )
}
export default HealthcareQ2;