import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 2</strong></h1>
      <h2>What area of medicine or healthcare are you passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Pediatrics")}>Pediatrics</button>
        <button className="answerButton" onClick={() => handleButtonClick("Dentistry")}>Dentistry</button>
        <button className="answerButton" onClick={() => handleButtonClick("Psychiatry")}>Psychiatry</button>
        <button className="answerButton" onClick={() => handleButtonClick("Emergency Medicine")}>Emergency Medicine</button>
      </div>
    </div>
  )
}
export default HealthcareQ2;