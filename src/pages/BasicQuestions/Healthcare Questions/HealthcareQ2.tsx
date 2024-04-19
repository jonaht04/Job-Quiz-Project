import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const HealthcareQ2: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 2</h1>
      <h2>What area of medicine or healthcare are you passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Pediatrics</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Dentistry</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Psychiatry</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Emergency Medicine</button>
      </div>
    </div>
  )
}
export default HealthcareQ2;