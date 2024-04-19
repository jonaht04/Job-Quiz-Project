import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function TechQ5() {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 5</h1>
      <h2>Are you interested in pursuing further education or certifications in your field?</h2>
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
export default TechQ5;