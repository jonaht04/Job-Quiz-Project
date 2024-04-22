import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ6: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };
  
  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 6</strong></h1>
      <h2>Are you open to further education or obtaining certifications?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Maybe")}>Maybe</button>
    </div>
  )
}
export default MathQ6;