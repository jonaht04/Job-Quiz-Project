import "../../Questions.css";
import Marketing from '../../../assets/SuiseiStonks.png'
import Finance from '../../../assets/FInance.jpeg'
import Management from '../../../assets/managment.webp'
import Entrepreneurship from '../../../assets/Entrepreneurship.png'

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 1</strong></h1>
      <h2>Which area of business are you most interested in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Finance")}>Finance
        <img src={Finance} alt="logo" style={{ height: "250px", width: "400px"}}></img></button>
        <button className="answerButton" onClick={() => handleButtonClick("Marketing")}>Marketing
        <img src={Marketing} alt="logo" style={{ height: "250px", width: "400px"}}></img></button>
        <button className="answerButton" onClick={() => handleButtonClick("Management")}>Management
        <img src={Management} alt="logo" style={{ height: "250px", width: "400px"}}></img></button>
        <button className="answerButton" onClick={() => handleButtonClick("Entrepreneurship")}>Entrepreneurship
        <img className="image" src={Entrepreneurship} alt="logo" style={{ height: "250px", width: "400px"}}></img></button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Consulting")}>Consulting</button>
    </div>
  )
}
export default BusinessQ1;