import "../../Questions.css";
import MainImage from '../../../assets/giphy.gif';

export function TechQ4() {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 4</h1>
      <h2>Which aspect of technology interests you the most?</h2>
      <img className="MainImage" src={MainImage} alt="logo" />
      <div className="buttonGrid">
        <button className="bigButton">Yes</button>
        <button className="bigButton">No</button>
        <button className="bigButton">Example with picture</button>
        <button className="bigButton">Another Example w/ picture</button>
      </div>
      <button className="bigButton">Example with picture</button>
    </div>
  )
}
export default TechQ4;