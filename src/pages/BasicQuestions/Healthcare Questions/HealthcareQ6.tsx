import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ6: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 6</strong></h1>
      <h2>Are you interested in always being “On-call”?</h2>
      <h2>(you get called in for work whenever you are needed, can be at any time)</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Maybe")}>Maybe</button>
    </div>
  )
}
export default HealthcareQ6;