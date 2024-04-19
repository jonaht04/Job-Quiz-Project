import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const HealthcareQ5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 5</h1>
      <h2>Are you comfortable working in high-stress environments such as hospitals or clinics?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Maybe</button>
    </div>
  )
}
export default HealthcareQ5;