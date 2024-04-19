import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const HealthcareQ4: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 4</h1>
      <h2>Do you have any specific medical conditions or areas of interest you'd like to focus on?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Not Sure</button>
    </div>
  )
}
export default HealthcareQ4;