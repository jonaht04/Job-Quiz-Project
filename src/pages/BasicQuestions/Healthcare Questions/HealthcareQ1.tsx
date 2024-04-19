import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function HealthcareQ1() {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 1</h1>
      <h2>Which type of healthcare role interests you the most?</h2>
      <img className="MainImage" src={MainImage} alt="logo" />
      <div className="answerGrid">
        <button className="answerButton">Medicine (Physician, Surgeon, etc.)</button>
        <button className="answerButton">Nursing</button>
        <button className="answerButton">Medical Research</button>
        <button className="answerButton">Healthcare Administration</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">Pharmaceuticals</button>
    </div>
  )
}
export default HealthcareQ1;