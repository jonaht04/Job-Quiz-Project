import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const TechQ5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 5</h1>
      <h2>Are you interested in pursuing further education or certifications in your field?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Maybe</button>
    </div>
  )
}
export default TechQ5;