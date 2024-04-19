import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const MathQ3: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Mathematics Branch: Question 3</h1>
      <h2>Do you have experience or interest in using mathematical modeling and simulation techniques?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Somewhat</button>
    </div>
  )
}
export default MathQ3;