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
        <button className="answerButton" onClick={() => handleButtonClick("Healthcare")}>Healthcare</button>
        <button className="answerButton" onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" onClick={() => handleButtonClick("Entertainment")}>Entertainment</button>
        <button className="answerButton" onClick={() => handleButtonClick("Education")}>Education</button>
        <button className="answerButton" onClick={() => handleButtonClick("Robotics/AI")}>Robotics/AI</button>
        <button className="answerButton" onClick={() => handleButtonClick("Transportation")}>Transportation</button>
      </div>
    </div>
  )
}
export default TechQ6;