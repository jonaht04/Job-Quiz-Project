import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const MathQ2: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Mathematics Branch: Question 2</h1>
      <h2>In which sector are you interested in pursuing a career?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Education</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Industry</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Government</button>
    </div>
  )
}
export default MathQ2;