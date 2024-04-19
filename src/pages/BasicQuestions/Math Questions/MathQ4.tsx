import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const MathQ4: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Mathematics Branch: Question 4</h1>
      <h2>Are you comfortable working with large datasets and applying mathematical algorithms for analysis?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Somewhat</button>
    </div>
  )
}
export default MathQ4;