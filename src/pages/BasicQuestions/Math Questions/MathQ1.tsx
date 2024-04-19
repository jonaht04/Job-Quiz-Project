import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const MathQ1: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Mathematics Branch: Question 1</h1>
      <h2>What specific area of mathematics are you most passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Pure mathematics</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Applied mathematics</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Statistics</button>
    </div>
  )
}
export default MathQ1;