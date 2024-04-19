import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const MathQ5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 5</strong></h1>
      <h2>Which type of role are you interested in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Actuarial science</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Financial analysis</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Data analysis</button>
    </div>
  )
}
export default MathQ5;