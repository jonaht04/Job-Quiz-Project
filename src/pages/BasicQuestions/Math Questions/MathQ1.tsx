import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 1</strong></h1>
      <h2>What specific area of mathematics are you most passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Software Engineering")}>Pure mathematics</button>
        <button className="answerButton" style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Software Engineering")}>Applied mathematics</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Software Engineering")}>Statistics</button>
    </div>
  )
}
export default MathQ1;