import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ4: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 4</strong></h1>
      <h2>Are you comfortable working with large datasets and applying mathematical algorithms for analysis?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#179299"}} onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" style={{backgroundColor: "#7287fd"}} onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#04a5e5"}} onClick={() => handleButtonClick("Somewhat")}>Somewhat</button>
    </div>
  )
}
export default MathQ4;