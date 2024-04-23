import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ3: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 3</strong></h1>
      <h2>What programming languages or technical skills are you most proficient in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Java")}>Java</button>
        <button className="answerButton" onClick={() => handleButtonClick("Python")}>Python</button>
        <button className="answerButton" onClick={() => handleButtonClick("C++")}>C++</button>
        <button className="answerButton" onClick={() => handleButtonClick("SQL")}>SQL</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("JavaScript")}>JavaScript</button>
    </div>
  )
}
export default TechQ3;