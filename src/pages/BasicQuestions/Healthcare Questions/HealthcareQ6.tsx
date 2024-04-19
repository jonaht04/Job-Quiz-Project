import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function HealthcareQ6() {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 6</h1>
      <h2>Are you interested in always being “On-call”?</h2>
      <h2>(you get called in for work whenever you are needed, can be at any time)</h2>
      <img className="MainImage" src={MainImage} alt="logo" />
      <div className="answerGrid">
        <button className="answerButton">Yes</button>
        <button className="answerButton">No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">Maybe</button>
    </div>
  )
}
export default HealthcareQ6;