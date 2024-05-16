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
        <button className="answerButton" style={{backgroundColor: "#179299"}} onClick={() => handleButtonClick("Pediatrics")}>Pediatrics</button>
        <button className="answerButton" style={{backgroundColor: "#7287fd"}} onClick={() => handleButtonClick("Dentistry")}>Dentistry</button>
        <button className="answerButton" style={{backgroundColor: "#04a5e5"}} onClick={() => handleButtonClick("Psychiatry")}>Psychiatry</button>
        <button className="answerButton" style={{backgroundColor: "#e64553"}} onClick={() => handleButtonClick("Emergency Medicine")}>Emergency Medicine</button>
      </div>
    </div>
  )
}
export default HealthcareQ2;