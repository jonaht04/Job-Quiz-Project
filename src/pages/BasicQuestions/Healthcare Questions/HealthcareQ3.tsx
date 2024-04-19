import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const HealthcareQ3: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 3</h1>
      <h2>Are you interested in patient care or research-oriented roles?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Patient Care</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Research</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Both</button>
    </div>
  )
}
export default HealthcareQ3;