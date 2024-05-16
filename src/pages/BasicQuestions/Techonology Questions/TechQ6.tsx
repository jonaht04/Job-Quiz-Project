import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ6: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 6</strong></h1>
      <h2>What industries are you interested in applying your technology skills to?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#179299"}} onClick={() => handleButtonClick("Healthcare")}>Healthcare</button>
        <button className="answerButton" style={{backgroundColor: "#7287fd"}} onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" style={{backgroundColor: "#04a5e5"}} onClick={() => handleButtonClick("Entertainment")}>Entertainment</button>
        <button className="answerButton" style={{backgroundColor: "#e64553"}} onClick={() => handleButtonClick("Education")}>Education</button>
        <button className="answerButton" style={{backgroundColor: "#ea76cb"}} onClick={() => handleButtonClick("Robotics/AI")}>Robotics/AI</button>
        <button className="answerButton" style={{backgroundColor: "#df8e1d"}}onClick={() => handleButtonClick("Transportation")}>Transportation</button>
      </div>
    </div>
  )
}
export default TechQ6;