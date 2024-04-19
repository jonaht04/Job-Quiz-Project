import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function TechQ2() {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 2</h1>
      <h2>Are you interested in working with hardware or software development?</h2>
      <div className="answerGrid">
        <button className="answerButton">Hardware</button>
        <button className="answerButton">Software</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">Both</button>
    </div>
  )
}
export default TechQ2;