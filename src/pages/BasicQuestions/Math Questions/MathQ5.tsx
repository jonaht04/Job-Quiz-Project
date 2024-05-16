import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ5: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 5</strong></h1>
      <h2>Which type of role are you interested in?</h2>
      <div className="answerGrid">
      <button className="answerButton" style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Data analysis")}>Data analysis</button>
        <button className="answerButton" style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Financial analysis")}>Financial analysis</button>
      </div>
    </div>
  )
}
export default MathQ5;