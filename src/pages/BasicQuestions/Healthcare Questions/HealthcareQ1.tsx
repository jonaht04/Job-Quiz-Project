import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const HealthcareQ1: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 1</strong></h1>
      <h2>Which type of healthcare role interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Medicine (Physician, Surgeon, etc.)</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Nursing</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Medical Research</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Healthcare Administration</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Pharmaceuticals</button>
    </div>
  )
}
export default HealthcareQ1;