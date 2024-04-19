import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const MathQ6: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Mathematics Branch: Question 6</h1>
      <h2>Are you open to further education or obtaining certifications?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Maybe</button>
    </div>
  )
}
export default MathQ6;