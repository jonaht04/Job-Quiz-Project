import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function TechQ4() {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 4</h1>
      <h2>Do you prefer working in a large corporate environment or a startup culture?</h2>
      <img className="MainImage" src={MainImage} alt="logo" />
      <div className="answerGrid">
        <button className="answerButton">Large Corporation</button>
        <button className="answerButton">Startup</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">No Preference</button>
    </div>
  )
}
export default TechQ4;