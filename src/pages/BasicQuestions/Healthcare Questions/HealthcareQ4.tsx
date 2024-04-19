import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function HealthcareQ4() {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 4</h1>
      <h2>Do you have any specific medical conditions or areas of interest you'd like to focus on?</h2>
      <div className="answerGrid">
        <button className="answerButton">Yes</button>
        <button className="answerButton">No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">Not Sure</button>
    </div>
  )
}
export default HealthcareQ4;