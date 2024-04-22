import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ4: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 4</strong></h1>
      <h2>Do you have any specific medical conditions or areas of interest you'd like to focus on?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Not Sure")}>Not Sure</button>
    </div>
  )
}
export default HealthcareQ4;