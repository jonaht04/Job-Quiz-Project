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
        <button className="answerButton" onClick={() => handleButtonClick("Medicine")}>Medicine (Physician, Surgeon, etc.)</button>
        <button className="answerButton" onClick={() => handleButtonClick("Nursing")}>Nursing</button>
        <button className="answerButton" onClick={() => handleButtonClick("Medical Research<")}>Medical Research</button>
        <button className="answerButton" onClick={() => handleButtonClick("Healthcare Administration")}>Healthcare Administration</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Pharmaceuticals")}>Pharmaceuticals</button>
    </div>
  )
}
export default HealthcareQ1;