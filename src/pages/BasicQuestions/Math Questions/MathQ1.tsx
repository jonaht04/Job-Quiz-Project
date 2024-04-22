import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 1</strong></h1>
      <h2>What specific area of mathematics are you most passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Software Engineering")}>Pure mathematics</button>
        <button className="answerButton" onClick={() => handleButtonClick("Software Engineering")}>Applied mathematics</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Software Engineering")}>Statistics</button>
    </div>
  )
}
export default MathQ1;