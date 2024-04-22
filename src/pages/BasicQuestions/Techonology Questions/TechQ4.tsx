import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ4: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 4</strong></h1>
      <h2>Do you prefer working in a large corporate environment or a startup culture?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Large Corporation")}>Large Corporation</button>
        <button className="answerButton" onClick={() => handleButtonClick("Startup")}>Startup</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("No Preference")}>No Preference</button>
    </div>
  )
}
export default TechQ4;