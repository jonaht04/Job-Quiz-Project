import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ5: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 5</strong></h1>
      <h2>Are you comfortable working in high-stress environments such as hospitals or clinics?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#179299"}}  onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" style={{backgroundColor: "#7287fd"}} onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#04a5e5"}} onClick={() => handleButtonClick("Maybe")}>Maybe</button>
    </div>
  )
}
export default HealthcareQ5;