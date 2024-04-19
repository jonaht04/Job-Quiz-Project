import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function HealthcareQ3() {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 3</h1>
      <h2>Are you interested in patient care or research-oriented roles?</h2>
      <img className="MainImage" src={MainImage} alt="logo" />
      <div className="answerGrid">
        <button className="answerButton">Patient Care</button>
        <button className="answerButton">Research</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">Both</button>
    </div>
  )
}
export default HealthcareQ3;