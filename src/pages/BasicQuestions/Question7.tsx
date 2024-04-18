import "../Questions.css";
import MainImage from '../../assets/giphy.gif';
import Button3 from '../../assets/old_mac.jpg'
import Button4 from '../../assets/old_mac.jpg';

export function Question7() {
    return (<div className='container'>
    <h1>Question 7</h1>
    <h2>This is a placeholder question:</h2>
    <img className="MainImage" src={MainImage} alt="logo" />
    <div className="buttonGrid">
      <button className="bigButton">Yes</button>
      <button className="bigButton">No</button>
      <button className="bigButton">Example with picture
      <div></div>
        <img src={Button3} alt="logo" /></button>
      <button className="bigButton">Another Example w/ picture
        <img src={Button4} alt="logo" /></button>
    </div>
  </div>
)
}
export default Question7;