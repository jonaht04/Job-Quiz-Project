import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 1</strong></h1>
      <h2>Which type of healthcare role interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#179299"}} onClick={() => handleButtonClick("Medicine")}>Medicine (Physician, Surgeon, etc.)</button>
        <button className="answerButton" style={{backgroundColor: "#7287fd"}} onClick={() => handleButtonClick("Nursing")}>Nursing</button>
        <button className="answerButton" style={{backgroundColor: "#04a5e5"}} onClick={() => handleButtonClick("Medical Research<")}>Medical Research</button>
        <button className="answerButton" style={{backgroundColor: "#e64553"}} onClick={() => handleButtonClick("Healthcare Administration")}>Healthcare Administration</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#ea76cb"}} onClick={() => handleButtonClick("Pharmaceuticals")}>Pharmaceuticals</button>
    </div>
  )
}
export default HealthcareQ1;