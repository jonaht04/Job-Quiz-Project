import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ3: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 3</strong></h1>
      <h2>Are you interested in patient care or research-oriented roles?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Patient Care")}>Patient Care</button>
        <button className="answerButton" onClick={() => handleButtonClick("Research")}>Research</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Both")}>Both</button>
    </div>
  )
}
export default HealthcareQ3;