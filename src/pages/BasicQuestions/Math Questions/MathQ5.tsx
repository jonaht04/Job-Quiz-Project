import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ5: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 5</strong></h1>
      <h2>Which type of role are you interested in?</h2>
      <div className="answerGrid">
      <button className="answerButton" onClick={() => handleButtonClick("Data analysis")}>Data analysis</button>
        <button className="answerButton" onClick={() => handleButtonClick("Financial analysis")}>Financial analysis</button>
      </div>
    </div>
  )
}
export default MathQ5;