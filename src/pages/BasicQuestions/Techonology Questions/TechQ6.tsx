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
        <button className="answerButton" style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Healthcare")}>Healthcare</button>
        <button className="answerButton" style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Entertainment")}>Entertainment</button>
        <button className="answerButton" style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Education")}>Education</button>
        <button className="answerButton" style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Robotics/AI")}>Robotics/AI</button>
        <button className="answerButton" style={{backgroundColor: "#fab387"}}onClick={() => handleButtonClick("Transportation")}>Transportation</button>
      </div>
    </div>
  )
}
export default TechQ6;